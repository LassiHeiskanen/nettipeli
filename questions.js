/**
 * Kylmätekniikkapeli - Laajempi kysymyspankki
 *
 * Kysymykset on jaettu kolmeen vaikeustasoon:
 * - Lämmittely (Helppo): Peruskäsitteet ja perustiedot
 * - Keskitaso: Hieman syvällisempää teknistä tietoa
 * - Vaativa: Vaikeita, asiantuntijatason kysymyksiä
 */

const easyQuestions = [
    {
        question: "Mikä on kylmäkoneen pääkomponentti, joka puristaa kylmäainekaasun?",
        answers: ["Kompressori", "Haihdutin", "Lauhdutin", "Paisuntaventtiili"],
        correctIndex: 0,
        explanation: "Kompressori nostaa kylmäaineen paineen ja lämpötilan, jotta lämpö voidaan luovuttaa lauhduttimessa."
    },
    {
        question: "Mikä komponentti luovuttaa lämpöä ympäristöön kylmäaineen lauhtuessa?",
        answers: ["Haihdutin", "Suodatin-kuivain", "Lauhdutin", "Paisuntaventtiili"],
        correctIndex: 2,
        explanation: "Lauhdutin (kondensaattori) poistaa lämpöä kylmäaineesta ja muuttaa sen kaasusta nesteeksi."
    },
    {
        question: "Mikä komponentti laskee kylmäaineen painetta ennen haihdutinta?",
        answers: ["Kompressori", "Lauhdutin", "Paisuntalaite", "Puhallin"],
        correctIndex: 2,
        explanation: "Paisuntalaite (esim. kapillaariputki tai TXV/EEV) pudottaa paineen ja mahdollistaa höyrystymisen haihtimessa."
    },
    {
        question: "Missä kylmäaine tyypillisesti höyrystyy ja ottaa lämpöä ympäristöstä?",
        answers: ["Lauhduttimessa", "Haihduttimessa", "Kompressorissa", "Öljynerottimessa"],
        correctIndex: 1,
        explanation: "Haihdutin vastaanottaa lämpöä jäähdytettävästä kohteesta ja kylmäaine höyrystyy."
    },
    {
        question: "Mitä tarkoittaa 'ylikuumeneminen' (superheat) höyrystimen jälkeen?",
        answers: ["Kylmäaine on nestettä alle kyllästyslämpötilan", "Kylmäaine on seos nestettä ja kaasua", "Kylmäaine on kaasua yli kyllästyslämpötilan", "Kylmäaine on kriittisessä tilassa"],
        correctIndex: 2,
        explanation: "Superheat tarkoittaa, että kylmäaine on täysin kaasua ja sen lämpötila on yli kyllästyslämpötilan samalla paineella."
    },
    {
        question: "Mitä tarkoittaa 'ylijäähdytys' (subcooling) lauhduttimen jälkeen?",
        answers: ["Kylmäaine on nestettä alle kyllästyslämpötilan", "Kylmäaine on kaasua yli kyllästyslämpötilan", "Kylmäaine on seos", "Kylmäaine on kiinteää"],
        correctIndex: 0,
        explanation: "Subcooling tarkoittaa, että kylmäaine on nestettä ja sen lämpötila on alle kyllästyslämpötilan samalla paineella."
    },
    {
        question: "Mitä mittaa kylmätekniikassa COP (Coefficient of Performance)?",
        answers: ["Tehokerroin: hyödyllinen lämpö-/jäähdytysteho suhteessa syötettyyn tehoon", "Kylmäaineen ominaislämpö", "Kompressorin kierrosluku", "Putkiston pituus"],
        correctIndex: 0,
        explanation: "COP kuvaa lämpöpumpun/kylmäkoneen hyötysuhdetta: mitä suurempi, sitä energiatehokkaampi."
    },
    {
        question: "Mikä on kylmäpiirin tyypillinen neljän peruskomponentin kokonaisuus?",
        answers: ["Kompressori, lauhdutin, paisuntalaite, haihdutin", "Kompressori, suodatin, paisuntasäiliö, akku", "Haihdutin, puhallin, termostaatti, sulake", "Lauhdutin, öljy, venttiili, anturi"],
        correctIndex: 0,
        explanation: "Peruskierto on kompressori → lauhdutin → paisuntalaite → haihdutin."
    },
    {
        question: "Mikä laite suojaa kompressoria pääsemästä nestettä imupuolelle tietyissä järjestelmissä?",
        answers: ["Nestesäiliö (receiver)", "Imuneste-erotin (suction accumulator)", "Tasasuuntaaja", "Kaasujäähdytin"],
        correctIndex: 1,
        explanation: "Imuneste-erotin vähentää nestelyöntiriskiä varastoimalla/erottamalla nestettä imulinjasta."
    },
    {
        question: "Mitä tapahtuu kylmäaineelle paisunnassa (yksinkertaistettuna)?",
        answers: ["Paine ja lämpötila nousevat", "Paine laskee ja osa kylmäaineesta välittömästi höyrystyy", "Paine nousee ja kylmäaine lauhtuu", "Kylmäaine muuttuu kiinteäksi"],
        correctIndex: 1,
        explanation: "Paisunnassa paine putoaa ja syntyy osittain höyrystynyttä seosta, joka jatkaa höyrystymistä haihtimessa."
    },
    {
        question: "Mikä seuraavista kuvaa parhaiten lauhdutinta?",
        answers: ["Se ottaa lämpöä ympäristöstä", "Se luovuttaa lämpöä ympäristöön", "Se lisää kylmäaineen virtausta", "Se mittaa lämpötilaa"],
        correctIndex: 1,
        explanation: "Lauhdutin luovuttaa lämpöä ulkoilmaan tai jäähdytysveteen."
    },
    {
        question: "Mikä suure kuvaa painetta SI-yksiköissä?",
        answers: ["Watti (W)", "Pascal (Pa)", "Joule (J)", "Ohmi (Ω)"],
        correctIndex: 1,
        explanation: "Paineen SI-yksikkö on pascal (Pa), käytännössä usein kPa tai bar."
    },
    {
        question: "Mihin suuntaan lämpö virtaa luonnostaan?",
        answers: ["Kylmemmästä lämpimämpään", "Lämpimämmästä kylmempään", "Aina ylös", "Se ei virtaa, vaan siirtyy vain säteilynä"],
        correctIndex: 1,
        explanation: "Lämpö siirtyy spontaanisti korkeammasta lämpötilasta matalampaan."
    },
    {
        question: "Mikä seuraavista on tyypillinen merkki liian pienestä kylmäainemäärästä järjestelmässä?",
        answers: ["Korkea imupaine ja korkea ylijäähdytys", "Matala imupaine ja usein pieni ylijäähdytys", "Matala lauhdutuspaine ja suuri ylijäähdytys", "Kompressori ei koskaan käynnisty"],
        correctIndex: 1,
        explanation: "Kylmäainevajaus laskee usein imupainetta ja voi pienentää ylijäähdytystä (subcooling)."
    },
    {
        question: "Mikä on kapillaariputki?",
        answers: ["Moottorin jäähdytysputki", "Yksinkertainen kuristuslaite kylmäaineen paisuntaan", "Öljyputki kompressorille", "Anturiputki lämpötilan mittaamiseen"],
        correctIndex: 1,
        explanation: "Kapillaariputki toimii kuristuksena, joka pudottaa paineen ennen haihdutinta."
    },
    {
        question: "Mikä on tyypillinen sulatustapa ilmastointilaitteen ulkoyksikössä talvella?",
        answers: ["Käännetty kierto (reverse cycle defrost)", "Lisätään kylmäainetta", "Suljetaan lauhdutin", "Ajetaan kompressori pysyvästi pois päältä"],
        correctIndex: 0,
        explanation: "Monissa lämpöpumpuissa sulatus tehdään kääntämällä kierto hetkeksi, jolloin ulkokenno lämpenee."
    },
    {
        question: "Mitä tarkoitusta suodatin-kuivain palvelee kylmäpiirissä?",
        answers: ["Lisää kylmätehoa", "Poistaa kosteutta ja epäpuhtauksia", "Nostaa imupainetta", "Alentaa kompressorin kierroksia"],
        correctIndex: 1,
        explanation: "Suodatin-kuivain sitoo kosteutta ja kerää partikkeleita, mikä suojaa komponentteja."
    },
    {
        question: "Mikä on tyypillinen jäähdytyksen 'kuuma puoli'?",
        answers: ["Lauhdutin ja kompressorin purkauspuoli", "Haihdutin ja imupuoli", "Paisuntalaite", "Anturit ja ohjainkortti"],
        correctIndex: 0,
        explanation: "Kuuma puoli on korkean paineen/ lämpötilan alue: kompressorin purkaus ja lauhdutin."
    },
    {
        question: "Mikä on tyypillinen jäähdytyksen 'kylmä puoli'?",
        answers: ["Kompressorin purkaus", "Lauhdutin", "Haihdutin ja imupuoli", "Öljynerotin"],
        correctIndex: 2,
        explanation: "Kylmä puoli on matalapaineinen alue: haihdutin ja imulinja."
    }
];

