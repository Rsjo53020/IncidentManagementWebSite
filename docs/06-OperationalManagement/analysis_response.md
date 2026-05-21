# Analyse og respons fasen - Yderligere detaljer

Analyse og responsfasen har til formål at skabe dyb forståelse for hændelsen og gennemføre de nødvendige tekniske, organisatoriske og operationelle tiltag for at begrænse skade, stoppe angrebet og genetablere kontrol over de berørte systemer og services. I denne fase bevæger organisationen sig fra den indledende triage til en mere detaljeret undersøgelse af hændelsens omfang, årsag, konsekvenser og angrebsmetoder. Samtidig iværksættes containment-, udryddelse- og koordineringsaktiviteter for at minimere påvirkningen på organisationen.

## Etablering af operationelt billede og situationsforståelse

Analysefasen begynder typisk med etablering af et fælles operationelt billede, hvor alle relevante informationer samles og valideres. Formålet er at skabe situationsforståelse og sikre, at beslutninger træffes på et korrekt og opdateret grundlag.

Dette omfatter blandt andet analyse af:

- Kompromitterede systemer
- Brugeraktivitet
- Netværkskommunikation
- Malware-adfærd
- Logdata
- Cloud telemetry
- Adgangsrettigheder
- Laterale bevægelser
- Persistence-mekanismer
- Exfiltration af data

---

## Identifikation af angrebsmetoder og teknikker

Samtidig med etablering af situationsforståelse skal organisationen forsøge at identificere de TTPer (taktik, teknik, og procedures), som trusselsaktøren har anvendt.

Dette kan blandt andet omfatte:

- Hændelsens root cause
- Indledende fremgangsmåde for trusselsaktøren
- Angrebsteknikker
- Kompromitterede legitimationsoplysninger
- Påvirkede data
- Påvirkede forretningsprocesser
- Eventuelle relaterede hændelser

Typiske analyseaktiviteter inkluderer:

| Aktivitet | Formål |
|---|---|
| Loganalyse | Rekonstruktion af hændelsesforløb |
| Memory analysis | Identifikation af malware og processer |
| Disk forensics | Analyse af kompromitterede systemer |
| Netværksanalyse | Kortlægning af kommunikation |
| IOC-analyse | Identifikation af indikatorer |
| Rekonstruktion af tidsforløbet | Kortlægning af hændelsesforløb |
| Sammenkobling af trusselsoplysninger | Sammenligning med kendte trusler |
| Malware reverse engineering | Analyse af skadevare |


Under analyseaktiviteten i sammenkobling af trusselsoplysninger, kan MITRE ATT&CK-frameworket anvendes, idet MITRE giver en struktureret tilgang til at kategorisere og analysere af kendte trusselsaktørers adfærd og teknikker. Kortlægning af de identificerede teknikker til ATT&CK-frameworket giver organisationen indsigt i trusselsaktørens fremgangsmåde, mulige motivation og sandsynlige næste skridt.

Analysen skal både fokusere på den tekniske kompromittering og på hændelsens potentielle forretningsmæssige konsekvenser.

Dette kan eksempelvis inkludere vurdering af:

- Datakompromittering
- Tab af tilgængelighed
- Driftsforstyrrelser
- Økonomisk påvirkning
- Regulatoriske konsekvenser
- Påvirkning af kunder og samarbejdspartnere
- Risiko for offentlig eksponering

Et vigtigt element i analysefasen er identifikation af kompromitterede aktiver. Mange trusselsaktører spreder sig hurtigt på tværs af systemer og miljøer, og organisationen skal derfor løbende kortlægge angrebets scope.

Dette kan omfatte:

- Kompromitterede endpoints
- Privilegerede konti
- Cloud workloads
- Databaser
- Virtuelle miljøer
- Backup-systemer
- Netværkssegmenter
- Integrationsplatforme

## Koordinering af tiltag

Parallelt med analysen iværksættes containment-tiltag med det formål at begrænse skadeomfang og forhindre yderligere spredning.

Containment kan opdeles i:

