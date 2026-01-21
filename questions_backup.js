/**
 * Kylmätekniikkapeli - Kysymyspankit
 * 
 * Kysymykset on jaettu kolmeen vaikeustasoon:
 * - Lämmittely (Helppo): Peruskäsitteet ja perustiedot
 * - Keskitaso: Hieman syvällisempää teknistä tietoa
 * - Vaativa: Vaikeita, asiantuntijatason kysymyksiä
 */

const easyQuestions = [
    {
        question: "Mikä on kylmäkoneen pääkomponentti, joka puristaa kylmäainekaasun?",
        answers: [
            "Kompressori",
            "Haihdutin",
            "Lauhdutin",
            "Paisuntaventtiili"
        ],
        correctIndex: 0,
        explanation: "Kompressori on kylmäkoneen sydän, joka puristaa matalapaineisen kylmäaineen korkeapaineeksi."
    },
    {
        question: "Mitä tehtävää haihtimella on kylmäjärjestelmässä?",
        answers: [
            "Se jäähdyttää ympäröivän ilman tai nesteen",
            "Se lämmittää kylmäaineen",
            "Se puhdistaa kylmäaineen epäpuhtauksista",
            "Se säätelee kylmäaineen virtausta"
        ],
        correctIndex: 1,
        explanation: "Haihdutin vastaanottaa lämpöä ympäristöstään ja haihduttaa kylmäaineen, jolloin se jäähdyttää ympäröivää tilaa."
    },
    {
        question: "Mikä kylmäaine on yleisin nykyaikaisissa jääkaapeissa?",
        answers: [
            "R-134a",
            "R-12",
            "R-22",
            "R-410A"
        ],
        correctIndex: 2,
        explanation: "R-134a (tetrafluoretaani) on yleisin kylmäaine nykyaikaisissa kotitalousjääkaapeissa sen ympäristöystävällisyyden vuoksi."
    },
    {
        question: "Mitä tarkoittaa termiä 'COP' kylmätekniikassa?",
        answers: [
            "Lämpökerroin (Coefficient of Performance)",
            "Kylmätekninen Osapuoli",
            "Kompressorin Paine",
            "Kylmäaineen Olomuoto"
        ],
        correctIndex: 3,
        explanation: "COP (Coefficient of Performance) mittaa kylmäkoneen tehokkuutta - mitä korkeampi COP, sitä energiatehokkaampi laite."
    },
    {
        question: "Mikä seuraavista on kylmäkoneen peruskomponentti?",
        answers: [
            "Kaikki mainitut ovat komponentteja",
            "Vain kompressori",
            "Vain kompressori ja lauhdutin",
            "Vain haihtimen ja paisuntaventtiili"
        ],
        correctIndex: 2,
        explanation: "Kylmäkoneen peruskomponentit ovat kompressori, lauhdutin, paisuntaventtiili ja haihtimen - nämä muodostavat kylmäainekierron."
    }
];

const mediumQuestions = [
    {
        question: "Miksi kylmäaineen on oltava korkeapaineinen ennen lauhdutinta?",
        answers: [
        "Jotta se voi kondensoitua korkeassa lämpötilassa",
        "Jotta kompressori toimii tehokkaammin",
        "Jotta paisuntaventtiili avautuu",
        "Jotta haihtimen jäähdytysteho kasvaa"
        ],
        correctIndex: 1,
        explanation: "Korkeapaineinen kylmäaine kondensoituu lauhduttimessa korkeammassa lämpötilassa, mikä mahdollistaa lämmön siirtymisen ympäristöön."
    },
    {
        question: "Mikä on termostaattisen paisuntaventtiilin (TXV) päätehtävä?",
        answers: [
        "Säätää kylmäaineen virtausta haihtimeen jäähdytystarpeen mukaan",
        "Pysäyttää kylmäkoneen kun haluttu lämpötila saavutetaan",
        "Suojata kompressoria ylikuormitukselta",
        "Puhdistaa kylmäaineen epäpuhtauksista"
        ],
        correctIndex: 0,
        explanation: "TXV säätää kylmäaineen virtausta haihtimeen termostaatin mittaaman jäähdytystarpeen perusteella varmistaen optimaalisen tehokkuuden."
    },
    {
        question: "Mitä tarkoittaa kylmätekniikassa termi 'ylijäähdytys' (subcooling)?",
        answers: [
        "Kylmäaineen jäähdyttäminen alle kyllästyslämpötilan",
        "Kompressorin jäähdyttäminen käytön aikana",
        "Haihduttimen jäätyminen",
        "Kylmäkoneen jäähdytys korkeassa ulkolämpötilassa"
        ],
        correctIndex: 2,
        explanation: "Ylijäähdytys tarkoittaa kylmäaineen jäähdyttämistä alle sen kyllästyslämpötilan, mikä parantaa järjestelmän tehokkuutta."
    },
    {
        question: "Mikä on kylmäkoneen kylmäkertoimen (EER) kaava?",
        answers: [
        "Jäähdytysteho / Sähköteho",
        "Sähköteho / Jäähdytysteho",
        "Kompressorin teho / Haihduttimen teho",
        "Haihduttimen lämpötila / Lauhduttimen lämpötila"
        ],
        correctIndex: 3,
        explanation: "EER (Energy Efficiency Ratio) lasketaan jakamalla jäähdytysteho tarvittavalla sähköteholla - mitä korkeampi, sitä tehokkaampi."
    },
    {
        question: "Miksi injektointia käytetään joissain kylmäjärjestelmissä?",
        answers: [
        "Parantamaan kompressorin jäähdytystä ja vähentämään puristuslämpöä",
        "Lisäämään kylmäaineen määrää järjestelmässä",
        "Puhdistamaan kylmäainepiiriä",
        "Vähentämään järjestelmän melua"
        ],
        correctIndex: 3,
        explanation: "Injektointi (suihkutus) jäähdyttää kompressorin puristuskammiota, vähentäen puristuslämpöä ja pidentäen kompressorin käyttöikää."
    }
];

