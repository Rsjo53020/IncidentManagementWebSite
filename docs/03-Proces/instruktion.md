# Proces til den generiske Incident Management-plan

Denne side indeholder en detaljeret instruktion til, hvordan man kan opbygge og implementere
en generisk incident management-plan, der er i overensstemmelse med både ISO/IEC 27035 og
NIST CSF 2.0.

---

## Mapping til ISO/IEC 27035 og NIST CSF 2.0


| Emner | ISO/IEC 27035 | NIST CSF 2.0 | Formål |
|---|---|---|---|
| Styringsgrundlag | Plan & Prepare | GOVERN (GV) | Etablere governance, policy og styring |
| Forberedelse | Plan & Prepare | IDENTIFY (ID) + PROTECT (PR) | Opbygge kapabilitet og beredskab |
| Detektion & registrering | Detect & Report | DETECT (DE) | Identificere hændelser |
| Triage & vurdering | Assess & Decide | RESPOND (RS) | Prioritere og beslutte respons |
| Analyse & respons | Respond | RESPOND (RS) | Analysere, begrænse og eliminere |
| Recovery | Respond (Recovery) | RECOVER (RC) | Genoprette drift |
| Lukning & læring | Learn Lessons | GOVERN (GV) + IMPROVE | Forbedre kapabilitet |


---

## Arkitektur: Incident Management-kapabilitet

<p class="diagram-intro">
  <strong>Klik på en standard</strong> for at læse om dens rolle i den samlede kapabilitet.
</p>

<figure class="diagram-wrapper">
  <svg viewBox="360 10 420 720" xmlns="http://www.w3.org/2000/svg">

    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#888780"
              stroke-width="1.5" stroke-linecap="round"/>
      </marker>
    </defs>

    <!-- Layer 1 -->
    <rect x="390" y="30" width="360" height="120" rx="8"
          fill="#EEEDFE" stroke="#534AB7" stroke-width="0.5"/>
    <text x="400" y="52" font-family="Arial" font-size="11" fill="#534AB7">
      Styrings- og koordineringslag
    </text>

    <g class="node-box" data-info="iso22320" role="button" tabindex="0">
      <rect x="408" y="70" width="320" height="65" rx="8"
            fill="#CECBF6" stroke="#534AB7"/>
      <text x="568" y="98" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#26215C">
        ISO 22320
      </text>
      <text x="568" y="118" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#26215C">
        Crisis coordination
      </text>
    </g>

    <!-- Layer 2 -->
    <rect x="390" y="170" width="360" height="120" rx="8"
          fill="#E6F1FB" stroke="#185FA5" stroke-width="0.5"/>
    <text x="400" y="192" font-family="Arial" font-size="11" fill="#185FA5">
      Proces- og ledelseslag
    </text>

    <g class="node-box" data-info="iso27035" role="button" tabindex="0">
      <rect x="408" y="210" width="320" height="65" rx="8"
            fill="#B5D4F4" stroke="#185FA5"/>
      <text x="568" y="238" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#042C53">
        ISO 27035
      </text>
      <text x="568" y="258" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#042C53">
        Incident lifecycle
      </text>
    </g>

    <!-- Layer 3 -->
    <rect x="390" y="310" width="360" height="120" rx="8"
          fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
    <text x="400" y="332" font-family="Arial" font-size="11" fill="#0F6E56">
      Det operationelle indsatslag
    </text>

    <g class="node-box" data-info="nist80061" role="button" tabindex="0">
      <rect x="408" y="350" width="320" height="65" rx="8"
            fill="#9FE1CB" stroke="#0F6E56"/>
      <text x="568" y="378" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#04342C">
        NIST SP 800-61
      </text>
      <text x="568" y="398" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#04342C">
        Detection &amp; response
      </text>
    </g>

    <!-- Layer 4 -->
    <rect x="390" y="450" width="360" height="120" rx="8"
          fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
    <text x="400" y="472" font-family="Arial" font-size="11" fill="#854F0B">
      Kontrol- og funktionslag
    </text>

    <g class="node-box" data-info="nist80053" role="button" tabindex="0">
      <rect x="408" y="490" width="320" height="65" rx="8"
            fill="#FAC775" stroke="#854F0B"/>
      <text x="568" y="518" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#412402">
        NIST SP 800-53
      </text>
      <text x="568" y="538" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#412402">
        Security controls
      </text>
    </g>

    <!-- Core -->
    <g class="node-box" data-info="core" role="button" tabindex="0">
      <rect x="414" y="620" width="308" height="80" rx="8"
            fill="#F1EFE8" stroke="#5F5E5A"/>
      <text x="568" y="650" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#2C2C2A">
        Virksomhedens kapacitet
      </text>
      <text x="568" y="670" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#2C2C2A">
        til håndtering af hændelser
      </text>
      <text x="568" y="690" text-anchor="middle" font-family="Arial"
            font-size="11" fill="#2C2C2A">
        Integrated governance, process &amp; response
      </text>
    </g>

    <!-- Arrows -->
    <line x1="568" y1="135" x2="568" y2="210"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="568" y1="275" x2="568" y2="350"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="568" y1="415" x2="568" y2="490"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="568" y1="555" x2="568" y2="620"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>

  </svg>

  <figcaption>Figur 1: Konceptuel model for incident management-kapabilitet.</figcaption>
