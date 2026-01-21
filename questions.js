/**
 * Politiikkapeli – Kysymyspankit
 *
 * Kysymykset on jaettu kolmeen vaikeustasoon:
 * - Lämmittely (Helppo): Yleiset käsitteet ja perustiedot
 * - Keskitaso: Poliittiset järjestelmät ja toimijat
 * - Vaativa: Syvällisempi yhteiskunnallinen ja kansainvälinen politiikka
 */

const easyQuestions = [
    {
        question: "Mitä tarkoittaa demokratia?",
        answers: [
            "Kansanvaltaa",
            "Yhden henkilön valtaa",
            "Sotilasvaltaa",
            "Uskonnollista valtaa"
        ],
        correctIndex: 0,
        explanation: "Demokratia tarkoittaa kansanvaltaa, jossa kansalaiset osallistuvat päätöksentekoon suoraan tai edustajien kautta."
    },
    {
        question: "Mikä elin säätää lait Suomessa?",
        answers: [
            "Eduskunta",
            "Hallitus",
            "Presidentti",
            "Korkein oikeus"
        ],
        correctIndex: 0,
        explanation: "Eduskunta käyttää lainsäädäntövaltaa Suomessa."
    },
    {
        question: "Kuinka usein eduskuntavaalit pidetään Suomessa?",
        answers: [
            "Neljässä vuodessa",
            "Kahdessa vuodessa",
            "Kuudessa vuodessa",
            "Joka vuosi"
        ],
        correctIndex: 0,
        explanation: "Eduskuntavaalit järjestetään neljän vuoden välein."
    },
    {
        question: "Mikä seuraavista on poliittinen puolue Suomessa?",
        answers: [
            "Keskusta",
            "Yleisradio",
            "Eduskunta",
            "Valtioneuvosto"
        ],
        correctIndex: 0,
        explanation: "Keskusta on yksi Suomen eduskuntapuolueista."
    },
    {
        question: "Kuka johtaa Suomen hallitusta?",
        answers: [
            "Pääministeri",
            "Presidentti",
            "Puhemies",
            "Valtiovarainministeri"
        ],
        correctIndex: 0,
        explanation: "Pääministeri johtaa hallituksen toimintaa."
    }
];

const mediumQuestions = [
    {
        question: "Mikä on opposition päätehtävä parlamentaarisessa demokratiassa?",
        answers: [
            "Valvoa hallituksen toimintaa",
            "Säätää lakeja yksin",
            "Johtaa ulkopolitiikkaa",
            "Nimittää virkamiehiä"
        ],
        correctIndex: 0,
        explanation: "Opposition tehtävä on valvoa hallitusta ja tarjota vaihtoehtoisia ratkaisuja."
    },
    {
        question: "Mitä tarkoittaa parlamentarismi?",
        answers: [
            "Hallitus on vastuussa eduskunnalle",
            "Presidentti käyttää ylintä valtaa",
            "Tuomioistuimet johtavat valtiota",
            "Armeija valvoo hallintoa"
        ],
        correctIndex: 0,
        explanation: "Parlamentarismissa hallituksen tulee nauttia eduskunnan luottamusta."
    },
    {
        question: "Mikä on EU-parlamentin päätehtävä?",
        answers: [
            "Säätää EU-lainsäädäntöä yhdessä neuvoston kanssa",
            "Valvoa jäsenmaiden budjetteja",
            "Johtaa EU:n ulkopolitiikkaa",
            "Nimittää kansalliset hallitukset"
        ],
        correctIndex: 0,
        explanation: "EU-parlamentti osallistuu EU-lainsäädännön säätämiseen."
    },
    {
        question: "Mitä tarkoittaa termi 'koalitiohallitus'?",
        answers: [
            "Useamman puolueen muodostama hallitus",
            "Yhden puolueen enemmistöhallitus",
            "Virkamieshallitus",
            "Väliaikainen hallitus"
        ],
        correctIndex: 0,
        explanation: "Koalitiohallitus koostuu useammasta puolueesta."
    },
    {
        question: "Mikä seuraavista on perustuslain tehtävä?",
        answers: [
            "Määritellä valtiovallan perusrakenne",
            "Säätää kunnallisia määräyksiä",
            "Ohjata puolueiden toimintaa",
            "Määrittää hallitusohjelma"
        ],
        correctIndex: 0,
        explanation: "Perustuslaki määrittää valtion perusjärjestelmän ja vallankäytön rajat."
    }
];

const hardQuestions = [
    {
        question: "Mikä erottaa enemmistövaalitavan suhteellisesta vaalitavasta?",
        answers: [
            "Enemmistövaalitavassa eniten ääniä saanut voittaa, suhteellisessa paikat jaetaan ääniosuuksien mukaan",
            "Enemmistövaalitapa on käytössä vain Euroopassa",
            "Suhteellinen vaalitapa suosii yksipuoluejärjestelmää",
            "Niillä ei ole merkittävää eroa"
        ],
        correctIndex: 0,
        explanation: "Suhteellinen vaalitapa pyrkii heijastamaan äänijakaumaa paikkajaossa."
    },
    {
        question: "Mitä tarkoittaa vallan kolmijako-oppi?",
        answers: [
            "Lainsäädäntö-, toimeenpano- ja tuomiovallan erottamista",
            "Valtion jakamista kolmeen alueeseen",
            "Kolmen puolueen hallitusmallia",
            "Kolmea vaalikautta"
        ],
        correctIndex: 0,
        explanation: "Vallan kolmijako estää vallan keskittymisen yhdelle taholle."
    },
    {
        question: "Mikä on veto-oikeuden (veto) merkitys politiikassa?",
        answers: [
            "Mahdollisuus estää päätöksen voimaantulo",
            "Oikeus ehdottaa lakia",
            "Velvollisuus hyväksyä päätös",
            "Keino hajottaa parlamentti"
        ],
        correctIndex: 0,
        explanation: "Veto-oikeudella voidaan estää tai palauttaa päätös uudelleen käsiteltäväksi."
    },
    {
        question: "Mikä seuraavista kuvaa parhaiten federalismia?",
        answers: [
            "Valta jakautuu keskushallinnon ja osavaltioiden kesken",
            "Kaikki valta on keskushallinnolla",
            "Valtiota johtaa sotilasjuntta",
            "Paikallishallintoa ei ole"
        ],
        correctIndex: 0,
        explanation: "Federalismissa valta on jaettu usealle hallinnon tasolle."
    },
    {
        question: "Mitä tarkoittaa poliittinen legitimiteetti?",
        answers: [
            "Kansalaisten hyväksyntää vallankäytölle",
            "Hallinnon teknistä osaamista",
            "Lainsäädännön määrää",
            "Puolueiden jäsenmäärää"
        ],
        correctIndex: 0,
        explanation: "Legitimiteetti tarkoittaa vallan koettua oikeutusta kansalaisten silmissä."
    }
];

// Export questions for use in app.js
window.questionBanks = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
};

console.log(
    'questions-politics.js ladattu. Kysymyksiä: easy=' +
    easyQuestions.length +
    ', medium=' +
    mediumQuestions.length +
    ', hard=' +
    hardQuestions.length
);