const hardQuestions = [
    {
        question: "Mikä on nesteen ruiskutuksen (liquid injection) pääasiallinen vaikutus kompressorin puristusprosessiin?",
        answers: [
        "Se alentaa puristuslämpötilaa ja parantaa tilavuushyötysuhdetta",
        "Se lisää kylmäaineen massavirtaa",
        "Se vähentää kompressorin tärinää",
        "Se parantaa öljyn erotusta"
        ],
        correctIndex: 0,
        explanation: "Nesteen ruiskutus haihtuu puristuksen aikana absorboimalla lämpöä, mikä alentaa puristuslämpötilaa ja parantaa kompressorin hyötysuhdetta."
    },
    {
        question: "Miten kriittinen lämpötila vaikuttaa kylmäaineen valintaan?",
        answers: [
        "Se määrittää maksimikäyttö Paineen ja lämpötilan, jossa kylmäaine voi kondensoitua",
        "Se määrittää kylmäaineen syttymislämpötilan",
        "Se vaikuttaa vain kompressorin valintaan",
        "Se ei vaikuta kylmäaineen valintaan"
        ],
        correctIndex: 0,
        explanation: "Kriittinen lämpötila on piste, jonka yläpuolella kylmäainetta ei voi nesteyttää - tämä rajoittaa järjestelmän käyttölämpötiloja."
    },
    {
        question: "Mikä on pääasiallinen ero suoraruiskutus (direct expansion) ja paluukaasujäähdytyksen (gas cooler) välillä?",
        answers: [
        "Suoraruiskutuksessa kylmäaine höyrystyy haihtimessa, kun taas paluukaasujäähdytyksessä kaasua jäähdytetään nestemäisessä muodossa",
        "Ne ovat sama asia eri nimillä",
        "Suoraruiskutus on tehottomampi menetelmä",
        "Paluukaasujäähdytys vaatii aina kaksivaiheisen paisuntaventtiilin"
        ],
        correctIndex: 2,
        explanation: "Suoraruiskutuksessa (DX) kylmäaine höyrystyy haihtimessa. Gas cooler -järjestelmissä ylikuumentunut kaasu jäähdytetään nestemäisessä tilassa ennen paisuntaa."
    },
    {
        question: "Miten haihtimen alijäähdytys (superheat) optimoidaan parhaiten termostaattisella paisuntaventtiilillä?",
        answers: [
        "Säätämällä TXV:n esijännitystä ja anturin sijaintia",
        "Vähentämällä kylmäaineen määrää",
        "Lisäämällä kompressorin kierrosta",
        "Pidentämällä haihtimen putkia"
        ],
        correctIndex: 0,
        explanation: "Optimaalinen alijäähdytys saavutetaan säätämällä TXV:n esijännitystä (MOP) ja varmistamalla anturin oikea sijoitus sekä lämpöyhteys."
    },
    {
        question: "Testimielessä turhanpäiväinen kysymys?",
        answers: [
        "Tämä oli tärkeää",
        "Ei oikeaa vastausta",
        "Höpsislöpsis",
        "Tämän pitäisi olla oikea valinta"
        ],
        correctIndex: 3,
        explanation: "Optimaalinen alijäähdytys saavutetaan säätämällä TXV:n esijännitystä (MOP) ja varmistamalla anturin oikea sijoitus sekä lämpöyhteys."
    },
    {
        question: "Mikä on inversion lämpötilan merkitys CO2-kylmäjärjestelmissä?",
        answers: [
        "Se määrittää lämpötilan, jossa CO2:n höyrystymislämpö ylittää lauhtumislämmön",
        "Se on lämpötila, jossa CO2 muuttuu kiinteäksi",
        "Se on optimaalinen käyttölämpötila järjestelmälle",
        "Se vaikuttaa vain kompressorin öljyn valintaan"
        ],
        correctIndex: 1,
        explanation: "Inversion lämpötila (~31°C CO2:lle) on kriittinen piste - sen yläpuolella lämmönsiirto kääntyy, mikä vaatii erityisjärjestelyjä korkeissa ulkolämpötiloissa."
    }
];

// Export questions for use in app.js
window.questionBanks = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
};

console.log('questions.js ladattu. Kysymyksiä: easy=' + easyQuestions.length + ', medium=' + mediumQuestions.length + ', hard=' + hardQuestions.length);