</figure>

<div id="modal-overlay" role="dialog" aria-modal="true">
  <div id="modal">
    <button id="modal-close" aria-label="Luk">✕</button>
    <div id="modal-layer"></div>
    <div id="modal-title"></div>
    <div id="modal-body"></div>
  </div>
</div>





---

Process & management layer

ISO 27035 er den internationale standard for håndtering af informationssikkerhedshændelser. Mens NIST SP 800-61 er en praktisk, operationel vejledning, har 27035 et bredere anvendelsesområde. Den fastlægger, hvordan en organisation håndterer hændelser som et program snarere end blot en reaktionsprocedure.
Standarden er opdelt i to hoveddele:
Del 1 – Principper definerer den overordnede ramme: hvad en informationssikkerhedshændelse er, hvordan den adskiller sig fra en begivenhed eller en svaghed, og hvordan en moden hændelseshåndteringskapacitet ser ud. Den fastlægger den femfasede model, som resten af standarden bygger på.
Del 2 – Retningslinjer går i detaljer med de operationelle aspekter af hver fase:

Planlægning og forberedelse — politikker, procedurer, teamstruktur (ISIRT: Information Security Incident Response Team), kommunikationskanaler og bevidstgørelsestræning. Dette er bredere end 800-61's forberedelsesfase, fordi det eksplicit inkluderer godkendelse fra ledelsen og integration med forretningskontinuitetsplanlægning.
Detektion og rapportering — hvordan hændelser identificeres og rapporteres, herunder krav til personale på alle niveauer om at vide, hvordan og hvor de skal rapportere mistænkte hændelser. Denne vægt på en organisatorisk rapporteringskultur er noget, som 800-61 ikke behandler så eksplicit.
Vurdering og beslutning — inddeling af, om der er tale om en hændelse, en svaghed eller en fuldgyldig hændelse, samt fastlæggelse af det passende reaktionsniveau. I denne fase klassificeres hændelserne formelt, og ansvaret fordeles.
Reaktioner — koordinering af den tekniske og organisatoriske indsats, herunder eskaleringsprocedurer, kommunikation med interessenter og indsamling af bevismateriale med henblik på eventuelle juridiske eller disciplinære foranstaltninger.
Erfaringer — struktureret evaluering efter hændelsen, analyse af årsagerne og inddragelse af resultaterne i forbedringer af politikker og kontrolforanstaltninger.

Det, der adskiller 27035 fra 800-61, er dens fokus på tre ting, som operationelle vejledninger ofte ikke specificerer tilstrækkeligt:

Rapporteringskæden — sikring af, at hændelser kommer frem fra frontpersonalet op gennem ledelsen med definerede tærskler for eskalering
Tværfunktionel involvering — juridisk afdeling, HR, kommunikation og den øverste ledelse har alle definerede roller, ikke kun det tekniske team
Kontinuerlig forbedring — standarden kræver udtrykkeligt, at erfaringerne indgår i planlægnings- og forberedelsesfasen, hvilket skaber en lukket kredsløb

I arkitekturen ligger 27035 over 800-61, fordi den regulerer hændelsernes livscyklus og organisatoriske dimension, mens 800-61 håndterer den tekniske udførelse inden for denne framework

