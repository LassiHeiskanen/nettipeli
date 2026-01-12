/**
 * Kylmätekniikkapeli - Supabase-integraatio
 * 
 * Tämä tiedosto käsittelee tietokantayhteyden ja tulosten tallennuksen/hakemisen.
 * Supabase-projekti tulee konfiguroida erikseen.
 */

// ============================================
// KONFIGURAATIO - Muokkaa nämä arvot omaan projektiisi
// ============================================

const SUPABASE_CONFIG = {
    // Korvaa nämä omilla Supabase-projektisi arvoilla
    url: 'https://your-project-id.supabase.co',
    anonKey: 'your-anon-key-here',
    
    // Taulun nimi (oletus)
    tableName: 'leaderboard'
};

// ============================================
// SUPABASE-ALUSTUS
// ============================================

let supabaseClient = null;

/**
 * Alustaa Supabase-asiakkaan
 * @returns {Object|null} Supabase-asiakas tai null jos alustus epäonnistui
 */
function initSupabase() {
    try {
        if (typeof supabase !== 'undefined') {
            supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
            console.log('Supabase-asiakas alustettu onnistuneesti');
            return supabaseClient;
        } else {
            console.warn('Supabase-kirjasto ei ole ladattu');
            return null;
        }
    } catch (error) {
        console.error('Supabase-alustus epäonnistui:', error);
        return null;
    }
}

/**
 * Tarkistaa onko Supabase-yhteys käytettävissä
 * @returns {boolean} True jos yhteys on käytettävissä
 */
function isSupabaseAvailable() {
    return supabaseClient !== null && typeof supabase !== 'undefined';
}

// ============================================
// TULOSTEN TALLENNUS
// ============================================

/**
 * Tallentaa pelaajan tuloksen tietokantaan
 * @param {Object} playerData - Pelaajan tiedot
 * @param {string} playerData.name - Pelaajan nimi (pakollinen)
 * @param {string} playerData.phone - Puhelinnumero (valinnainen)
 * @param {number} playerData.score - Pistemäärä
 * @returns {Promise<Object>} Tallennustulos
 */
