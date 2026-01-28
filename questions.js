/**
 * Kylmätekniikkapeli - Kysymyspankki (CSV:stä generoitu)
 *
 * Tämä tiedosto on generoitu CSV-aineistosta.
 * Sarja 1 -> easy, Sarja 2 -> medium, Sarja 3 -> hard
 */

const easyQuestions = [
    {
        question: "Mikä kylmäprosessin pääkomponenteista imee kylmäainehöyryä?",
        answers: ["Paisuntalaite", "Höyrystin", "Kompressori", "Lauhdutin"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista puristaa kylmäaineen korkeaan paineeseen?",
        answers: ["Höyrystin", "Kompressori", "Lauhdutin", "Paisuntalaite"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista luovuttaa energiaa pois kylmäaineesta?",
        answers: ["Kompressori", "Lauhdutin", "Paisuntalaite", "Höyrystin"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista nesteyttää kylmäaineen?",
        answers: ["Lauhdutin", "Paisuntalaite", "Höyrystin", "Kompressori"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista aiheuttaa merkittävän painehäviön?",
        answers: ["Paisuntalaite", "Höyrystin", "Kompressori", "Lauhdutin"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista syöttää kylmäainetta höyrystimelle?",
        answers: ["Höyrystin", "Kompressori", "Lauhdutin", "Paisuntalaite"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista saa kylmäaineen kokonaan höyrystymään?",
        answers: ["Kompressori", "Lauhdutin", "Paisuntalaite", "Höyrystin"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista sitoo energiaa ympäristöstä?",
        answers: ["Lauhdutin", "Paisuntalaite", "Höyrystin", "Kompressori"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä kylmäprosessin pääkomponenteista olisi helpointa heittää pisimmälle?",
        answers: ["Paisuntalaite", "Höyrystin", "Kompressori", "Lauhdutin"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on höyrystimen alussa?",
        answers: ["Kiinteänä", "Nesteen ja höyryn seosta", "Höyry", "Neste"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on höyrystimen jälkeen?",
        answers: ["Nesteen ja höyryn seosta", "Höyry", "Neste", "Kiinteänä"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on tullessaan lauhduttimelle?",
        answers: ["Höyry", "Neste", "Kiinteänä", "Nesteen ja höyryn seosta"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on keskellä lauhdutinta?",
        answers: ["Neste", "Kiinteänä", "Nesteen ja höyryn seosta", "Höyry"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on tullessaan paisuntalaitteelle?",
        answers: ["Kiinteänä", "Nesteen ja höyryn seosta", "Höyry", "Neste"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on poistuessaan paisuntalaitteesta?",
        answers: ["Nesteen ja höyryn seosta", "Höyry", "Neste", "Kiinteänä"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on tullessaan kompressorille?",
        answers: ["Höyry", "Neste", "Kiinteänä", "Nesteen ja höyryn seosta"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on kompressorin jälkeen?",
        answers: ["Neste", "Kiinteänä", "Nesteen ja höyryn seosta", "Höyry"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on varaajassa?",
        answers: ["Kiinteänä", "Nesteen ja höyryn seosta", "Höyry", "Neste"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Missä olomuodossa kylmaine on varaajan jälkeen?",
        answers: ["Nesteen ja höyryn seosta", "Höyry", "Neste", "Kiinteänä"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Missä olomuodossa vesi yleensä lisätään kesäisiin terassijuomiin?",
        answers: ["Nesteen ja höyryn seosta", "Höyry", "Neste", "Kiinteänä"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R290?",
        answers: ["HC", "HFC", "HFO", "CFC"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R32?",
        answers: ["HFC", "HFO", "CFC", "HC"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R134a?",
        answers: ["HFO", "CFC", "HC", "HFC"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R1234yf?",
        answers: ["CFC", "HC", "HFC", "HFO"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R407C?",
        answers: ["HC", "HFC", "HFO", "CFC"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R11?",
        answers: ["HFC", "HFO", "CFC", "HC"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R600a?",
        answers: ["HFO", "CFC", "HC", "HFC"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mihin kylmäaineryhmään kuuluu R410A?",
        answers: ["CFC", "HC", "HFC", "HFO"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mitä lyhennettä käytetään yleisimmin hardcore-musiikkiin viitattaessa?",
        answers: ["CFC", "HC", "HFC", "HFO"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä seuraavista soveltuu kylmäjärjestelmän painetestiin?",
        answers: ["Ilma", "Typpi", "F-kaasu", "Propaani"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitä ainetta HFC-kylmäaine ei sisällä?",
        answers: ["Happi", "Vety", "Fluori", "Hiili"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Missä osassa kylmälaitosta tapahtuu alijäähtymistä?",
        answers: ["Imulinjassa", "Nestelinjassa", "Painelinjassa", "Höyrystimessä"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Missä seuraavista kylmäalitoksen osissa ei tapahdu tulistumista?",
        answers: ["Höyrystin", "Imuputki", "Lauhdutin", "Kompressori"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä turvallisuusryhmän kirjain  ilmaisee, että kylmäaine on myrkyllistä?",
        answers: ["A", "B", "C", "D"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä turvallisuusryhmän numero ilmaisee, että kylmäaine on helposti syttyvää?",
        answers: ["1", "2", "3", "4"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä on normaalissa ilmanpaineessa etanolin höyrystymislämpötila?",
        answers: ["noin. -42 °C", "noin. -33 °C", "noin. 78 °C", "noin. 100 °C"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä on normaalissa ilmanpaineessa veden höyrystymislämpötila?",
        answers: ["noin. -42 °C", "noin. -33 °C", "noin. 78 °C", "noin. 100 °C"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mikä on normaalissa ilmanpaineessa ammoniakin höyrystymislämpötila?",
        answers: ["noin. -42 °C", "noin. -33 °C", "noin. 78 °C", "noin. 100 °C"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä on normaalissa ilmanpaineessa propaaniin höyrystymislämpötila?",
        answers: ["noin. -42 °C", "noin. -33 °C", "noin. 78 °C", "noin. 100 °C"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Kuinka \"lämmintä\" oli Suomen pakkasennätyksessä Kittilässä vuonna 1999?",
        answers: ["-59,1 °C", "-51,5 °C", "-48,7 °C", "-40,9 °C"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Kuinka lämmintä oli Suomen lämpöennätyksessä Joensuussa vuonna 2010?",
        answers: ["33,3 °C", "37,2 °C", "39,2 °C", "41,3 °C"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Kuinka suuri oli virallinen lumensyvyys suurimmillaan Enontekiössä vuonna 1997?",
        answers: ["88cm", "102cm", "153 cm", "190 cm"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Kuinka matalalla ilmanpaine kävi Raumalla vuonna 1990?",
        answers: ["788 hpa", "940 hpa", "998 hpa", "1066 hpa"],
        correctIndex: 1,
        explanation: ""
    }
];
const mediumQuestions = [
    {
        question: "Mikä on GWP-luku R290 kylmäaineella",
        answers: ["3", "1", "0,2", "0,02"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mikä on GWP-luku R600a kylmäaineella",
        answers: ["2", "3", "0,006", "0,02"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Kuinka kylmää R290 on, kun se vapautuu suoraan ilmakehään",
        answers: ["-42°C", "-36°C", "-54°C", "-28°C"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Kuinka kylmää R600a on, kun se vapautuu suoraan ilmakehään",
        answers: ["-8°C", "-27°C", "-12°C", "-5°C"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä on LFL termi",
        answers: ["Ei palava seos", "Alempi syttymisraja", "Turvallinen seosalue", "Ylempi syttumisraja"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä on UFL termi",
        answers: ["Ei palava seos", "Alempi syttymisraja", "Ylempi syttymisraja", "Turvallinen seosalue"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä on CO2:n kriittisen pisteen lämpötila suurinpiirtein?",
        answers: ["43°C", "71°C", "31°C", "48°C"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä on CO2:n kriittisen pisteen paine suurinpiirtein?",
        answers: ["73 bar", "61 bar", "93  bar", "55 bar"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä on CO2:n trippelipiste?",
        answers: ["Kolmen paineen sekoitus", "Kolmen eri aineen yhdiste", "Kolme olomuotoa yhtäaikaa", "CO2 on jäätynyt"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mikä on CO2 GWP-luku?",
        answers: ["0", "1", "2", "3"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Paljonko on keskimäärin Transkriittisen CO2 laitoksen varaajapaine",
        answers: ["20 bar", "30 bar", "40 bar", "50 bar"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Varoventtiiliin tarkastusväli ei rekisteröidyssä laitoksessa?",
        answers: ["3v", "4v", "5v", "6v"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Varoventtiilin tarkastusväli rekisteröidyssä laitoksessa",
        answers: ["3v", "4v", "5v", "6v"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Kuinka monta kertaa pitää suorittaa typpihuuhtelu EN-378 standardin mukaan?",
        answers: ["4", "1", "2", "3"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mille tasolle propaani laite pitää tyhjiöidä typetysten välillä?",
        answers: ["3 mbar", "0,3 bar(a)", "0 bar", "(-)0,5 bar"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mikä on LP-kaasujen räjähdysikkuna eli matalan ja korkean raja-arvo prosentit?",
        answers: ["1-5%", "2-6%", "0-10%", "2-10%"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mitä öljyä propaanilla toimiva kylmälaite käyttää?",
        answers: ["PAG", "POE", "Mineraaliöljy", "Emroe 32"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Toimiiko propaani ilmalämpöpumpussa?",
        answers: ["Ei hyvin", "Aivan hyvin", "Vain kun lämpötila ei ole alle 0", "Kiellettyä käyttää"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Voiko propaania käyttää pakkasvarastossa?",
        answers: ["Liian korkea höyrystymislämpö", "Vain pakaste kaapissa", "Aivan hyvin", "Paisari jäätyy"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Miten toimit jos propaani laitoksessa syttyy tulipalo?",
        answers: ["Sammutan vedellä", "Sammutan CO2:lla", "Annan palaa hallitusti loppuun", "Stoppaan kompressorin"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitä tarkoitaa ATEX?",
        answers: ["Ammattitutkinto expertti", "Räjähdysvaarallinen tila", "Automaattinen Exit", "Propaanivarasto"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitkä seuraavista tekijöistä muodostaa niin sanotun palokolmion?",
        answers: ["Palava aine - Ilma - propaani", "Propaani - Butaani - Ilma", "Palava aine - Happi- Lämpö", "Lämpö - palava aine - paine"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "EN-378 standardin mukainen paine 30 kPa(abs) vastaa painearvoa",
        answers: ["3 mbar", "20 in Hg vac", "0,3 bar", "3,0 bar"],
        correctIndex: 1,
        explanation: ""
    }
];
const hardQuestions = [
    {
        question: "Mitä seuraavista ei säädetä F-kaasuasetuksessa (EU)573/2024?",
        answers: ["Vuototarkastukseia", "Markkinoille saattamista", "Kirjanpitoa", "Asennustodistuksen sisältöä"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Missä tilanteessa ei saa käyttää regeneroitua kylmäainetta?",
        answers: ["Kylmälaitoksen huollossa", "Ilmalämpöpumpuissa", "Uudessa kylmälaitteessa", "Opetuslaitteistoissa"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Kuinka kauan uuden asetuksen mukainen kylmälupa on voimassa?",
        answers: ["3 vuotta", "5 vuotta", "7 vuotta", "Ikuiseti"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mitä kylmäaineita A1 A pätevyydellä saa asentaa ilman täytösrajaa?",
        answers: ["Ammoniakki-laitoksia", "F-kaasulaitoksia", "Hiilidioksidi-laitteistoja", "CFC-laitoksia"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitä aineita F-kaasuasetuksen vuototarkastusrajat koskevat?",
        answers: ["Isobutaania", "Hiilidioksidia", "Propaania", "F-kaasuja"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Kuka saa regeneroida kylmäainetta?",
        answers: ["Valtuutettu toimija", "Kaikki kylmäalan yritykset", "Vain Saksan valtio EU-alueella", "Ei kukaan"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mikä regeneroituja kylmäaineita koskevista väittämistä on totta?",
        answers: ["Kylmäaine on uutta vastaavaa", "Kylmäaineen teho on n. 90 %", "Kylmäaineen laatu on vaihtelevaa", "Regeneroitu ei tarvitse öljyä"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Minä vuonna kielletään uusien f-kaasujen markkinoille saattaminen?",
        answers: ["2029", "2032", "2040", "2050"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mitä seuraavista ei tarvitse kirjata asennustodistukseen?",
        answers: ["Sähköasentajaa", "Vastuuhenkilön lupanroa", "Vuototarkastusväliä", "Koekäyttöpöytäkirjaa"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Milloin vanhat kylmäluvat vanhenevat?",
        answers: ["31/12/2028", "12/03/2029", "01/01/2030", "01/01/2050"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Kuinka monta CO2-ekvivalenttitonnia liitteen I f-kaasuilla edellyttää vuototarkastuksia?",
        answers: ["0.494", "1", "5", "10"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Kuinka monta kiloa liitteen II f-kaasuilla edellyttää vuototarkastuksia?",
        answers: ["0.494", "1", "5", "10"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Kenen vastuulla on kylmälaitteen vuototarkastus?",
        answers: ["Alkuperäisen asennusliikkeen", "Laitteen omistajan/haltijan", "Tukesin", "EU:n"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa CO2-laitosta, jossa täytös 15 kg?",
        answers: ["A1 A", "A 2 A", "B A", "C A"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa R290-laitosta, jossa täytös 15 kg?",
        answers: ["A1 A", "A 2 A", "B A", "C A"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa NH3-laitosta, jossa täytös 15 kg?",
        answers: ["A1 A", "A 2 A", "B A", "C A"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa R1234yf-laitosta, jossa täytös 15 kg?",
        answers: ["A1 A", "A 2 A", "B A", "C A"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa CO2-laitosta, jossa täytös 1,3 kg?",
        answers: ["A1 A", "A 2 A", "B A", "C A"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa R290-laitosta, jossa täytös 15 kg?",
        answers: ["E A", "A 2 A", "B A", "C A"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa NH3-laitosta, jossa täytös 0,05 kg?",
        answers: ["A1 A", "A 2 A", "B A", "C A"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mitä uusien asetusten pätevyyttä tarvitsee, kun asentaa R1234yf-laitosta, jossa täytös 0,8 kg?",
        answers: ["E A", "A 2 A", "B A", "C A"],
        correctIndex: 1,
        explanation: ""
    },
    {
        question: "Mitkä seuraavista ovat ajoneuvojen ilmastointilaitteiden pätevyyksiä?",
        answers: ["E A", "JÄ-JÄ A", "SAK-SAK A", "M1-M4"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mikä seuraavista ei tarvitse ottaa huomioon palavien ja myrkyllisten kylmäaineiden täytösmäärissä?",
        answers: ["Syttyvyys", "Tilan pinta-ala", "GWP-määrä", "Pääsyluokka"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mitä seuraavista ei säädetä F-kaasuasetuksessa (EU)573/2024?",
        answers: ["Vuototarkastuksten tiheys", "Pätevyyksien vaatimukset", "Laitteiden sähköturvallisuus", "F-kaasujen käyttörajoitukset"],
        correctIndex: 2,
        explanation: ""
    },
    {
        question: "Mitä toimijoita F-kaasuasetus (EU)573/2024 koskee?",
        answers: ["Valmistajia", "Maahantuojia", "Asentajia", "Kaikkia edellä mainittuja"],
        correctIndex: 3,
        explanation: ""
    },
    {
        question: "Mitä seuraavista vaaditaan F-kaasuasetuksessa (EU)573/2024?",
        answers: ["Kaasujen talteenottoa", "Palotarkastusta", "Sähkötarkastksia", "Ilmanvaihtomittauksia"],
        correctIndex: 0,
        explanation: ""
    },
    {
        question: "Mitä seuraavista F-kaasuasetuksen (EU)573/2024 kirjanpitovelvoite koskee?",
        answers: ["Käytettyjä varaosia", "F-kaasujen määriä", "Asiakasrekisteriä", "Sähkökytkentöjä"],
        correctIndex: 1,
        explanation: ""
    }
];
// Export questions for use in app.js
window.questionBanks = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
};

console.log(
    'questions.js ladattu. Kysymyksiä: easy=' +
        easyQuestions.length +
        ', medium=' +
        mediumQuestions.length +
        ', hard=' +
        hardQuestions.length
);
