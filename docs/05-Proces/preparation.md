# Forberedelsefasen - Yderligere detaljer
Forberedelsesfasen har til formål at sikre, at organisationen er teknisk, operationelt og organisatorisk klar til at opdage, analysere og håndtere sikkerhedshændelser, før de udvikler sig til alvorlige incidents eller kriser. Formålet med fasen er at skabe den nødvendige synlighed, standardisering og praktiske robusthed, så organisationen kan reagere hurtigt og kontrolleret under en hændelse.


## Logning og overvågning

Et centralt element i forberedelsesfasen er etableringen af relevante logkilder og overvågningsmekanismer. Organisationen skal sikre tilstrækkelig synlighed i både interne og eksterne systemer for at kunne identificere mistænkelig aktivitet, sikkerhedsbrud og afvigelser fra normal billedet.

Det er afgørende at have en klar forståelse af, hvilke logkilder der er kritiske for detektion og analyse, samt at have etableret processer for central logopsamling, tidsstempling og retention. Overvågningsregler og alarmeringsmekanismer skal være konfigureret til at understøtte både detektion af kendte trusler og identifikation af uregelmæssigheder. Organisationen bør definere en standardiseret tilgang til, hvilke logs der indsamles, hvordan de lagres, hvem der har adgang til dem, samt hvor længe de opbevares.

En moden logstrategi omfatter typisk flere forskellige logtyper:

| Logtype | Formål | Eksempler |
|---|---|---|
| Systemlogs | Overvågning af operativsystemer og servere | Windows Event Logs, Linux syslog |
| Sikkerhedslogs | Identifikation af sikkerhedshændelser | Login-forsøg, privilegieændringer, MFA-events |
| Applikationslogs | Overvågning af applikationers adfærd | Webapplikationer, databaser, API-kald |
| Netværkslogs | Analyse af netværkstrafik | Firewall-logs, VPN-logs, DNS-logs |
| Performancelogs | Overvågning af stabilitet og kapacitet | CPU, RAM, latency, svartider |

Systemlogs giver indsigt i operativsystemers tilstand og aktiviteter. Disse logs er centrale ved fejlfinding, stabilitetsanalyse og identifikation af unormal systemadfærd. Eksempler kan være:

- Systemgenstarter
- Servicefejl
- Driverproblemer
- Brugerlogins
- Ændringer i systemkonfiguration

Sikkerhedslogs fokuserer specifikt på hændelser relateret til informationssikkerhed. Disse logs anvendes til at opdage kompromittering, privilegieeskalering og mistænkelig aktivitet.

Eksempler inkluderer:

- Failed logins
- MFA failures
- Ændringer i privilegier
- Oprettelse af administrator-konti
- Ændringer i gruppepolitikker
- Endpoint Detection and Response (EDR) / Extended Detection and Response (XDR)
- Antivirus-events

Applikationslogs giver synlighed i forretningsapplikationer og services. Disse logs er ofte afgørende ved analyse af datalæk, misbrug af API’er eller fejl i forretningskritiske systemer.

Eksempler kan være:

- API-kald
- Databaseforespørgsler
- Fejlmeddelelser
- Ændringer i brugerdata
- Integrationsfejl
- Transaktionslogs

Netværkslogs giver mulighed for at identificere kommunikationsmønstre, lateral movement og netværksbaserede angreb.

Typiske netværkslogs omfatter:

- Firewall-events
- Intrusion Detection and Prevention (IDS) / Intrusion Prevention System (IPS) alerts
- Domain Name System (DNS) requests
- Proxy-logs
- Virtuelt Privat Netværk (VPN) forbindelser
- Cloud network telemetry

Performancelogs anvendes primært til driftsovervågning, men kan også understøtte sikkerhedsovervågning ved at identificere afvigelser og belastningsmønstre.

Dette kan eksempelvis være:

- CPU-udnyttelse
- Memory usage
- Svartider
- Netværkslatency
- Oppetid
- Kapacitetsforbrug

Organisationen bør samtidig definere krav til:

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


Organisationen bør desuden definere overvågningsregler baseret på trusselsbilledet. Eksempler kan være:

- Flere failed logins på kort tid
- Login fra geografisk usædvanlige lokationer
- Privilegieeskalering
- Store datamængder eksfiltreret
- Uautoriserede PowerShell-kørsler
- Kommunikation til kendte IOC’er
- Deaktivering af sikkerhedsværktøje

En effektiv logstrategi er derfor ikke alene en teknisk disciplin, men en central del af organisationens samlede detektions- og analysekapabilitet.

---

## Playbooks og øvelser

For at sikre ensartet og effektiv respons bør organisationen udvikle playbooks for typiske hændelsestyper. Playbooks fungerer som operationelle vejledninger, der beskriver standardiserede responsforløb og beslutningspunkter.

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
- Containment-muligheder
- Kommunikationskrav
- Skalationspunkter
- Beslutningskriterier
- Evidenskrav
- Recovery-procedurer
- Lessons learned-krav

Organisationen skal derudover gennemføre løbende træning og øvelser for at sikre, at processer og samarbejde fungerer i praksis. Incident management er i høj grad en organisatorisk disciplin, hvor samarbejde, kommunikation og beslutningstagning er afgørende.

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

Teknologisk skal organisationen have etableret de nødvendige værktøjer til sagsstyring, kommunikation og koordinering. Dette omfatter typisk:

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

Organisationen skal samtidig etablere relationer og aftaler med eksterne parter. Mange hændelser kræver samarbejde på tværs af leverandører, myndigheder og specialister.

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

### Designprincipper

Gode playbooks er:

- Korte nok til at bruges under pres
- Præcise nok til at reducere tvivl
- Fleksible nok til at håndtere variationer
- Opdaterede efter øvelser og hændelser

---

## Afsluttende bemærkninger

Forberedelsesfasen handler derfor ikke alene om teknologi, men om at skabe en samlet organisatorisk robusthed, hvor mennesker, processer, governance og tekniske kapabiliteter fungerer integreret og kan aktiveres hurtigt under en hændelse.

ISO/IEC 27035-2 beskriver denne fase som etableringen af organisationens samlede incident response capability med fokus på planlægning, Incident Management Teams, relationer, teknisk støtte, awareness og øvelser. ISO/IEC 27035-3 uddyber de operationelle aktiviteter omkring monitorering, detektion, triage, analyse og containment. ISO/IEC 27035-4 understreger samtidig vigtigheden af koordinering, informationsdeling og samarbejde på tværs af organisationer.

---