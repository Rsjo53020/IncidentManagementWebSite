# Forberedelsefasen - Yderligere detaljer

Forberedelsesfasen har til formål at sikre, at organisationen er teknisk, operationelt og organisatorisk klar til at opdage, analysere og håndtere sikkerhedshændelser, før de udvikler sig til alvorlige incidents eller kriser. Formålet med fasen er at skabe den nødvendige synlighed, standardisering og praktiske robusthed, så organisationen kan reagere hurtigt og kontrolleret under en hændelse.


## Logning

Et centralt element i forberedelsesfasen er etableringen af relevante logkilder og overvågningsmekanismer. Organisationen skal sikre tilstrækkelig synlighed i både interne og eksterne systemer for at kunne identificere mistænkelig aktivitet, sikkerhedsbrud og afvigelser fra normal billedet. Det er afgørende at have en klar forståelse af, hvilke logkilder der er kritiske for detektion og analyse, samt at have etableret processer for central logopsamling, tidsstempling og retention. Overvågningsregler og alarmeringsmekanismer skal være konfigureret til at understøtte både detektion af kendte trusler og identifikation af uregelmæssigheder. Organisationen bør definere en standardiseret tilgang til, hvilke logs der indsamles, hvordan de lagres, hvem der har adgang til dem, samt hvor længe de opbevares. En moden logstrategi omfatter typisk flere forskellige logtyper:

| Logtype | Formål | Eksempler |
|---|---|---|
| Systemlogs | Overvågning af operativsystemer og servere | Windows Event Logs, Linux syslog |
| Sikkerhedslogs | Identifikation af sikkerhedshændelser | Login-forsøg, privilegieændringer, MFA-events |
| Applikationslogs | Overvågning af applikationers adfærd | Webapplikationer, databaser, API-kald |
| Netværkslogs | Analyse af netværkstrafik | Firewall-logs, VPN-logs, DNS-logs |
| Performancelogs | Overvågning af stabilitet og kapacitet | CPU, RAM, latency, svartider |


### Systemlogs

Systemlogs er essentielle for at kunne identificere tekniske fejl, stabilitetsproblemer og unormal adfærd i systemer og servere. De giver indsigt i operativsystemers tilstand og aktiviteter, og kan afsløre både tekniske problemer og sikkerhedsrelaterede hændelser. Systemlogs er ofte afgørende ved fejlfinding, stabilitetsanalyse og identifikation af unormal systemadfærd. 

Eksempler kan være:
- Systemgenstarter
- Servicefejl
- Driverproblemer
- Brugerlogins
- Ændringer i systemkonfiguration

### Sikkerhedslogs

Sikkerhedslogs er afgørende for at kunne identificere og analysere sikkerhedshændelser. Disse logs giver synlighed i aktiviteter, der kan indikere kompromittering, misbrug eller trusler mod organisationens informationssikkerhed. Sikkerhedslogs er ofte de første indikatorer på, at en hændelse er ved at udvikle sig, og de er derfor centrale i både detektion og triage.

Eksempler inkluderer:
- Failed logins
- MFA failures
- Ændringer i privilegier
- Oprettelse af administrator-konti
- Ændringer i gruppepolitikker
- Endpoint Detection and Response (EDR) / Extended Detection and Response (XDR)
- Antivirus-events

### Applikationslogs

Applikationslogs er afgørende for at kunne identificere unormal adfærd i forretningsapplikationer og services. De giver synlighed i, hvordan applikationer interagerer med brugere, data og andre systemer, og kan afsløre både tekniske fejl og sikkerhedsrelaterede hændelser.

Eksempler kan være:
- API-kald
- Databaseforespørgsler
- Fejlmeddelelser
- Ændringer i brugerdata
- Integrationsfejl
- Transaktionslogs

### Netværkslogs

Netværkslogs er essentielle for at kunne identificere kommunikationsmønstre, lateral movement og netværksbaserede angreb. De giver indsigt i, hvordan data bevæger sig gennem organisationens netværk og kan afsløre mistænkelig trafik, uautoriserede forbindelser eller kommunikation med kendte ondsindede IP-adresser.

Typiske netværkslogs omfatter:
- Firewall-events
- Intrusion Detection and Prevention (IDS) / Intrusion Prevention System (IPS) alerts
- Domain Name System (DNS) requests
- Proxy-logs
- Virtuelt Privat Netværk (VPN) forbindelser
- Cloud network telemetry

### Performancelogs

Performancelogs er vigtige for at kunne overvåge stabilitet, kapacitet og ydeevne i både infrastruktur og applikationer. De kan hjælpe med at identificere tekniske problemer, flaskehalse eller unormal belastning, som kan være indikatorer på en igangværende hændelse eller forløbere til en hændelse.

Dette kan eksempelvis være:
- CPU-udnyttelse
- Memory usage
- Svartider
- Netværkslatency
- Oppetid
- Kapacitetsforbrug