const mediumQuestions = [
    {
        question: "Miksi kylmäaineen paine nostetaan kompressorilla ennen lauhdutinta?",
        answers: ["Jotta kylmäaine ei jäätyisi", "Jotta se voisi lauhtua korkeammassa lämpötilassa ja luovuttaa lämpöä ympäristöön", "Jotta paisuntalaite ei tukkeutuisi", "Jotta COP pienenee"],
        correctIndex: 1,
        explanation: "Korkeampi paine nostaa kyllästyslämpötilaa, jolloin lauhdutin voi luovuttaa lämpöä ympäristöön."
    },
    {
        question: "Mikä on termostaattisen paisuntaventtiilin (TXV) päätehtävä?",
        answers: ["Säätää kylmäaineen virtausta haihtimeen superheat-tavoitteen mukaan", "Pysäyttää kompressorin ylikuormassa", "Poistaa kosteutta kylmäaineesta", "Nostaa kylmäaineen painetta"],
        correctIndex: 0,
        explanation: "TXV pitää ylikuumenemisen tavoitearvossa säätämällä syöttöä haihtimeen."
    },
    {
        question: "Mikä väite ylikuumenemisesta (superheat) on oikein?",
        answers: ["Superheat mitataan lauhduttimen jälkeen", "Superheat kertoo onko höyrystimen lopussa nestettä jäljellä", "Superheat tarkoittaa nestettä alle kyllästyslämpötilan", "Superheat on sama kuin ylijäähdytys"],
        correctIndex: 1,
        explanation: "Superheat auttaa varmistamaan, ettei nestettä mene kompressoriin."
    },
    {
        question: "Mikä väite ylijäähdytyksestä (subcooling) on oikein?",
        answers: ["Subcooling mitataan tyypillisesti lauhduttimen jälkeen nestelinjassa", "Subcooling mitataan imulinjassa", "Subcooling kertoo kompressorin kierrosluvun", "Subcooling on vain CO2-järjestelmissä"],
        correctIndex: 0,
        explanation: "Subcooling kertoo kuinka paljon nestettä on jäähdytetty alle kyllästyslämpötilan ja liittyy nestesyötön varmuuteen."
    },
    {
        question: "Mikä on EER (Energy Efficiency Ratio) perusmääritelmä?",
        answers: ["Sähköteho / jäähdytysteho", "Jäähdytysteho / sähköteho", "Lauhduttimen teho / haihduttimen teho", "Paine-ero / lämpötila-ero"],
        correctIndex: 1,
        explanation: "EER on jäähdytystehon ja sähkötehon suhde (yksikkö riippuu käytännöstä)."
    },
    {
        question: "Mikä on tyypillinen syy liian korkeaan lauhdutuspaineeseen ilmajäähdytteisessä lauhduttimessa?",
        answers: ["Likainen/ tukkeutunut kenno tai heikko ilmavirta", "Liian suuri superheat", "Liian pieni paisuntalaite", "Liian kylmä ulkoilma"],
        correctIndex: 0,
        explanation: "Heikko lämmönluovutus nostaa lauhdutuslämpötilaa ja -painetta."
    },
    {
        question: "Mikä on tyypillinen seuraus liian pienestä superheatista höyrystimen lopussa?",
        answers: ["Parempi COP aina", "Nestelyöntiriski kompressorille", "Korkeampi subcooling", "Lauhutuspaine laskee nollaan"],
        correctIndex: 1,
        explanation: "Liian pieni superheat voi tarkoittaa, että nestettä kulkeutuu imulinjaan."
    },
    {
        question: "Mitä tarkoittaa 'näkölasissa' (sight glass) näkyvät kuplat nestelinjassa monissa järjestelmissä?",
        answers: ["Aina normaalia", "Usein merkki kaasukuplista: mahdollinen kylmäainevajaus tai flash-kaasu", "Merkki liiallisesta öljystä", "Merkki liian suuresta superheatista"],
        correctIndex: 1,
        explanation: "Kuplat voivat viitata siihen, että nestelinjaan tulee kaasua (esim. subcooling liian pieni)."
    },
    {
        question: "Mikä on sähköisen paisuntaventtiilin (EEV) etu verrattuna perinteiseen TXV:hen?",
        answers: ["Se ei tarvitse ohjausta", "Tarkempi ohjaus ja laajempi säätöalue kuormituksen vaihteluissa", "Se toimii vain ammoniakilla", "Se poistaa tarpeen kompressorilta"],
        correctIndex: 1,
        explanation: "EEV mahdollistaa tarkan superheat-ohjauksen ja parantaa osakuormatehokkuutta."
    },
    {
        question: "Mikä on öljynerottimen tarkoitus joissain järjestelmissä?",
        answers: ["Poistaa kosteuden kylmäaineesta", "Kerätä öljyä purkauskaasusta ja palauttaa se kompressorille", "Lisätä kylmäaineen massavirtaa", "Jäähdyttää lauhdutinta"],
        correctIndex: 1,
        explanation: "Öljynerotin vähentää öljyn kiertoa järjestelmässä ja parantaa lämmönsiirtoa lämmönvaihtimissa."
    },
    {
        question: "Mikä on tyypillinen merkki liian suuresta kylmäainemäärästä (ylitäyttö) monissa laitteissa?",
        answers: ["Poikkeuksellisen suuri subcooling ja kohonnut lauhdutuspaine", "Matala lauhdutuspaine ja kupliva näkölas", "Matala imupaine ja nolla superheat", "Kompressori ei käynnisty koskaan"],
        correctIndex: 0,
        explanation: "Ylitäyttö voi nostaa nestepatsasta ja lisätä subcoolingia sekä lauhdutuspaineita."
    },
    {
        question: "Miksi tyhjiöinti tehdään ennen kylmäaineen täyttöä huollon jälkeen?",
        answers: ["Jotta kompressorin öljy vaihtuu", "Jotta poistetaan ilma ja kosteus, jotka heikentävät toimintaa ja voivat aiheuttaa happoja/jäätä", "Jotta lauhdutin puhdistuu", "Jotta paisuntaventtiili kalibroituu"],
        correctIndex: 1,
        explanation: "Ilma ja kosteus aiheuttavat paineongelmia, korroosiota ja jäätymistä paisunnassa."
    },
    {
        question: "Mikä mittaus on oleellinen, kun arvioidaan höyrystimen kuormitusta ilmanjäähdytyksessä?",
        answers: ["Ilmavirta ja ilman lämpötila-/entalpiamuutos kennon yli", "Vain kompressorin virta", "Vain lauhduttimen pinta-ala", "Putkiston väri"],
        correctIndex: 0,
        explanation: "Kuorma liittyy ilman virtaamaan ja siihen, kuinka paljon lämpöä (ja kosteutta) poistetaan."
    },
    {
        question: "Mitä tarkoittaa 'latentti lämpö' ilmankuivauksessa (kosteudenpoisto)?",
        answers: ["Lämpö, joka näkyy lämpömittarissa suoraan", "Lämpö, joka liittyy olomuodon muutokseen (kondensoituminen/höyrystyminen)", "Sähköteho", "Kitkalämpö putkistossa"],
        correctIndex: 1,
        explanation: "Kun vesihöyry tiivistyy kennolle, poistetaan latenttia lämpöä."
    },
    {
        question: "Mikä on tyypillinen syy jäähdytyspuolen kapasiteetin heikkenemiseen, jos haihdutin jäätyy?",
        answers: ["Jää toimii eristeenä ja vähentää ilmavirtaa sekä lämmönsiirtoa", "Jää lisää COP:ia", "Jää kasvattaa subcoolingia", "Jää nostaa kylmäaineen kriittistä lämpötilaa"],
        correctIndex: 0,
        explanation: "Jää heikentää lämmönsiirtoa ja pienentää ilmavirtaa, jolloin teho laskee."
    },
    {
        question: "Mikä seuraavista on tyypillinen syy matalaan imupaineeseen normaalilla ulkolämpötilalla?",
        answers: ["Alhainen kuorma/ilmavirta haihtimella tai kylmäainevajaus", "Likainen lauhdutin", "Liian suuri paisuntalaite", "Öljynerotin puuttuu"],
        correctIndex: 0,
        explanation: "Matalapainepuoli laskee, jos haihduttimelle ei tule lämpökuormaa tai kylmäainetta on liian vähän."
    },
    {
        question: "Mikä on 'receiver' (nestesäiliö) yleisimmin?",
        answers: ["Imupuolen kaasusäiliö", "Nestelinjan säiliö lauhduttimen jälkeen", "Kompressorin öljysäiliö", "Lämmön talteenottopumppu"],
        correctIndex: 1,
        explanation: "Nestesäiliö varastoi nestemäistä kylmäainetta ja auttaa varmistamaan tasaisen syötön."
    },
    {
        question: "Mikä on perusidea lämmön talteenotossa kylmäjärjestelmästä?",
        answers: ["Hyödynnetään lauhdutuksen/purkauskaasun hukkalämpö käyttöveden tai tilojen lämmitykseen", "Lisätään paisuntapaineita", "Lasketaan COP tarkoituksella", "Poistetaan kaikki subcooling"],
        correctIndex: 0,
        explanation: "Kylmäkone tuottaa lämpöä lauhduttimessa; se voidaan ohjata hyötykäyttöön."
    },
    {
        question: "Miksi putkiston eristys on tärkeää kylmällä imulinjalla?",
        answers: ["Se nostaa lauhdutuslämpötilaa", "Se estää lämpövuotoa ja kondensaatiota putken pinnalla", "Se lisää näkölasin kuplia", "Se poistaa tarpeen paisuntalaitteelta"],
        correctIndex: 1,
        explanation: "Eristys vähentää lämpökuormaa ja ehkäisee kosteuden tiivistymistä (vesivahinkoriski)."
    }
];