Operatinal response layer
NIST SP 800-61 er den amerikanske føderale regerings vejledning i håndtering af cybersikkerhedshændelser, udgivet af National Institute of Standards and Technology. Den dækker hele den operationelle livscyklus for håndtering af en cybersikkerhedshændelse og er opbygget omkring fire faser:
Forberedelse — etablering af beredskabet til at reagere på hændelser, inden noget sker. Dette omfatter sammensætning af teamet, definition af roller, udarbejdelse af kommunikationsplaner, anskaffelse af værktøjer og oprettelse af infrastruktur til logning og overvågning, så man har de nødvendige data, når en hændelse indtræffer.
Detektion og analyse — at erkende, at en hændelse finder sted, og forstå, hvad den går ud på. Denne fase dækker, hvordan man prioriterer alarmer, skelner mellem reelle hændelser og falske positiver, kategoriserer og prioriterer hændelser efter alvorlighed og dokumenterer resultaterne. Den adresserer også den udfordring, at mange hændelser er tvetydige i den tidlige fase — vejledningen giver heuristikker til at træffe beslutninger under usikkerhed.
Inddæmning, udryddelse og genopretning — at standse skaden, fjerne truslen og genoprette normal drift. Inddæmningsstrategier varierer alt efter hændelsestype (et malwareudbrud inddæmmes på en anden måde end en kompromitteret konto). Udrydning betyder at fjerne årsagen. Genopretning betyder at bringe systemerne sikkert online igen og kontrollere, at de er rene.
Aktiviteter efter hændelsen – fasen, hvor man drager erfaringer. Når hændelsen er afsluttet, kræver vejledningen en struktureret gennemgang: hvad der skete, hvor godt teamet reagerede, hvilke mangler der blev afsløret, og hvad der skal ændres. Dette indgår direkte i forberedelserne til den næste hændelse.
Ud over livscyklussen dækker 800-61 også koordinering med eksterne parter — retshåndhævende myndigheder, andre agenturer, leverandører og ISAC'er — og fastsætter forventninger til håndtering af bevismateriale og dokumentation, hvilket er vigtigt, hvis en hændelse har juridiske konsekvenser.
I sammenhæng med arkitekturdiagrammet udgør 800-61 udførelseslaget: det forudsætter, at kontrollerne fra 800-53 genererer hændelser, og det overdrager til ISO 27035, når en hændelse skal spores og håndteres formelt gennem hele sin organisatoriske livscyklus.

Controls og capabillity layer (800-53)
De fire lag fungerer som en indlejret afhængighedsstak — hvert lag er afhængigt af det underliggende, og tilsammen danner de en lukket kredsløb.

Kontroller og kapacitet (fundament) — NIST SP 800-53 definerer, hvilke sikkerhedskontroller der rent faktisk findes: adgangsstyring, logning, overvågning, kryptering osv. Uden disse tekniske og proceduremæssige kontroller på plads er der intet at opdage hændelser med og ingen værktøjer at reagere med. Dette er infrastrukturlaget.
Operationel reaktion (udførelse) — NIST SP 800-61 ligger oven på kontrolaget. Det forudsætter, at kontrollerne genererer hændelser og alarmer, og giver en vejledning i, hvad man skal gøre med dem: hvordan man opdager, prioriterer, inddæmmer, udrydder og genopretter efter hændelser. Det er det praktiske lag.
Processer og ledelse (livscyklus) — ISO 27035 løfter perspektivet et niveau højere. Hvor 800-61 handler om at udføre en reaktion, regulerer 27035 hele hændelsens livscyklus: hvordan hændelser defineres, klassificeres, rapporteres, spores, lukkes og føres tilbage til forbedring. Den håndterer også tværgående koordinering og dokumentation — ting, der betyder mindre i heden af en enkelt hændelse, men som er afgørende for at styre hændelser som et program over tid.

Processer og ledelse (livscyklus) — ISO 27035 løfter perspektivet et niveau højere. Hvor 800-61 handler om at gennemføre en reaktion, regulerer 27035 hele hændelsens livscyklus: hvordan hændelser defineres, klassificeres, rapporteres, spores, lukkes og føres tilbage til forbedring. Den håndterer også tværgående koordinering og dokumentation — ting, der betyder mindre i heden af en enkelt hændelse, men som er afgørende for at styre hændelser som et program over tid.
Styring og koordinering (myndighed) — ISO 22320 befinder sig øverst, fordi den opererer på krise- og tværgående organisationsniveau. Den definerer, hvem der har myndighed til at træffe beslutninger, når en hændelse eskalerer ud over et enkelt team eller en organisation, hvordan kommandostrukturer fungerer under pres, og hvordan koordinering foregår med eksterne parter som tilsynsmyjndigheder, partnere eller beredskabstjenester.
Integrationen i en virksomheds kapacitet sker gennem tre mekanismer:

Vertikal eskalering — en alarm (kontrolniveau) udløser en reaktionsprocedure (operativt niveau), som, hvis den er alvorlig nok, aktiverer hændelseslivscyklusprocessen (ledelsesniveau), som, hvis den udvikler sig til en krise, aktiverer koordineringsrammen (styringsniveau). Hvert niveau har en tærskel, der overdrager til det niveau, der ligger over det.