### logstrategi

En effektiv logstrategi er derfor ikke alene en teknisk disciplin, men en central del af organisationens samlede detektions- og analysekapabilitet. Det kræver både tekniske løsninger, organisatoriske processer og løbende vedligeholdelse for at sikre, at logdata er tilgængelige, pålidelige og anvendelige i incident management-processen. ISO/IEC 27035-1 understreger vigtigheden af at etablere en logstrategi som en del af forberedelsesfasen, mens ISO/IEC 27035-2 uddyber kravene til logning, overvågning og detektion. NIST CSF 2.0 placerer logning som en central del af detektionsfunktionen, og ISO 22320 fremhæver betydningen af at have tilstrækkelig synlighed for at kunne opnå fælles situationsforståelse under hændelseshåndtering.

Organisationen bør derfor definere krav til:
- Hvilke logs der er kritiske
- Central logopsamling
- Tidsstempling og NTP-synkronisering
- Logintegritet
- Kryptering af logdata
- Retention-perioder
- Backup af logs
- Adgangskontrol
- Monitorering
- Alarmeringsmekanismer


Logs bør som udgangspunkt centraliseres i en Security information and event management (SIEM) platforme eller tilsvarende løsning, så events kan korreleres på tværs af systemer og miljøer. Dette gør det muligt hurtigere at identificere komplekse angrebsmønstre og reducere tiden fra kompromittering til detektion.

### Overvågningsregler og alarmering 

Overvågningsregler og alarmeringsmekanismer skal være konfigureret til at understøtte både detektion af kendte trusler og identifikation af uregelmæssigheder. Organisationen bør desuden definere overvågningsregler baseret på trusselsbilledet. 

Eksempler kan være:
- Flere failed logins på kort tid
- Login fra geografisk usædvanlige lokationer
- Privilegieeskalering
- Store datamængder eksfiltreret
- Uautoriserede PowerShell-kørsler
- Kommunikation til kendte IOC’er
- Deaktivering af sikkerhedsværktøje


---

## Playbooks og øvelser

For at sikre ensartet og effektiv respons bør organisationen udvikle egne playbooks for typiske hændelsestyper. Playbooks fungerer som operationelle vejledninger, der beskriver standardiserede responsforløb og beslutningspunkter. De hjælper med at sikre, at alle involverede parter har en klar forståelse af, hvad der skal gøres under en hændelse, og reducerer risikoen for fejl og forsinkelser. Playbooks bør være tilpasset organisationens specifikke risikoprofil, trusselsbillede og tekniske miljø, og de bør løbende opdateres baseret på erfaringer fra øvelser og reelle hændelser.

Typiske playbooks kan omfatte:

| Scenario | Formål |
|---|---|
| Ransomware | Isolation, containment og recovery |
| Phishing | Analyse, blokering og brugerhåndtering |
| Insider threat | Undersøgelse og adgangskontrol |
| Malware outbreak | Segmentering og eradication |
| Compromised account | Credential reset og analyse |
| Data breach | Juridisk vurdering og rapportering |
| DDoS | Trafikfiltrering og koordinering |
| Supply chain incident | Leverandørkoordinering |

En playbook bør typisk indeholde:
- Formål og scope
- Trigger- og indgangskriterier
- Alvorlighedsskala
- Ansvarlige roller med tilhørende ansvarsområder
- Tekniske indledende handlinger
- Nødvendige logkilder og beviser
- Containment muligheder
- Kommunikationskrav
- Skalationspunkter
- Beslutningskriterier
- Evidenskrav
- Recovery procedurer
- Lessons learned krav

---

### Øvelser - Train as you fight

Organisationen skal derudover gennemføre løbende træning og øvelser for at sikre, at processer og samarbejde fungerer i praksis. Øvelserne skal ligge sig så tæt op af deres virkelige. Incident management er i høj grad en organisatorisk disciplin, hvor samarbejde, kommunikation og beslutningstagning er afgørende.

Øvelser kan blandt andet omfatte:
- Tabletop exercises
- Tekniske simulationsøvelser
- Ransomware-scenarier
- Phishing-kampagner
- Kommunikationsøvelser
- Recovery-tests

Øvelser bør evaluere:
- Responstid
- Beslutningsprocesser
- Rolleforståelse
- Samarbejde mellem teams
- Kvaliteten af dokumentation
- Kommunikationsflow
- Tekniske kapabiliteter

---

## Teknisk forberedelse

Teknisk forberedelse handler ikke kun om at have de rigtige værktøjer og systemer på plads, men også om at sikre, at de er korrekt konfigureret, integreret og vedligeholdt. Det omfatter både detektion, analyse og responsværktøjer, samt de tekniske processer og procedurer, der understøtter incident management. Dette omfatter typisk:

