/**
 * Kylmätekniikkapeli - Supabase-konfiguraatio (malli)
 * 
 * Kopioi tämä tiedosto nimelle supabase-config.js
 * ja täytä omilla Supabase-arvoillasi.
 * 
 * ÄLÄ tallenna tätä tiedostoa repositorioon sellaisenaan!
 */

// ============================================
// KONFIGURAATIO - Täytä omilla arvoillasi
// ============================================

const SUPABASE_CONFIG = {
    // Supabase-projektin URL (muokkaa tämä)
    url: 'https://your-project-id.supabase.co',
    
    // Supabase-projektin anon-key (muokkaa tämä)
    // Löydät tämän: Supabase Console → Settings → API → anon key
    anonKey: 'your-anon-key-here',
    
    // Taulun nimi (oletus)
    tableName: 'leaderboard'
};

// ============================================
// ÄLÄ MUOKKAA TÄMÄN ALAPUOLELLA
// ============================================

// Kopioi loput supabase.js-tiedostosta tai käytä suoraan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPABASE_CONFIG };
}
