# Triage og vurderingsfasen - Yderligere detaljer

Triage og vurderingsfasen har til formål hurtigt at skabe situationsforståelse og danne grundlag for de første kritiske beslutninger under en potentiel sikkerhedshændelse. Formålet med fasen er at afgøre hændelsens karakter, omfang, alvor og forretningsmæssige konsekvenser, så organisationen kan prioritere indsatsen målrettede og aktivere de nødvendige ressourcer. Denne fase fungerer som bindeled mellem detektion og aktiv respons. Hvis triage udføres mangelfuldt, kan organisationen risikere enten at overreagere på mindre hændelser eller undervurdere alvorlige kompromitteringer.

## Udgangspunkter for validering

Når en potentiel hændelse er blevet detekteret og registreret, hvilket kan forekomme gennem automatiske alarmer fra SIEM-systemer, rapportering fra medarbejdere eller observationer fra driftspersonale. Det er vigtigt at understrege, at ikke alle detektioner nødvendigvis er reelle hændelser, idet mange alarmer viser sig at være falske positiver. Derfor er det første skridt i triage at validere, om der faktisk er tale om en sikkerhedshændelse, og om den er aktiv.

Mange alarmer og observationer viser sig i praksis at være:

- Fejlkonfigurationer
- Normale administrative aktiviteter
- Driftsfejl
- Falske positiver
- Testaktiviteter
- Automatiserede processer
- Brugerfejl

Organisationen skal derfor hurtigt vurdere:

- Om alarmen er legitim
- Om hændelsen er aktiv
- Om kompromittering kan bekræftes
- Om der er tegn på lateral movement
- Om hændelsen påvirker kritiske systemer
- Om der er behov for øjeblikkelig containment

Denne validering foretages ofte gennem:

| Aktivitet | Formål |
|---|---|
| Loganalyse | Verificere hændelsesforløb |
| Endpoint-analyse | Identificere kompromittering |
| Netværksanalyse | Analysere kommunikationsmønstre |
| IOC-validering | Bekræfte kendte indikatorer |
| Threat intelligence-opslag | Vurdere trusselsaktører og teknikker |
| Korrelationsanalyse | Sammenkæde relaterede events |
| Brugerinterview | Afklare observeret adfærd |

---

## Triage

Triage handler om at skabe et operationelt overblik og prioritere indsatsen. Det er vigtigt at understrege, at triage ikke er en statisk vurdering, men en dynamisk proces, der kan ændre sig markant, efterhånden som flere informationer bliver tilgængelige. Det er derfor afgørende, at organisationen etablerer løbende opdateringer og revurderinger af hændelsen, så alvorlighed og prioritet kan justeres i takt med den nye viden.
Når hændelsen er valideret, gennemføres den egentlige triage.

Typiske spørgsmål i triagefasen inkluderer:

- Hvad er kompromitteret?
- Hvilke systemer er berørt?
- Er hændelsen stadig aktiv?
- Hvor hurtigt spreder hændelsen sig?
- Er kritiske forretningsfunktioner påvirket?
- Er følsomme data kompromitteret?
- Er der regulatoriske konsekvenser?
- Er der risiko for offentlig eksponering?

Triageprocessen bør være struktureret og baseret på klare kriterier, så beslutninger kan træffes hurtigt og konsistent. Det er vigtigt, at triage ikke kun fokuserer på tekniske aspekter, men også inddrager forretningsmæssige og organisatoriske perspektiver, da to hændelser med samme tekniske karakteristika kan have vidt forskellige konsekvenser afhængigt af de berørte systemer og processer. En effektiv triageproces kræver derfor både teknisk ekspertise og forretningsforståelse, så organisationen kan prioritere indsatsen på en måde, der bedst understøtter både sikkerhed og forretningsmål.

---

## Klassifikation
Efter validering og triage skal hændelsen klassificeres og vurderes ud fra både tekniske og forretningsmæssige kriterier. Klassifikation handler om at kategorisere hændelsen i forhold til dens karakteristika, mens alvorlighedsvurderingen handler om at vurdere dens potentielle konsekvenser. Klassifikation og alvorlighedsvurdering er defineret af organisationen egen skala af klassifikations- og alvorlighedsskala.

ISO 27035-2 lægger derfor op til, at en klassifikationsskala typisk baseres på:

- Indvirkning på virksomheden
- Konsekvens
- Informationsklassifikation
- Tilgængelighed / integritet / fortrolighed (FIT)
- Kritikalitet af systemer
- Urgency / responstid

### Kategorisering af hændelser:

Kategorisering hjælper med at skabe overblik og struktur i håndteringen, så organisationen kan anvende relevante processer, værktøjer og ressourcer til forskellige typer hændelser. Det er vigtigt, at kategorierne er klart definerede og dækkende for de typer hændelser, som organisationen typisk står overfor.

Herunder er et eksempel på en kategoriseringsskala, som kan anvendes i triagefasen:

| Kategori | Beskrivelse | Eksempler |
|---|---|---|
| Naturkatastrofehændelse | Tab af informationssikkerhed forårsaget af naturkatastrofer uden for menneskelig kontrol. | Jordskælv, vulkanudbrud, oversvømmelse, kraftig storm, lynnedslag, tsunami, kollaps |
| Samfundsuro-hændelse | Tab af informationssikkerhed forårsaget af ustabilitet i samfundet. | Terrorangreb, krig |
| Fysisk skadehændelse | Tab af informationssikkerhed forårsaget af bevidste eller utilsigtede fysiske handlinger. | Brand, vandskade, statisk elektricitet, forurening, støv, korrosion, frost, ødelæggelse af udstyr, tyveri af udstyr eller medier, manipulation af udstyr |
| Infrastrukturfejl-hændelse | Tab af informationssikkerhed forårsaget af fejl i de grundlæggende systemer og services, som understøtter informationssystemer. | Strømsvigt, netværksfejl, fejl på køling/aircondition, svigt i vandforsyning |
| Strålingsforstyrrelseshændelse | Tab af informationssikkerhed forårsaget af forstyrrelser relateret til stråling. | Elektromagnetisk stråling, elektromagnetisk puls (EMP), elektronisk jamming, spændingsudsving, termisk stråling |
| Teknisk fejlhændelse | Tab af informationssikkerhed forårsaget af fejl i informationssystemer eller relaterede ikke-tekniske faciliteter samt utilsigtede menneskeskabte problemer, som medfører utilgængelighed eller ødelæggelse af systemer. | Hardwarefejl, softwarefejl, overbelastning, manglende vedligeholdelse |
| Malware-hændelse | Tab af informationssikkerhed forårsaget af ondsindede programmer, som bevidst er udviklet og spredt for at kompromittere fortrolighed, integritet eller tilgængelighed af data, systemer eller services. | Computervirus, trojaner, botnet, blended attacks, ransomware |
| Teknisk angrebshændelse | Tab af informationssikkerhed forårsaget af tekniske angreb mod informationssystemer via netværk eller andre tekniske metoder, herunder udnyttelse af sårbarheder, konfigurationsfejl eller brute force-angreb. | Netværksscanning, sårbarhedsudnyttelse, backdoor-udnyttelse, loginforsøg, interferens, doS-angreb, domain hijacking |
| Regelbrudshændelse | Tab af informationssikkerhed forårsaget af bevidste eller utilsigtede brud på regler, politikker eller lovgivning. | Uautoriseret brug af ressourcer, brud på copyright/licenser |
| Kompromittering af funktioner | Tab af informationssikkerhed forårsaget af kompromittering af informationssystemers funktioner eller sikkerhedsmæssige mekanismer. | Misbrug af rettigheder, forfalskning af rettigheder, benægtelse af handlinger, fejlbetjening, utilgængelighed af personale. |
| Kompromittering af information | Tab af informationssikkerhed forårsaget af kompromittering af fortrolighed, integritet eller tilgængelighed af information. | Aflytning, spionage, eavesdropping, offentliggørelse af information, social engineering, phishing, datatyveri, manipulation af data, datatab |
| Skadeligt indhold-hændelse | Tab af informationssikkerhed forårsaget af spredning af uønsket eller skadeligt indhold via informationsnetværk. | Ulovligt indhold, terrorrelateret indhold, skadeligt indhold, misbrugende indhold, spam |
| Andre hændelser | Hændelser som ikke passer ind i øvrige kategorier. | Diverse eller ukategoriserede hændelser |

Denne kategorisering er ikke udtømmende, og organisationen bør tilpasse den til sine egne behov og trusselsbillede. Det er vigtigt, at kategorierne er klart definerede og dækkende for de typer hændelser, som organisationen typisk står overfor, så triageprocessen kan gennemføres effektivt og konsekvent.
---

### Alvorlighedsvurdering

Alvorlighedsvurderingen bør være baseret på en kombination af tekniske og forretningsmæssige kriterier, da to hændelser med samme tekniske karakteristika kan have vidt forskellige konsekvenser afhængigt af de berørte systemer og processer. Det er derfor vigtigt, at organisationen har en klar og konsistent tilgang til både klassifikation og alvorlighedsvurdering, så beslutninger om respons og eskalering kan træffes på et solidt grundlag.

Alvorlighedsvurderingen tager typisk udgangspunkt i:

- Påvirkning af fortrolighed
- Påvirkning af integritet
- Påvirkning af tilgængelighed
- Finansielt tab
- Lovgivningsmæssige


Et eksempel på Alvorlighedsskala kan være:

| Alvorlighed | Beskrivelse |
|---|---|
| Kritisk | Forretningskritisk / regulatorisk påvirkning |
| Høj | Kritisk påvirkning af drift eller data |
| Medium | Lokal eller moderat påvirkning |
| Lav | Begrænset påvirkning |

Alvorlighedsvurderingen er central, fordi den direkte påvirker:

- Responsestid
- Eskalationsniveau
- Involvering af ledelse
- Ressourceallokering
- Kommunikationsbehov
- Juridiske vurderinger

---