async function saveScore(playerData) {
    const { name, phone, score } = playerData;

    // Validointi
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return {
            success: false,
            error: 'Nimi on pakollinen'
        };
    }

    if (typeof score !== 'number' || score < 0) {
        return {
            success: false,
            error: 'Virheellinen pistemäärä'
        };
    }

    // Tarkista Supabase-yhteys
    if (!isSupabaseAvailable()) {
        console.warn('Supabase ei ole käytettävissä - tallennetaan paikallisesti');
        return saveScoreLocally(playerData);
    }

    try {
        // Prepare data for insertion
        const insertData = {
            player_name: name.trim(),
            phone: phone ? phone.trim() : null,
            score: Math.round(score),
            created_at: new Date().toISOString()
        };

        const { data, error } = await supabaseClient
            .from(SUPABASE_CONFIG.tableName)
            .insert([insertData])
            .select();

        if (error) {
            console.error('Tallennusvirhe:', error);
            
            // Yritä tallentaa paikallisesti verkkovirheen sattuessa
            if (error.message.includes('network') || error.message.includes('fetch')) {
                console.log('Verkkovirhe - yritetään paikallista tallennusta');
                return saveScoreLocally(playerData);
            }
            
            return {
                success: false,
                error: error.message
            };
        }

        console.log('Tulos tallennettu onnistuneesti:', data);
        return {
            success: true,
            data: data[0]
        };

    } catch (error) {
        console.error('Tallennuspoikkeus:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Tallentaa tuloksen paikallisesti (localStorage) verkkoyhteyden puuttuessa
 * @param {Object} playerData - Pelaajan tiedot
 * @returns {Promise<Object>} Tallennustulos
 */
async function saveScoreLocally(playerData) {
    try {
        const localData = {
            ...playerData,
            timestamp: new Date().toISOString(),
            source: 'local'
        };

        // Hae olemassa olevat tulokset
        const existingData = JSON.parse(localStorage.getItem('kylmatekniikka_scores') || '[]');
        
        // Lisää uusi tulos
        existingData.push(localData);
        
        // Tallenna takaisin
        localStorage.setItem('kylmatekniikka_scores', JSON.stringify(existingData));
        
        console.log('Tulos tallennettu paikallisesti:', localData);
        
        return {
            success: true,
            local: true,
            data: localData,
            message: 'Tulos tallennettu paikallisesti. Yhdistä verkkoon synkronoidaksesi.'
        };

    } catch (error) {
        console.error('Paikallinen tallennus epäonnistui:', error);
        return {
            success: false,
            error: 'Tallennus epäonnistui'
        };
    }
}

// ============================================
// TULOSLISTAN HAKEMINEN
// ============================================

/**
 * Hakee Top 5 -tuloslistan tietokannasta
 * @param {number} limit - Haettavien tulosten määrä (oletus 5)
 * @returns {Promise<Object>} Tuloslista
 */
async function getLeaderboard(limit = 5) {
    if (!isSupabaseAvailable()) {
        console.warn('Supabase ei ole käytettävissä - haetaan paikalliset tulokset');
        return getLocalLeaderboard(limit);
    }

    try {
        const { data, error } = await supabaseClient
            .from(SUPABASE_CONFIG.tableName)
            .select('player_name, phone, score, created_at')
            .order('score', { ascending: false })
            .limit(limit);

        if (error) {
            console.error('Hakuvirhe:', error);
            return getLocalLeaderboard(limit);
        }

        return {
            success: true,
            data: data || [],
            source: 'supabase'
        };

    } catch (error) {
        console.error('Hakupoikkeus:', error);
        return getLocalLeaderboard(limit);
    }
}

/**
 * Hakee paikallisen tuloslistan (localStorage)
 * @param {number} limit - Haettavien tulosten määrä
 * @returns {Object} Paikallinen tuloslista
 */
function getLocalLeaderboard(limit = 5) {
    try {
        const storedData = localStorage.getItem('kylmatekniikka_scores');
        const scores = storedData ? JSON.parse(storedData) : [];
        
        // Järjestä pistemäärän mukaan ja ota ensimmäiset 'limit'
        const sortedScores = scores
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
        
        return {
            success: true,
            data: sortedScores,
            local: true,
            source: 'localStorage'
        };

    } catch (error) {
        console.error('Paikallinen haku epäonnistui:', error);
        return {
            success: false,
            data: [],
            error: 'Tuloslistaa ei voida ladata'
        };
    }
}

// ============================================
// HYLLYTETTYJEN TULOSTEN SYNKRONOINTI
// ============================================

/**
 * Synkronoi paikallisesti tallennetut tulokset Supabaseen
 * Tätä funktiota voi kutsua kun yhteys palautuu
 * @returns {Promise<Object>} Synkronoinnin tulos
 */
async function syncLocalScores() {
    if (!isSupabaseAvailable()) {
        return {
            success: false,
            error: 'Supabase ei ole käytettävissä'
        };
    }

    try {
        const storedData = localStorage.getItem('kylmatekniikka_scores');
        const localScores = storedData ? JSON.parse(storedData) : [];
        
        // Erota synkronoitavat tulokset
        const toSync = localScores.filter(score => score.source === 'local');
        
        if (toSync.length === 0) {
            return {
                success: true,
                synced: 0,
                message: 'Ei synkronoitavia tuloksia'
            };
        }

        let syncedCount = 0;
        const errors = [];

        for (const score of toSync) {
            try {
                const { data, error } = await supabaseClient
                    .from(SUPABASE_CONFIG.tableName)
                    .insert([{
                        player_name: score.name,
                        phone: score.phone || null,
                        score: score.score,
                        created_at: score.timestamp
                    }])
                    .select();

                if (!error) {
                    score.source = 'synced';
                    syncedCount++;
                } else {
                    errors.push(error.message);
                }
            } catch (err) {
                errors.push(err.message);
            }
        }

        // Päivitä localStorage
        localStorage.setItem('kylmatekniikka_scores', JSON.stringify(localScores));

        return {
            success: errors.length === 0,
            synced: syncedCount,
            errors: errors.length,
            message: `${syncedCount}/${toSync.length} tulosta synkronoitu`
        };

    } catch (error) {
        console.error('Synkronointivirhe:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// ============================================
// TIETOKANTASKEEMAN ESIMERKKI
// ============================================

/**
 * Palauttaa SQL-komennon, jolla luodaan tarvittava taulukko Supabaseen
 * Tämä on tarkoitettu vain viittaukseen - suorita SQL Supabase-konsolissa
 * @returns {string} SQL-komento
 */
function getTableSchema() {
    return `
-- Suorita tämä SQL Supabase SQL Editorissa
CREATE TABLE IF NOT EXISTS ${SUPABASE_CONFIG.tableName} (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    player_name TEXT NOT NULL,
    phone TEXT,
    score INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Luo indeksi nopeampia hakuja varten
CREATE INDEX IF NOT EXISTS idx_${SUPABASE_CONFIG.tableName}_score 
ON ${SUPABASE_CONFIG.tableName}(score DESC);

-- Ota käyttöön RLS (Row Level Security)
ALTER TABLE ${SUPABASE_CONFIG.tableName} ENABLE ROW LEVEL SECURITY;

-- Anna insert-oikeudet anon-roolille (client)
CREATE POLICY "Allow anonymous inserts" ON ${SUPABASE_CONFIG.tableName}
    FOR INSERT WITH CHECK (true);

-- Anna select-oikeudet anon-roolille (client)
CREATE POLICY "Allow anonymous selects" ON ${SUPABASE_CONFIG.tableName}
    FOR SELECT USING (true);
    `;
}

// ============================================
// VIIVAUKSET JA VIRHEENKÄSITTELY
// ============================================

/**
 * Näyttää virheilmoituksen käyttäjälle
 * @param {string} message - Virheviesti
 * @param {string} type - Virheen tyyppi ('error', 'warning', 'info')
 */
function showNotification(message, type = 'error') {
    // Tarkista onko notification-funktio käytettävissä
    if (typeof window.showGameNotification === 'function') {
        window.showGameNotification(message, type);
        return;
    }

    // Oletuskäyttäytyminen - konsoliin kirjoitus
    console[type === 'error' ? 'error' : 'warn'](`[${type.toUpperCase()}] ${message}`);
}

// ============================================
// ALUSTA ASIAAKAS SIVUN LATAUKSESSA
// ============================================

// Alusta Supabeasiakas kun sivu on ladattu
document.addEventListener('DOMContentLoaded', function() {
    initSupabase();
});

// Vie funktiot globaaliin käyttöön
window.SupabaseAPI = {
    init: initSupabase,
    isAvailable: isSupabaseAvailable,
    saveScore,
    getLeaderboard,
    syncLocalScores,
    getTableSchema
};
