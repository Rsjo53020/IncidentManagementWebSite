# Triage- og vurderingsfasen - Yderligere detaljer

Triage- og vurderingsfasen har til formål hurtigt at skabe situationsforståelse og danne grundlag for de første kritiske beslutninger under en potentiel sikkerhedshændelse. Formålet med fasen er at afgøre hændelsens karakter, omfang, alvor og forretningsmæssige konsekvenser, så organisationen kan prioritere indsatsen korrekt og aktivere de nødvendige ressourcer.

Denne fase fungerer som bindeled mellem detektion og aktiv respons. Hvis triage udføres mangelfuldt, kan organisationen risikere enten at overreagere på mindre hændelser eller undervurdere alvorlige kompromitteringer.

Det første skridt i fasen er at validere, om der faktisk er tale om en sikkerhedshændelse. Mange alarmer og observationer viser sig i praksis at være:

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
| Correlation analysis | Sammenkæde relaterede events |
| Brugerinterview | Afklare observeret adfærd |

Når hændelsen er valideret, gennemføres den egentlige triage. Triage handler om hurtigt at prioritere hændelsen og skabe et operationelt overblik.

Typiske spørgsmål i triagefasen inkluderer:

- Hvad er kompromitteret?
- Hvilke systemer er berørt?
- Er hændelsen stadig aktiv?
- Hvor hurtigt spreder hændelsen sig?
- Er kritiske forretningsfunktioner påvirket?
- Er følsomme data kompromitteret?
- Er der regulatoriske konsekvenser?
- Er der risiko for offentlig eksponering?

Hændelsen klassificeres herefter ud fra organisationens definerede klassifikations- og alvorlighedsskala.

Eksempel på klassifikation:

| Klassifikation | Eksempel |
|---|---|
| Malware | Trojan, ransomware, spyware |
| Unauthorized access | Kompromitteret konto |
| Data breach | Uautoriseret adgang til data |
| Insider threat | Misbrug af privilegeret adgang |
| Denial of Service | Overbelastningsangreb |
| Supply chain compromise | Kompromitteret leverandør |

Alvorlighedsvurderingen tager typisk udgangspunkt i:

- Teknisk alvor
- Påvirkning af drift
- Påvirkning af **fortrolighed**
- Påvirkning af **integritet**
- Påvirkning af **tilgængelighed**
- Regulatorisk risiko
- Omdømmerisiko
- Kritikalitet af berørte systemer

Et eksempel på Alvorlighedsskala kan være:

| Alvorlighed | Beskrivelse |
|---|---|
| Kritisk | Kritisk påvirkning af forretning eller sikkerhed |
| Høj | Betydelig påvirkning med behov for hurtig handling |
| Medium | Begrænset påvirkning |
| Lav | Minimal påvirkning eller observation |

Alvorlighedsvurderingen er central, fordi den direkte påvirker:

- Responsestid
- Eskalationsniveau
- Involvering af ledelse
- Ressourceallokering
- Kommunikationsbehov
- Juridiske vurderinger

Parallelt med den tekniske analyse skal organisationen vurdere den forretningsmæssige påvirkning. To hændelser med samme tekniske karakter kan have vidt forskellige konsekvenser afhængigt af de berørte systemer og processer.

Forretningsmæssige vurderinger kan blandt andet omfatte:

- Påvirkning af kritiske services
- Kundepåvirkning
- Produktionstab
- Økonomiske konsekvenser
- Compliance-risici
- Databeskyttelseskrav
- Risiko for presseomtale
- Påvirkning af samarbejdspartnere

Eksempel:

| Hændelse | Teknisk alvorlighed | Forretningsmæssig impact |
|---|---|---|
| Malware på testserver | Medium | Lav |
| Kompromitteret ERP-system | Medium | Kritisk |
| Phishing mod enkeltbruger | Lav | Lav |
| Databrud i kundedatabase | Høj | Kritisk |

På baggrund af triage og vurdering træffes de første operative beslutninger.

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

En vigtig del af fasen er vurdering af behovet for evidenssikring og forensic preservation. Hvis der er risiko for juridiske eller regulatoriske konsekvenser, skal organisationen hurtigt sikre relevante spor og undgå destruktion af data.

Dette kan inkludere:

- Memory dumps
- Disk images
- Logudtræk
- Netværkscaptures
- Snapshots af cloudmiljøer
- Sikring af maildata

Organisationen skal samtidig balancere behovet for hurtig containment med behovet for bevarelse af beviser. For aggressiv containment kan i nogle tilfælde ødelægge vigtig evidens eller skjule angriberens aktivitet.

I kritiske hændelser kan triagefasen udvikle sig hurtigt og kræve løbende revurdering af hændelsen. Alvorlighed og impact kan ændre sig markant, efterhånden som flere informationer bliver tilgængelige.

Der bør derfor etableres:

- Løbende situationsopdateringer
- Dynamisk alvorlighedsvurdering
- Beslutningslogs
- Statusrapportering
- Eskalationsmøder
- Fælles operationelt billede

---

## Afsluttende bemærkninger

Triage- og vurderingsfasen er derfor central for organisationens samlede incident management-kapabilitet. Det er i denne fase, organisationen skaber det nødvendige beslutningsgrundlag for containment, recovery og videre håndtering.

ISO/IEC 27035-1 beskriver denne fase at hændelser vurderes og klassificeres som grundlag for beslutninger om respons og eskalering. ISO/IEC 27035-3 understøtter triage-, analyse- og vurderingsaktiviteterne gennem operationelle processer for analyse, containment og prioritering, mens NIST SP 800-61 fremhæver betydningen af hurtig analyse, prioritering og koordinering for effektiv incident response.

---
