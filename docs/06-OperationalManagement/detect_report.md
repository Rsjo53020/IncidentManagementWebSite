# Detektion og registrering fasen - Yderligere detaljer

Detektion og registreringsfasen har til formål at identificere potentielle sikkerhedshændelser så tidligt som muligt og sikre, at relevante informationer dokumenteres systematisk og konsistent. Tidlig detektion er afgørende for at begrænse skadeomfang, reducere responstid og forbedre organisationens muligheder for containment og recovery.

---

## Detektionskilder og mekanismer

Sikkerhedshændelser kan identificeres gennem en lang række tekniske, organisatoriske og eksterne kilder. En moden incident management kapabilitet baserer sig derfor ikke på en enkelt overvågningsmekanisme, men på et samlet detektionsøkosystem, hvor flere datakilder og overvågningsformer understøtter hinanden.

Typiske detektionskilder inkluderer:

| Kilde | Formål |
|---|---|
| SIEM-platforme | Korrelation og analyse af events |
| EDR/XDR | Endpoint-baseret detektion |
| IDS/IPS | Netværksbaseret detektion |
| Brugermeldinger | Observationer fra medarbejdere |
| Driftsalarmer | Fejl og ustabilitet i systemer |
| Vulnerability scanning | Identifikation af sårbarheder |
| Threat Intelligence | Kendte Indikatorer for kompromittering (IOC’er) og trusselsdata |
| Cloud telemetry | Overvågning af cloud-miljøer |
| Auditlogs | Overvågning af adgang og ændringer |
| Tredjepartsvarsler | Leverandører, CERT’er og myndigheder |

Detektionsmekanismer bør understøtte både:

- Kendte angrebsmønstre
- Uregelmæssigheder detektion
- Adfærdsanalyse
- Korrelation mellem hændelser
- Automatiseret alarmering
- Manuel rapportering

---

## Organisationen nær detektion
Detektion handler ikke kun om teknologi, men også om at skabe en kultur, hvor medarbejdere og driftspersonale er opmærksomme på sikkerhedshændelser og føler sig trygge ved at rapportere dem. Organisationen bør derfor etablere klare kanaler og procedurer for manuel rapportering af hændelser, så potentielle sikkerhedshændelser kan opdages tidligt, selv før automatiske systemer registrerer dem.


Organisationen bør derfor definere overvågningsregler baseret på det aktuelle trusselsbillede og organisationens kritiske aktiver.

Eksempler på detektionsscenarier kan være:

- Flere mislykkede loginforsøg på meget kort tid
- Login fra geografisk usædvanlige lokationer
- Privilege escalation
- Deaktivering af sikkerhedsværktøjer
- Usædvanlig netværkstrafik
- Datamængder eksfiltreret til eksterne destinationer
- Ændringer i kritiske systemkonfigurationer

SIEM-platforme spiller ofte en central rolle i detektionsfasen ved at samle og korrelere logs fra forskellige systemer. SIEM-løsninger kan identificere komplekse ved hjælp af regler og automatiseret analyse, som ellers ville være vanskelige at opdage manuelt.

### Manuel rapportering af hændelser

Organisationen bør samtidig understøtte manuel rapportering af hændelser. Sikkerhedshændelser kan opdages af medarbejdere eller driftspersonale før automatiske systemer registrerer dem.

Der bør derfor være etableret:

- Simpele rapporteringskanaler
- Sikkerhedsmailbokse
- Hotline eller servicedesk
- Phishing report-knapper
- Procedurer for akut eskalering

Brugere skal vide:

- **Hvad** der skal rapporteres
- **Hvor** det skal rapporteres
- **Hvorledes** noget anses som værende kritisk
- **Jeg/Vi** hvem er Point of contact (POC)

---

## Registrering og dokumentation

Når en potentiel hændelse identificeres, skal den registreres og dokumenteres systematisk. Formålet med registreringen er at skabe et ensartet grundlag for analyse, prioritering og efterfølgende håndtering.

Registreringen bør foretages i et centralt ticketing- eller case management-system for at sikre:

- Sporbarhed
- Audit trail
- Dokumentation
- Eskalering
- Koordinering
- Rapportering

---

Organisationen bør anvende standardiserede meldingsblanketter eller digitale formularer med faste informationsfelter.

Minimumsinformation bør som udgangspunkt omfatte:

| Element | Beskrivelse |
|---|---|
| Når | Tidspunkt for observation eller detektion |
| Hvad | Berørte systemer, services eller aktiver |
| Hvor | Kilde til observationen |
| Hvorledes | Indledende observationer og symptomer |
| Jeg/Vi | Handling på det observerede. Foreløbig vurdering af alvorlighed. Ansvarlig rapportør |

Derudover vil en moden registreringsproces ofte inkludere:

- Ticket-ID
- Hændelsestype
- Berørte brugere
- Geografisk placering
- Tilknyttede Indikatorer for kompromittering (IoC'er)
- Påvirkning på drift
- Forretningsmæssig konsekvens
- Regulatoriske forhold
- Relaterede hændelser
- Vedhæftede logs eller screenshots

Eksempel på registrering:

| Felt | Eksempel |
|---|---|
| Når | 2026-05-08 08:43 UTC |
| Hvad | Microsoft 365 / Entra ID  |
| Hvor | SIEM-alert - Mistænkelig loginaktivitet |
| Hvorledes | Flere mislykkede loginforsøg efterfulgt af succesfuld MFA på finance-admin@firma.dk.|
| Jeg/Vi | Incident Manager notificeret, Alvorlighed = Høj. SOC Analyst – Initial triage. |


Registreringen danner grundlaget for den videre triage og vurdering. Hvis data registreres inkonsistent eller mangelfuldt, vil det ofte medføre forsinkelser, fejlvurderinger og reduceret kvalitet i den efterfølgende håndtering.

Organisationen bør derfor definere:

- Krav til dokumentationskvalitet
- Obligatoriske felter
- Tidskrav til registrering
- Standardiserede kategorier
- Alvorlighedsskala
- Dataklassifikation
- Workflows for eskalering

Det er samtidig vigtigt, at registreringen sker hurtigt og proportionelt. Dokumentationskrav må ikke forsinke containment eller eskalering af kritiske hændelser, men der skal stadig sikres tilstrækkelig sporbarhed til senere analyse og audit.

---

## Afsluttende bemærkninger

Detektions- og registreringsfasen fungerer derfor som indgangen til hele incident management processen. Kvaliteten af denne fase har direkte betydning for organisationens evne til hurtigt at forstå, prioritere og håndtere hændelser korrekt. ISO/IEC 27035-1 beskriver denne fase som “Detect and Report”, hvor hændelser identificeres, registreres og rapporteres systematisk som grundlag for den videre incident management proces. ISO/IEC 27035-3 uddyber de operationelle aktiviteter omkring monitorering, detektion, notifikation og triage, herunder krav til incident notification, analyse og eskalering.

---
