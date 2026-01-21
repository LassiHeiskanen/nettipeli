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
        correctIndex: 0,
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
        correctIndex: 0,
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
        correctIndex: 0,
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
        correctIndex: 0,
        explanation: "Kylmäkoneen peruskomponentit ovat kompressori, lauhdutin, paisuntaventtiili ja haihtimen - nämä muodostavat kylmäainekierron."
    }
    {
    question: "Mikä kylmäkoneen osa vastaa kylmäaineen höyrystymisestä ja lämmön sitomisesta?",
    answers: [
        "Lauhdutin",
        "Haihdutin",
        "Kompressori",
        "Paisuntaventtiili"
    ],
    correctIndex: 1,
    explanation: "Haihduttimessa kylmäaine höyrystyy ja sitoo lämpöä ympäristöstään."
},
{
    question: "Mikä komponentti alentaa kylmäaineen painetta ennen haihdutinta?",
    answers: [
        "Kompressori",
        "Lauhdutin",
        "Paisuntaventtiili",
        "Kuivain"
    ],
    correctIndex: 2,
    explanation: "Paisuntaventtiili alentaa kylmäaineen painetta ja säätelee virtausta haihduttimeen."
},
{
    question: "Missä kylmäkoneen osassa kylmäaine luovuttaa lämpöä ympäristöön?",
    answers: [
        "Haihdutin",
        "Kompressori",
        "Kuivain",
        "Lauhdutin"
    ],
    correctIndex: 3,
    explanation: "Lauhduttimessa kylmäaine luovuttaa lämpöä ja tiivistyy kaasusta nesteeksi."
},
{
    question: "Mikä seuraavista EI kuulu kylmäkoneen peruskiertoon?",
    answers: [
        "Kompressori",
        "Haihdutin",
        "Lauhdutin",
        "Puhallinmoottori"
    ],
    correctIndex: 3,
    explanation: "Puhallinmoottori tukee toimintaa, mutta ei ole osa kylmäaineen peruskiertoa."
},
{
    question: "Mikä on kylmäaineen olomuoto haihduttimesta poistuttaessa?",
    answers: [
        "Kaasu",
        "Neste",
        "Sekoitus",
        "Kiinteä"
    ],
    correctIndex: 0,
    explanation: "Haihduttimesta poistuva kylmäaine on kaasumaisessa olomuodossa."
},
{
    question: "Mikä suure kuvaa kylmäaineen paine- ja lämpötilasuhdetta?",
    answers: [
        "Virta",
        "Entalpia",
        "Jännite",
        "Teho"
    ],
    correctIndex: 1,
    explanation: "Entalpia kuvaa kylmäaineen energiasisältöä eri olosuhteissa."
},
{
    question: "Mikä kylmäkoneen osa suojaa järjestelmää kosteudelta ja epäpuhtauksilta?",
    answers: [
        "Kuivain",
        "Haihdutin",
        "Kompressori",
        "Lauhdutin"
    ],
    correctIndex: 0,
    explanation: "Kuivain poistaa kosteutta ja epäpuhtauksia kylmäaineesta."
},
{
    question: "Mitä tapahtuu kylmäaineen lämpötilalle paineen noustessa kompressorissa?",
    answers: [
        "Se laskee",
        "Se pysyy samana",
        "Se nousee",
        "Se jäätyy"
    ],
    correctIndex: 2,
    explanation: "Kompressiossa paineen nousu aiheuttaa myös kylmäaineen lämpötilan nousun."
},
{
    question: "Mikä on kylmäkoneen tehtävä yksinkertaistettuna?",
    answers: [
        "Tuottaa kylmää",
        "Siirtää lämpöä",
        "Poistaa kosteutta",
        "Tuottaa sähköä"
    ],
    correctIndex: 1,
    explanation: "Kylmäkone ei tuota kylmää, vaan siirtää lämpöä paikasta toiseen."
},
{
    question: "Mikä tekijä vaikuttaa eniten kylmäkoneen hyötysuhteeseen?",
    answers: [
        "Putkien väri",
        "Kylmäaineen määrä",
        "Lämpötilaero",
        "Sähkön hinta"
    ],
    correctIndex: 2,
    explanation: "Mitä pienempi lämpötilaero, sitä parempi hyötysuhde."
},
{
    question: "Mikä mittari kertoo kylmäaineen paineen?",
    answers: [
        "Lämpömittari",
        "Painemittari",
        "Virtausmittari",
        "Tehomittari"
    ],
    correctIndex: 1,
    explanation: "Painemittarilla mitataan kylmäaineen painetta järjestelmässä."
},
{
    question: "Mitä tarkoittaa ylikuumeneminen kylmätekniikassa?",
    answers: [
        "Kompressorin ylikuormaa",
        "Haihduttimen jäätymistä",
        "Kylmäaineen lämpötilaa yli kiehumispisteen",
        "Lauhduttimen tukkeutumista"
    ],
    correctIndex: 2,
    explanation: "Ylikuumeneminen tarkoittaa, että kylmäaineen lämpötila on yli sen kiehumispisteen."
},
{
    question: "Mikä kylmäaineen ominaisuus on ympäristön kannalta keskeinen?",
    answers: [
        "Väri",
        "Haju",
        "GWP-arvo",
        "Tiheys"
    ],
    correctIndex: 2,
    explanation: "GWP-arvo kertoo kylmäaineen ilmastonlämpenemispotentiaalin."
},
{
    question: "Mikä laite pysäyttää kylmäkoneen liian korkeassa paineessa?",
    answers: [
        "Termostaatti",
        "Sulake",
        "Korkeapainekytkin",
        "Ajastin"
    ],
    correctIndex: 2,
    explanation: "Korkeapainekytkin suojaa järjestelmää vaarallisen korkealta paineelta."
},
{
    question: "Mikä seuraavista on tyypillinen kylmäkoneen käyttö­kohde?",
    answers: [
        "Hitsauslaite",
        "Jääkaappi",
        "Sähkömoottori",
        "Valaisin"
    ],
    correctIndex: 1,
    explanation: "Jääkaappi on yksi yleisimmistä kylmäkoneen sovelluksista."
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
        correctIndex: 0,
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
        correctIndex: 0,
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
        correctIndex: 0,
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
        correctIndex: 0,
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
        correctIndex: 0,
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
        question: "Mikä on inversion lämpötilan merkitys CO2-kylmäjärjestelmissä?",
        answers: [
        "Se määrittää lämpötilan, jossa CO2:n höyrystymislämpö ylittää lauhtumislämmön",
        "Se on lämpötila, jossa CO2 muuttuu kiinteäksi",
        "Se on optimaalinen käyttölämpötila järjestelmälle",
        "Se vaikuttaa vain kompressorin öljyn valintaan"
        ],
        correctIndex: 0,
        explanation: "Inversion lämpötila (~31°C CO2:lle) on kriittinen piste - sen yläpuolella lämmönsiirto kääntyy, mikä vaatii erityisjärjestelyjä korkeissa ulkolämpötiloissa."
    },
      {
        question: "testikysymys, tuleeko tämä lainkaan?",
        answers: [
        "Ei näy",
        "No näkyypäs, kunhan huijasin",
        "Puijaaminen on metkaa",
        "joopajoo"
        ],
        correctIndex: 3,
        explanation: "Inversion lämpötila (~31°C CO2:lle) on kriittinen piste - sen yläpuolella lämmönsiirto kääntyy, mikä vaatii erityisjärjestelyjä korkeissa ulkolämpötiloissa."
    }
];

// Export questions for use in app.js
window.questionBanks = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
};
