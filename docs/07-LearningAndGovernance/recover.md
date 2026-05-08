# Fase EFTER – Recovery

Recovery-fasen har til formål at genetablere normal drift på en kontrolleret, sikker og dokumenteret måde efter en sikkerhedshændelse. Målet er ikke alene at få systemer online igen, men at sikre, at organisationen vender tilbage til en stabil og betryggende driftstilstand uden fortsat kompromittering eller skjulte trusler i miljøet.

Recovery-fasen er tæt koblet til både containment- og eradication-faserne. Genopretning må først påbegyndes, når organisationen har tilstrækkelig forståelse af:

- hændelsens root cause
- kompromitteringens omfang
- påvirkede systemer og data
- angriberens adgangsveje
- eventuelle persistence-mekanismer
- risiko for reinfektion eller gentagen kompromittering

Organisationen skal samtidig validere, at:

- kompromitterede legitimationsoplysninger er udskiftet
- malware er fjernet
- sårbarheder er lukket
- kompromitterede integrationer er sikret
- sikkerhedskontroller fungerer korrekt
- overvågning er genoprettet

Recovery-fasen skal være risikobaseret og styret gennem en formaliseret genetableringsplan. Formålet med planen er at sikre kontrolleret prioritering og koordinering af genetableringen.

En recovery-plan bør typisk omfatte:

| Element | Formål |
|---|---|
| Prioritering af systemer | Sikre genetablering af kritiske services først |
| Recovery-rækkefølge | Undgå afhængighedsproblemer |
| Integritetsvalidering | Bekræfte at systemer er rene |
| Funktionstest | Verificere drift og sikkerhed |
| Kommunikationsplan | Koordinere information til interessenter |
| Godkendelsesflow | Sikre kontrolleret genetablering |
| Rollback-plan | Håndtering af fejl under recovery |

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

- restore fra backups
- geninstallation af systemer
- genetablering af cloud workloads
- database recovery
- credential rotation
- netværksre-konfiguration
- patching og hardening
- genaktivering af services
- validering af sikkerhedskontroller

Ved ransomware-hændelser vil recovery ofte fokusere på:

- verificering af backup-integritet
- offline restore-processer
- isoleret genetablering
- gradvis reconnect til netværket
- øget monitorering efter recovery

Ved kompromitterede identitetsmiljøer kan recovery blandt andet omfatte:

- reset af privilegerede konti
- rotation af service accounts
- re-etablering af MFA
- gennemgang af privilegier
- review af federations- og trustforhold

En central del af recovery-fasen er validering af systemintegritet. Organisationen må ikke genetablere systemer alene baseret på antagelser om, at kompromitteringen er fjernet.

Der bør gennemføres:

- malware-scanning
- integrity checks
- vulnerability scanning
- loganalyse
- konfigurationsvalidering
- sikkerhedstest
- funktions- og performance-tests

Valideringen skal sikre, at:

- systemer fungerer korrekt
- sikkerhedskontroller er aktive
- kompromittering ikke fortsætter
- data er komplette og korrekte
- integrationspunkter fungerer sikkert

Organisationen bør samtidig overvåge miljøet intensivt efter genetablering for hurtigt at opdage tegn på:

- reinfektion
- persistence-mekanismer
- fortsat lateral movement
- uautoriseret aktivitet
- fejl i recovery-processen

Dette omtales ofte som enhanced monitoring eller heightened monitoring.

Eksempler på øget monitorering kan være:

- midlertidigt skærpede SIEM-regler
- øget EDR-overvågning
- tættere logreview
- hyppigere scanninger
- manuel overvågning af kritiske systemer

Recovery-fasen kræver tæt koordinering mellem:

- drift
- sikkerhedsteams
- systemejere
- cloud teams
- netværksteams
- leverandører
- ledelse
- forretningsenheder

Der skal løbende foretages vurderinger af:

- driftsmæssig risiko
- sikkerhedsrisiko
- afhængigheder mellem systemer
- påvirkning på forretningen
- behov for midlertidige workarounds

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

- koordineret
- konsistent
- faktabaseret
- godkendt gennem etablerede processer
- tilpasset målgruppen

Under recovery-fasen skal organisationen samtidig dokumentere alle væsentlige handlinger og beslutninger.

Dette omfatter blandt andet:

- hvilke systemer der genetableres
- hvornår genetablering sker
- hvilke valideringer der er udført
- hvilke ændringer der er implementeret
- hvem der har godkendt genetableringen
- hvilke risici der fortsat accepteres

Dokumentationen er vigtig for:

- audit og compliance
- regulatorisk rapportering
- juridisk dokumentation
- lessons learned
- forbedring af recovery-processer

Recovery-fasen afsluttes først, når organisationen vurderer, at:

- kritiske services er genetableret
- kompromitteringen er fjernet
- systemerne fungerer stabilt
- sikkerhedskontroller er verificeret
- normal drift kan genoptages
- øget monitorering kan nedtrappes

---

## Afsluttende bemærkninger

Recovery er derfor ikke alene en teknisk genetableringsproces, men en kontrolleret overgang fra incident response tilbage til normal forretningsdrift med fokus på sikkerhed, stabilitet og tillid.

ISO/IEC 27035-3 beskriver recovery som en struktureret proces for genetablering af drift og verificering af systemernes integritet efter containment og eradication :contentReference. ISO/IEC 27035-1 placerer recovery som en central del af organisationens samlede responsproces, mens NIST SP 800-61 understreger betydningen af kontrolleret genetablering, validering og overvågning efter større sikkerhedshændelser.

---