Feedback-sløjfer — styringslaget fastlægger retningslinjer og prioriteter, der videreføres nedad og bestemmer, hvordan proceslaget klassificerer hændelser, hvilket igen bestemmer, hvad driftslaget prioriterer, og dermed hvad kontrol- og kapacitetslaget investerer i. Strukturen fungerer top-down med hensyn til strategi og bottom-up med hensyn til udførelse.
Fælles terminologi — det egentlige integrationsarbejde består i at sikre, at det, kontrolniveauet kalder en »kritisk alarm«, svarer til det, det operationelle niveau kalder en »P1-hændelse«, hvilket svarer til det, ledelsesniveauet kalder en »alvorlig hændelse«, hvilket svarer til det, styringsniveauet kalder en »krise«. Uden denne afstemning forbliver niveauerne adskilte, selvom alle fire standarder formelt er vedtaget.

FEMTE LAG
De fire lag udgør et lukket system — strategien strømmer nedad, gennemførelsen strømmer opad, og det hele giver feedback til sig selv.
Afhængighedsstakken
Hvert lag er afhængigt af, at det underliggende lag fungerer:

800-53 (kontrol) genererer de alarmer og logfiler, som 800-61 har brug for til at opdage hændelser
800-61 (respons) producerer de hændelsesregistreringer, som 27035 har brug for til at styre livscyklussen
27035 (livscyklus) producerer de eskaleringsudløsere og den dokumentation, som 22320 har brug for til at koordinere en kriserespons
22320 (governance) producerer de politiske beslutninger og erfaringer, der strømmer nedad og omformer lagene nedenunder

Hvis et lag mangler eller er umodent, forringes lagene ovenover det. En organisation med stærk governance (22320) men svage kontroller (800-53) vil have fremragende krisekoordinationsmøder om hændelser, den faktisk ikke kan opdage.
De tre integrationsmekanismer
1. Vertikal eskalering — hændelser bevæger sig opad gennem stakken, efterhånden som de vokser:
AlvorlighedAktivt lagHvem ejer detAlarm / hændelse800-53 + 800-61SOC / sikkerhedsteamFormel hændelse27035Hændelsesleder + ISIRTMajor hændelse27035 + 22320LedelsenKrise22320Ledelse / tværgående kommando
Hvert lag har definerede tærskler, der udløser overdragelse til det overliggende lag. Uden disse tærskler nedskrevet og aftalt sker eskalering for sent — eller slet ikke.

2. Tilbagemeldingssløjfer — processen går begge veje:

Nedfra og op: Mangler i kontrollen og huller i reaktionsmønstrene kommer til syne gennem hændelser og indgår i ledelsesbeslutninger om investeringer og politik
Oppefra og ned: Ledelsens prioriteter bestemmer, hvordan proceslaget klassificerer hændelser, hvilket igen bestemmer, hvad driftslaget betragter som presserende, hvilket igen bestemmer, hvilke kontrolforanstaltninger der implementeres og overvåges

Læringsfasen i 27035 er den formelle mekanisme for dette — det er her, den operationelle erfaring omdannes til ændringer i politik og kontrol.
3. Fælles ordforråd — den mest undervurderede integrationsudfordring. Hver standard bruger sin egen terminologi, og uden en eksplicit sammenkobling mellem dem forbliver lagene isolerede, selv når alle fire formelt er vedtaget. En velfungerende integration kræver aftalte definitioner på tværs af stakken:
Begreb800-53-term800-61-term27035-term22320-termNoget sketeRevisionshændelseSikkerhedshændelseInformationssikkerhedshændelseHændelsessignalDet kræver en reaktionKontrolsvigtHændelseInformationssikkerhedshændelseNødsituationDet er alvorligtStor indvirkningStørre hændelseVæsentlig hændelseKrise
Uden denne sammenkobling vil en P1 i SOC muligvis aldrig udløse 27035-eskaleringsstien, og en større hændelse vil muligvis aldrig nå 22320-koordinationslaget, før det er for sent.
Hvordan virksomhedens kapacitet rent faktisk ser ud
Når de fire lag er korrekt integreret, har virksomhedens kapacitet fem observerbare egenskaber:
Påviselighed — kontrolmekanismerne er tilstrækkeligt veludviklede til, at hændelser kommer til syne pålideligt og ikke ved et tilfælde
Reaktionsdygtighed — beredskabsprocedurerne er gennemøvede og hurtige nok til at inddæmme hændelser, før de udvikler sig til kriser
Håndterbarhed — hændelser spores, tildeles ansvar og afsluttes systematisk med fuld dokumentation
Modstandsdygtighed — når kriser opstår, er koordineringen på tværs af teams og organisationer struktureret og effektiv
Læring — hver eneste væsentlig hændelse forbedrer systemet, så organisationen bliver målbart bedre over tid

Virksomhedens kapacitet er ikke summen af fire standarder — den er resultatet af en bevidst sammenkobling af dem, så hvert lag styrker de andre.