const hardQuestions = [
    {
        question: "Mikä on nesteen ruiskutuksen (liquid injection) pääasiallinen vaikutus kompressorin puristusprosessiin?",
        answers: ["Se alentaa puristuslämpötilaa ja voi suojata kompressoria", "Se nostaa puristuslämpötilaa tarkoituksella", "Se poistaa kaikki paine-erot", "Se korvaa lauhduttimen"],
        correctIndex: 0,
        explanation: "Nestesuihkutus haihtuu ja sitoo lämpöä, mikä pienentää purkauslämpötilaa ja voi parantaa luotettavuutta."
    },
    {
        question: "Miksi CO2 (R744) -järjestelmä toimii usein transkriittisesti lämpimissä olosuhteissa?",
        answers: ["Koska CO2:n kriittinen lämpötila on korkea", "Koska CO2:n kriittinen lämpötila on matala ja lauhdutus ei onnistu sen yläpuolella", "Koska CO2 ei voi koskaan olla kaasua", "Koska CO2 ei johda lämpöä"],
        correctIndex: 1,
        explanation: "CO2:n kriittinen lämpötila on noin 31 °C; sen yläpuolella ei ole varsinaista lauhtumista, vaan käytetään kaasujäähdytintä."
    },
    {
        question: "Mikä on kaasujäähdyttimen (gas cooler) rooli CO2-transkriittisessä kierrossa?",
        answers: ["Se korvaa haihduttimen", "Se jäähdyttää korkeapaineisen CO2:n ilman varsinaista lauhtumista", "Se nostaa imupainetta", "Se erottaa öljyn imukaasusta"],
        correctIndex: 1,
        explanation: "Transkriittisessä tilassa CO2 ei lauhdu normaalisti; gas cooler poistaa lämpöä superkriittisestä fluidista."
    },
    {
        question: "Mitä optimoidaan CO2-transkriittisessä järjestelmässä usein 'korkeapaineohjauksella'?",
        answers: ["Korkeapaineen asetusta (HP setpoint) maksimoidakseen COP/tehokkuuden olosuhteiden mukaan", "Imupaineen asetusta nollaan", "Kylmäaineen väriä", "Putkiston pituutta satunnaisesti"],
        correctIndex: 0,
        explanation: "Oikea korkeapaine vaikuttaa voimakkaasti hyötysuhteeseen transkriittisellä alueella."
    },
    {
        question: "Mikä seuraavista kuvaa parhaiten flash-kaasua nestelinjassa?",
        answers: ["Öljyn sekoittumista kylmäaineeseen", "Kaasun muodostumista nestelinjaan painehäviön tai liian pienen subcoolingin vuoksi", "Kylmäaineen jäätymistä putkeen", "Kompressorin takaiskuventtiilin toimintaa"],
        correctIndex: 1,
        explanation: "Jos nestepaine laskee tai subcooling on pieni, osa nesteestä höyrystyy ennen paisuntalaitetta."
    },
    {
        question: "Miksi lämmönvaihtimen alhainen lähestymislämpötila (approach) on usein tavoiteltavaa?",
        answers: ["Se tarkoittaa pienempää lämpötilaeroa ja tyypillisesti parempaa lämmönsiirtoa/tehokkuutta", "Se tarkoittaa aina huonompaa lämmönsiirtoa", "Se nostaa kompressorin purkauslämpötilaa", "Se poistaa tarpeen kylmäaineelta"],
        correctIndex: 0,
        explanation: "Pienempi approach voi mahdollistaa matalamman lauhdutuslämpötilan tai korkeamman haihdutuslämpötilan → parempi COP."
    },
    {
        question: "Mikä on kompressorin volumetrinen hyötysuhde (ηv) yksinkertaistettuna?",
        answers: ["Todellinen imetty kaasutilavuus suhteessa teoreettiseen tilavuussiirtymään", "Lauhduttimen pinta-ala jaettuna massavirralla", "Sähköteho jaettuna lämpöteholla", "Putkiston eristyksen paksuus"],
        correctIndex: 0,
        explanation: "Volumetrinen hyötysuhde kertoo, kuinka hyvin kompressori täyttyy imukaasulla suhteessa tilavuussiirtymään."
    },
    {
        question: "Mikä seuraavista kasvattaa tyypillisesti kompressorin purkauslämpötilaa eniten?",
        answers: ["Korkea paineensuhde ja korkea imukaasun ylikuumeneminen", "Suuri subcooling", "Likainen näkölas", "Matala ulkolämpötila"],
        correctIndex: 0,
        explanation: "Korkea paineensuhde (korkea lauhdutus / matala haihdutus) ja korkea superheat nostavat purkauslämpötilaa."
    },
    {
        question: "Mikä on economizer-/välipaisuntaratkaisun (esim. flash tank) keskeinen hyöty tietyissä kahden vaiheen tai väliruiskutuksen toteutuksissa?",
        answers: ["Se pienentää kompressorin massavirtaa nollaan", "Se parantaa hyötysuhdetta ja kapasiteettia alentamalla puristuslämpötilaa ja hyödyntämällä välipainetta", "Se estää kaiken lämmönsiirron", "Se korvaa paisuntalaitteen kokonaan"],
        correctIndex: 1,
        explanation: "Economizer voi parantaa COP:ia ja kasvattaa kapasiteettia erityisesti suuremmilla lämpötilaeroilla."
    },
    {
        question: "Mikä on tyypillinen riski, jos järjestelmään jää merkittävästi ilmaa (ei-kondensoituvia kaasuja)?",
        answers: ["Lauhdutuspaine nousee ja lämmönsiirto heikkenee", "Imupaine nousee äärettömäksi", "Subcooling muuttuu aina negatiiviseksi", "Kompressorin kierrosluku puolittuu itsestään"],
        correctIndex: 0,
        explanation: "Ei-kondensoituvat kerääntyvät lauhduttimeen ja nostavat osapaineita → korkeampi paine ja huonompi tehokkuus."
    },
    {
        question: "Miksi oikea öljyn viskositeetti ja yhteensopivuus kylmäaineen kanssa on kriittistä?",
        answers: ["Se vaikuttaa voiteluun, lämmönsiirtoon ja öljyn kiertoon (mukaan lukien paluu kompressorille)", "Se vaikuttaa vain laitteen väriin", "Se poistaa tarpeen suodatin-kuivaimelle", "Se nostaa kriittistä lämpötilaa"],
        correctIndex: 0,
        explanation: "Väärä öljy voi heikentää voitelua ja aiheuttaa öljyn kertymistä lämmönvaihtimiin tai palautusongelmia."
    },
    {
        question: "Mikä on 'MOP' (Maximum Operating Pressure) -toiminnon idea joissain TXV-venttiileissä?",
        answers: ["Rajoittaa imupainetta (ja kompressorin kuormitusta) kylmäkäynnistyksessä/ylikuormassa", "Nostaa lauhdutuspaineen maksimiin", "Poistaa tarpeen superheat-ohjaukselta", "Lisää kylmäainetta automaattisesti"],
        correctIndex: 0,
        explanation: "MOP voi rajoittaa venttiilin aukeamista, jotta imupaine ei nouse liikaa ja kompressori pysyy turvarajoissa."
    },
    {
        question: "Mikä seuraavista on oikea tulkinta, jos mitataan suuri superheat ja pieni/olemattoman pieni subcooling samaan aikaan (monissa perusjärjestelmissä)?",
        answers: ["Viittaa usein kylmäainevajaukseen tai nestelinjan syöttöongelmaan", "Viittaa aina ylitäyttöön", "Viittaa aina anturivaurioon", "Viittaa aina liialliseen lauhduttimen tehoon"],
        correctIndex: 0,
        explanation: "Kylmäainevajauksessa haihdutin voi 'nälkiä' (superheat kasvaa) ja nestelinjaan ei jää riittävää subcoolingia."
    },
    {
        question: "Miksi nestelinjassa oleva magneettiventtiili + pumppaus alas (pump down) -toiminto voi olla hyödyllinen?",
        answers: ["Se varastoi kylmäaineen hallitusti korkeapainepuolelle seisokin ajaksi ja pienentää nestelyöntiriskiä käynnistyksessä", "Se lisää huurretta haihtimelle", "Se estää kompressorin käynnistymisen lopullisesti", "Se kasvattaa imupainetta satunnaisesti"],
        correctIndex: 0,
        explanation: "Pump down voi estää kylmäaineen vaeltamista ja vähentää nestemäisen kylmäaineen kertymistä kompressoriin."
    },
    {
        question: "Mikä on tavanomainen tavoitearvo superheatille monissa DX-ilmahöyrystimissä (suuntaa-antavasti, käytäntö riippuu kohteesta)?",
        answers: ["0–1 K", "3–8 K", "25–40 K", "100 K"],
        correctIndex: 1,
        explanation: "Tyypillinen superheat on usein muutamia kelvinejä; liian pieni lisää nestelyöntiriskiä, liian suuri heikentää kapasiteettia."
    },
    {
        question: "Mikä seuraavista on keskeinen ero DX-höyrystimen ja tulvanesteisen (flooded) höyrystimen välillä?",
        answers: ["DX:ssä höyrystin ei koskaan sisällä nestettä", "Flooded-höyrystimessä höyrystinpinta pidetään suurelta osin nesteen peitossa, DX:ssä syöttöä säädetään superheatilla", "DX vaatii aina CO2:n", "Flooded ei tarvitse kompressoria"],
        correctIndex: 1,
        explanation: "Flooded-höyrystimissä käytetään usein erillistä nesteen tasosäätöä ja varmistetaan laaja märkäpinta; DX ohjataan superheatilla."
    },
    {
        question: "Miksi imulinjan painehäviö on haitallinen?",
        answers: ["Se nostaa haihdutuslämpötilaa ja parantaa COP:ia", "Se laskee kompressorille saapuvaa painetta, kasvattaa paineensuhdetta ja heikentää kapasiteettia/COP:ia", "Se kasvattaa subcoolingia", "Se estää kondensoitumisen lauhduttimessa"],
        correctIndex: 1,
        explanation: "Imulinjan häviö pienentää imupainetta kompressorilla → suurempi paineensuhde ja huonompi hyötysuhde."
    },
    {
        question: "Mitä tarkoittaa 'floodback' ja miksi se on vaarallista?",
        answers: ["Öljyn paluu kompressorille on liian hyvä", "Nestemäisen kylmäaineen kulkeutuminen imuun ja kompressoriin, mikä voi rikkoa kompressorin", "Lauhduttimen lämpötila laskee liikaa", "Kylmäaine muuttuu kiinteäksi lauhduttimessa"],
        correctIndex: 1,
        explanation: "Nestemäinen kylmäaine ei ole puristettavaa; se voi aiheuttaa mekaanisen vaurion (nestelyönti) ja laimentaa öljyä."
    },
    {
        question: "Mikä on tyypillinen diagnostinen hyöty, kun mitataan paineet ja lämpötilat ja lasketaan niistä superheat ja subcooling?",
        answers: ["Saadaan suora tieto sähkömoottorin hyötysuhteesta", "Voidaan päätellä syötön, täytön ja lämmönsiirron toimivuutta järjestelmässä", "Voidaan päätellä putkien materiaali", "Voidaan laskea laitteen väriavaruus"],
        correctIndex: 1,
        explanation: "Superheat/subcooling ovat keskeisiä tunnuslukuja: syöttö (TXV/EEV), täyttö (charge) ja lämmönvaihtimien toiminta."
    },
    {
        question: "Mikä seuraavista on todennäköisin selitys, jos lauhdutuspaine on normaalia korkeampi mutta lauhduttimen ilmavirta on kunnossa ja kenno puhdas?",
        answers: ["Ei-kondensoituvia kaasuja järjestelmässä tai ylitayttö", "Paisuntalaite liian pieni", "Haihdutin liian iso", "Eristys liian paksu imulinjassa"],
        correctIndex: 0,
        explanation: "Ilma (ei-kondensoituvat) tai liiallinen kylmäaine voi nostaa lauhdutuspaineita ilman selkeää ilmavirtaongelmaa."
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