| Funktion | Eksempel |
|---|---|
| Ticketing | Jira, ServiceNow |
| SIEM | Microsoft Sentinel, Splunk |
| EDR/XDR | Defender XDR, CrowdStrike |
| Kommunikation | Teams, Slack, Signal |
| Dokumentation | Wiki, SharePoint |
| Forensics | Velociraptor, Forensic Toolkit (FTK) |
| Threat Intelligence | Malware Information Sharing Platform (MISP), Trusted Automated eXchange of Intelligence Information (TAXII) /Structured Threat Information Expression (STIX) |
| Case Management | Incident tracking-systemer |

Værktøjerne skal understøtte:
- Dokumentation af hændelser
- Sporbarhed
- Audit trail
- Samarbejde
- Eskalation
- Rapportering
- Evidenshåndtering

---

## Aftaler og relationer

Forberedelsesfasen handler også om at etablere de nødvendige relationer og aftaler med både interne og eksterne parter. Incident management er sjældent en isoleret aktivitet, og det kræver ofte samarbejde på tværs af organisationen og med eksterne interessenter for at kunne håndtere en hændelse effektivt. Dette kan omfatte alt fra tekniske teams og ledelse til leverandører, myndigheder og specialister. Organisationen bør derfor etablere klare rapporteringsveje, eskalationsmekanismer og samarbejdsaftaler, så alle ved, hvordan de skal agere under en hændelse, og hvem de skal kontakte, når en hændelse opstår.

Eksterne relationer kan omfatte:
- Managed Security Service Provider (MSSP)/Security Operations Center (SOC)-leverandører
- Cloud providers
- Internetudbydere
- Cyberforsikring
- Eksterne forensics-specialister
- Juridiske rådgivere
- Computer Emergency Response Team (CERT)/ Computer Security Incident Response Team (CSIRT) -enheder
- Politik og myndigheder
- Kommunikationsbureauer

Der bør være etableret:
- Kontaktveje
- Service Level Agreement (SLA)
- Non-Disclosure Agreement (NDA)
- Eskalationsprocedurer
- Ansvarsfordeling
- Kommunikationskrav
- Krav til responstid

---

### Eskalation og kommunikation

Et vigtigt element i forberedelsesfasen er etablering af kriterier for eskalering til kriseledelse. Ikke alle sikkerhedshændelser udvikler sig til en krise, men organisationen skal på forhånd definere, hvornår ledelsen involveres.

Eksempler på eskalationskriterier kan være:
- Kritisk driftsnedbrud
- Kompromittering af kritiske systemer
- Påvirkning af kunder
- Regulatoriske konsekvenser
- Datalæk
- Risiko for medieomtale
- National sikkerhedspåvirkning
- Ransom demands

Organisationen skal samtidig definere processer for ekstern kommunikation. Dette omfatter:
- Pressehåndtering
- Kundekommunikation
- Myndighedsrapportering
- Kommunikation til samarbejdspartnere
- Juridisk godkendelse af budskaber
- Kommunikation på sociale medier

Kommunikationsplaner bør indeholde:
- Godkendelsesflow
- Talspersoner
- Kontaktlister
- Templates
- Krisekommunikationsprincipper
- Timing og ansvar

---

## Keep It Simple, Stupid (KISS)

Designprincip for playbooks og procedurer i incident management. Det handler om at holde processerne så enkle og intuitive som muligt, så de kan anvendes effektivt under pres. Komplekse eller overfyldte playbooks kan føre til forvirring, fejl og forsinkelser, når det gælder. Derfor bør playbooks fokusere på de mest kritiske handlinger og beslutningspunkter, og undgå unødvendige detaljer eller komplekse flowcharts. En simpel og klar playbook øger sandsynligheden for, at den bliver fulgt korrekt, og at organisationen kan reagere hurtigt og effektivt under en hændelse.

Gode playbooks er:
- Korte nok til at bruges under pres
- Præcise nok til at reducere tvivl
- Fleksible nok til at håndtere variationer
- Opdaterede efter øvelser og hændelser

---

## Afsluttende bemærkninger

Forberedelsesfasen er derfor ikke blot en administrativ opgave, men selve fundamentet for organisationens evne til at håndtere sikkerhedshændelser effektivt. Det kræver en holistisk tilgang, hvor tekniske kapabiliteter, organisatoriske processer, governance strukturer og samarbejdsaftaler fungerer integreret for at skabe en robust incident management capability. ISO/IEC 27035-2 beskriver denne fase som etableringen af organisationens samlede incident response capability med fokus på planlægning, Incident Management Teams, relationer, teknisk støtte, awareness og øvelser. ISO/IEC 27035-3 uddyber de operationelle aktiviteter omkring monitorering, detektion, triage, analyse og containment. ISO/IEC 27035-4 understreger samtidig vigtigheden af koordinering, informationsdeling og samarbejde på tværs af organisationer.

---

