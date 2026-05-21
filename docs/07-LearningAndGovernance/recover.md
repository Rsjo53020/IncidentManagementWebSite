# Recovery fasen - Yderligere detaljer

Recovery fasen har til formål at genetablere normal drift på en kontrolleret, sikker og dokumenteret måde efter en sikkerhedshændelse. Målet er ikke alene at få systemer online igen, men at sikre, at organisationen vender tilbage til en stabil og betryggende driftstilstand uden fortsat kompromittering eller skjulte trusler i miljøet.

## Genopretning af drift

Recovery fasen er tæt koblet til både containment- og udryddelse-faserne. Genopretning må først påbegyndes, når organisationen har tilstrækkelig forståelse af:

- Hændelsens root cause
- Kompromitteringens omfang
- Påvirkede systemer og data
- Trusselaktørens adgangsveje
- Eventuelle persistence-mekanismer
- Risiko for reinfektion eller gentagen kompromittering

Organisationen skal samtidig validere:

- Atkompromitterede legitimationsoplysninger er udskiftet
- At malware er fjernet
- At sårbarheder er lukket
- At kompromitterede integrationer er sikret
- At sikkerhedskontroller fungerer korrekt
- At overvågning er genoprettet

---

## Genetableringsplan

Recovery fasen skal være risikobaseret og styret gennem en formaliseret genetableringsplan. Formålet med planen er at sikre kontrolleret prioritering og koordinering af genetableringen.

En recovery plan bør typisk omfatte:

| Element | Formål |
|---|---|
| Prioritering af systemer | Sikre genetablering af kritiske services først |
| Recovery-rækkefølge | Undgå afhængighedsproblemer |
| Integritetsvalidering | Bekræfte at systemer er rene |
| Funktionstest | Verificere drift og sikkerhed |
| Kommunikationsplan | Koordinere information til interessenter |
| Godkendelsesflow | Sikre kontrolleret genetablering |
| Rollback-plan | Håndtering af fejl under recovery |

### Prioritering og koordinering

Organisationen skal identificere, hvilke systemer der er mest kritiske for forretningen, og genetableringen skal ske ud fra definerede prioriteringer.

Eksempel på prioriteringsrækkefølge:

| Prioritet | Systemtype |
|---|---|
| Kritisk | Identity services, netværk, ERP |
| Høj | Produktionssystemer, kundevendte services |
| Medium | Interne applikationer |
| Lav | Test- og udviklingsmiljøer |

Recovery kan involvere flere forskellige tekniske aktiviteter afhængigt af hændelsestypen.

Typiske recovery-aktiviteter inkluderer:

- Restore fra backups
- Geninstallation af systemer
- Genetablering af cloud workloads
- Database recovery
- Credential rotation
- Netværksre-konfiguration
- Patching og hardening
- Genaktivering af services
- Validering af sikkerhedskontroller

Recovery ved ransomware-hændelser vil ofte fokusere på:

- Verificering af backup-integritet
- Offline restore-processer
- Isoleret genetablering
- Gradvis reconnect til netværket
- Øget monitorering efter recovery

Recovery i kompromitterede identitetsmiljøer kan blandt andet omfatte:

- Reset af privilegerede konti
- Rotation af service accounts
- Re-etablering af MFA
- Gennemgang af privilegier

### Validering og monitorering
En central del af recovery-fasen er validering af systemintegritet. Organisationen må ikke genetablere systemer alene baseret på antagelser om, at kompromitteringen er fjernet.

Der bør gennemføres:

- Malware-scanning
- Integritetsvalidering
- Vulnerability scanning
- Loganalyse
- Konfigurationsvalidering
- Sikkerhedstest
- Funktionstest og performance-tests

Valideringen skal sikre, at:

- Systemer fungerer korrekt
- Sikkerhedskontroller er aktive
- Kompromittering ikke fortsætter
- Data er komplette og korrekte
- Integrationspunkter fungerer sikkert

Organisationen bør samtidig overvåge miljøet intensivt efter genetablering for hurtigt at opdage tegn på:

- Reinfektion
- Persistence-mekanismer
- Fortsat lateral movement
- Uautoriseret aktivitet
- Fejl i recovery-processen

Dette omtales ofte som forbedret monitoring eller forstærket monitoring.

Eksempler på øget monitorering kan være:

- Midlertidigt skærpede SIEM-regler
- Øget EDR-overvågning
- Tættere logreview
- Hyppigere scanninger
- Manuel overvågning af kritiske systemer

### Kommunikation og dokumentation
Kommunikation og dokumentation er også centrale elementer i recovery-fasen. Organisationen skal sikre, at alle relevante interessenter holdes opdateret om status for recovery-processen, forventede tidslinjer og eventuelle risici.

Recovery-fasen kræver tæt koordinering mellem:

- Drift
- Sikkerhedsteams
- Systemejere
- Cloud teams
- Netværksteams
- Leverandører
- Ledelse
- Forretningsenheder

Der skal løbende foretages vurderinger af:

- Driftsmæssig risiko
- Sikkerhedsrisiko
- Afhængigheder mellem systemer
- Påvirkning på forretningen
- Behov for midlertidige workarounds

Kommunikation er samtidig et centralt element i recovery-fasen. Interne og eksterne interessenter skal løbende orienteres ud fra et opdateret og valideret situationsbillede.

Kommunikation kan omfatte:

| Interessent | Eksempel på kommunikation |
|---|---|
| Ledelse | Status på genetablering og risiko |
| Medarbejdere | Driftspåvirkning og forventninger |
| Kunder | Servicepåvirkning og genetablering |
| Myndigheder | Recovery-status og hændelsesopdateringer |
| Leverandører | Teknisk koordinering |
| Presse | Kontrolleret offentlig kommunikation |

Kommunikationen bør være:

- Koordineret
- Konsistent
- Faktabaseret
- Godkendt gennem etablerede processer
- Tilpasset målgruppen

Under recovery-fasen skal organisationen samtidig dokumentere alle væsentlige handlinger og beslutninger, idet dette er afgørende for både efterfølgende læring og for at kunne demonstrere, at recovery er foretaget på en kontrolleret og sikker måde.

Dette omfatter blandt andet:

- Hvilke systemer der genetableres
- Hvornår genetablering sker
- Hvilke valideringer der er udført
- Hvilke ændringer der er implementeret
- Hvem der har godkendt genetableringen
- Hvilke risici der fortsat accepteres

Dokumentationen er vigtig for:

- Audit og compliance
- Regulatorisk rapportering
- Juridisk dokumentation
- Lessons learned
- Forbedring af recovery-processer

### Afslutning af recovery
After recovery-fasen skal organisationen foretage en samlet vurdering af, om det er sikkert og stabilt at genoptage normal drift. Dette indebærer en risikovurdering, hvor organisationen skal beslutte, om de resterende risici er acceptable, eller om yderligere foranstaltninger er nødvendige.
Nedtrappning af øget monitorering bør også ske gradvist og baseret på løbende vurderinger af miljøet.

Indikatorer for, at recovery kan afsluttes, kan være:

- Kritiske services er genetableret
- Kompromitteringen er fjernet
- Systemerne fungerer stabilt
- Sikkerhedskontroller er verificeret
- Normal drift kan genoptages
- Nedtrapning af øget monitorering er mulig.

---

## Afsluttende bemærkninger

Recovery er derfor ikke alene en teknisk genetableringsproces, men en kontrolleret overgang fra incident response tilbage til normal forretningsdrift med fokus på sikkerhed, stabilitet og tillid. ISO/IEC 27035-3 beskriver recovery som en struktureret proces for genetablering af drift og verificering af systemernes integritet efter containment og eradication. ISO/IEC 27035-1 placerer recovery som en central del af organisationens samlede responsproces, mens NIST SP 800-61 understreger betydningen af kontrolleret genetablering, validering og overvågning efter større sikkerhedshændelser.

---