### Prioritering
Prioritering er en funktion af både alvorlighed og forretningsmæssig impact. Det er vigtigt at understrege, at prioritet ikke er en selvstændig vurdering, men snarere en konsekvens af både tekniske og forretningsmæssige vurderinger. To hændelser med samme tekniske alvorlighed kan have vidt forskellige prioriteter, afhængigt af deres forretningsmæssige konsekvenser.

Prioritering kan eksempelvis baseres på følgende matrix:

| Prioritering | Responstid          |
| -------- | ------------------- |
| P1       | Øjeblikkelig        |
| P2       | < 4 timer           |
| P3       | < 24 timer          |
| P4       | Planlagt håndtering |

Det er vigtigt, at prioriteringskriterierne er klart definerede og kommunikeret i organisationen, så alle involverede parter har en fælles forståelse af, hvordan prioriteringer skal fastsættes og håndteres. Prioriteringen bør også være dynamisk, så den kan justeres i takt med, at nye informationer bliver tilgængelige under hændelsesforløbet. Prioritering spejler således både den tekniske alvorlighed og de forretningsmæssige konsekvenser, og den danner grundlag for alle efterfølgende beslutninger og handlinger i håndteringen af hændelsen inden for en given tidsramme.

---

## Beslutninger og handlinger
Beslutninger i triage- og vurderingsfasen er afgørende for den videre håndtering af hændelsen. Det er i denne fase, organisationen træffer de første operative beslutninger, som kan have stor betydning for både effektiviteten af responsen og de langsigtede konsekvenser af hændelsen. Det er derfor vigtigt, at organisationen har klare retningslinjer og processer for, hvordan beslutninger skal træffes i denne fase, og at der er en klar forståelse af, hvilke kriterier der skal anvendes for at vurdere alvorlighed, impact og prioritet.


Dette kan eksempelvis omfatte beslutning om:

- Containment
- Isolation af systemer
- Aktivering af Incident Response Team
- Eskalering til ledelse
- Involvering af kriseledelse
- Juridisk vurdering
- Aktivering af eksterne leverandører
- Myndighedsrapportering
- Sikring af beviser

En vigtig del af fasen er vurdering af behovet for evidenssikring og bevaring af bevismateriale. Hvis der er risiko for juridiske eller regulatoriske konsekvenser, skal organisationen hurtigt sikre relevante spor og undgå destruktion af data.

Dette kan inkludere:

- Memory dumps
- Disk images
- Logudtræk
- Netværksoptagelser
- Snapshots af cloudmiljøer
- Sikring af maildata

Organisationen skal samtidig balancere behovet for hurtig containment med behovet for bevarelse af beviser. For aggressiv containment kan i nogle tilfælde ødelægge vigtig evidens eller skjule angriberens aktivitet. I kritiske hændelser kan triagefasen udvikle sig hurtigt og kræve løbende revurdering af hændelsen. Alvorlighed og impact kan ændre sig markant, efterhånden som flere informationer bliver tilgængelige.

Der bør derfor etableres:

- Løbende situationsopdateringer
- Dynamisk alvorlighedsvurdering
- Beslutningslogs
- Statusrapportering
- Eskalationsmøder
- Fælles operationelt billede

---

## Afsluttende bemærkninger

Triage- og vurderingsfasen er en af de mest kritiske dele af incident management-processen, da den danner fundamentet for alle efterfølgende beslutninger og handlinger. Kvaliteten af organisationens situationsforståelse i denne fase har direkte betydning for, hvor effektivt hændelsen kan håndteres, begrænses og efterfølgende genoprettes. En korrekt og rettidig vurdering kan reducere skadeomfang, forkorte responstid og understøtte bedre koordinering mellem tekniske, organisatoriske og ledelsesmæssige funktioner.

Fasen bør derfor ikke betragtes som en engangsaktivitet, men som en kontinuerlig og dynamisk proces, hvor hændelsen løbende revurderes i takt med, at nye informationer bliver tilgængelige. Trusselsbilledet, trusselaktørens adfærd, påvirkede systemer og den forretningsmæssige konsekvens kan ændre sig hurtigt under et hændelsesforløb, hvilket stiller krav til organisationens evne til at tilpasse prioriteringer, eskaleringer og beslutninger løbende.

En moden triage- og vurderingskapabilitet kræver derfor mere end tekniske værktøjer alene. Den forudsætter klare processer, veldefinerede klassifikations- og alvorlighedsskalaer, adgang til relevante log- og overvågningsdata, etablerede kommunikationsveje samt personale med både teknisk, analytisk og forretningsmæssig forståelse. Samtidig er det afgørende, at organisationen løbende træner og tester sine triageprocesser gennem øvelser og lessons learned-aktiviteter, så vurderinger kan foretages hurtigt, konsistent og under pres.

ISO/IEC 27035 understøtter netop denne tilgang ved at fremhæve behovet for struktureret vurdering, prioritering, koordinering og løbende forbedring som centrale elementer i effektiv informationssikkerhedshændelseshåndtering. En stærk triage- og vurderingsproces er derfor ikke alene et operationelt værktøj, men en central del af organisationens samlede cyber resilience og evne til at håndtere komplekse sikkerhedshændelser professionelt og kontrolleret.

---