| Type | Formål |
|---|---|
| Kortsigtet containment | Hurtig begrænsning af angrebet |
| Langsigtet containment | Stabilisering indtil udryddelse |

Eksempler på containment-tiltag inkluderer:

- Isolation af kompromitterede endpoints
- Segmentering af netværk
- Blokering af IP-adresser og domæner
- Deaktivering af kompromitterede konti
- Lukning af sårbare services
- Blokering af malwarekommunikation
- Begrænsning af administrative rettigheder
- Midlertidig nedlukning af systemer

Containment kræver ofte vanskelige afvejninger mellem:

- Sikkerhed
- Drift
- Forretningskontinuitet
- Evidenssikring
- Brugeroplevelse

Eksempelvis kan hurtig isolation af et system begrænse angrebet, men samtidig påvirke kritiske forretningsfunktioner eller ødelægge værdifuld evidens. Organisationen bør derfor gennemføre risikobaserede vurderinger før større containment-beslutninger. Under containment-fasen er løbende kommunikation afgørende. Incident teamet skal koordinere tæt med:

- Drift
- Systemejere
- Netværksteams
- Cloud administrators
- Sikkerhedsteams
- Ledelse
- Leverandører
- Forretningsenheder

Der bør etableres:

- Faste statusmøder
- Situationsrapporter
- Beslutningslogs
- Fælles dashboards
- Eskalationskanaler

Når hændelsen er stabiliseret, påbegyndes udryddelse-fasen. Formålet med udryddelse er at fjerne den underliggende årsag til kompromitteringen og sikre, at aktøren ikke længere har adgang til miljøet.

Udryddelse kan blandt andet omfatte:

- Patching af sårbarheder
- Fjernelse af malware
- Geninstallation af systemer
- Nulstilling af adgangskoder (Credential resets)
- Rotation af certifikater og nøgler
- Fjernelse af persistence-mekanismer
- Lukning af kompromitterede integrationspunkter
- Opdatering af firewall-regler

Eksempler på udryddelse-aktiviteter:

| Aktivitet | Formål |
|---|---|
| Password reset | Fjerne kompromitterede credentials |
| Malware removal | Eliminere skadevare |
| Patching | Lukke sårbarheder |
| System rebuild | Sikre rent miljø |
| Hardening | Reducere fremtidig risiko |
| Access review | Verificere privilegier |

Udryddelse må først anses som fuldført, når organisationen med rimelig sikkerhed vurderer, at:

- Kompromitteringen er fjernet
- Trusselaktøren ikke længere har adgang
- Persistence-mekanismer er elimineret
- Sårbarheder er lukket
- Nye kompromitteringer ikke observeres

I hele analyse- og responsfasen skal organisationen løbende vurdere juridiske, kontraktuelle og regulatoriske forhold.

Dette kan blandt andet omfatte:

- GDPR-vurderinger
- Databrudsrapportering
- Kontraktuelle underretningskrav
- Cyberforsikringskrav
- Krav fra myndigheder
- Bevisbevarelse
- Samarbejde med politi eller CERT

Samtidig skal organisationen sikre tilstrækkelig dokumentation af alle handlinger og beslutninger.

Dokumentationen bør omfatte:

- Tidslinjer
- Tekniske fund
- Beslutninger
- Containment-tiltag
- Kommunikation
- Ændringer i systemer
- Evidenshåndtering
- Godkendelser

Dette er afgørende for:

- Audit og compliance
- Efterfølgende analyse
- Juridisk dokumentation
- Lessons learned
- Forbedring af playbooks og kontroller

Analyse- og responsfasen er derfor den mest intensive del af incident management-processen, hvor tekniske analyser, operative beslutninger, koordinering og forretningsmæssige hensyn skal balanceres under tidspres og usikkerhed.

ISO/IEC 27035-3 beskriver denne fase gennem processer for analyse, containment, udryddelse (eradication) og recovery samt operationel koordinering under hændelser. ISO/IEC 27035-1 placerer fasen som en del af “Respond”-aktiviteterne i incident management-processen, mens NIST SP 800-61 fremhæver betydningen af hurtig analyse, containment og udryddelse for at reducere hændelsens samlede impact.

---