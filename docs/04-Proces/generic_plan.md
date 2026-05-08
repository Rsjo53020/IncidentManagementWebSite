# Generisk Incident Management-plan

## Formål

Formålet med denne incident management-plan er at etablere en struktureret, reproducerbar og risikobaseret tilgang til håndtering af sikkerhedshændelser. Planen skal sikre, at organisationen effektivt kan identificere, analysere, begrænse og genoprette efter hændelser samt minimere forretningsmæssig påvirkning og understøtte kontinuerlig forbedring.

Planen er designet til at kunne anvendes på tværs af teknologier, organisatoriske enheder og hændelsestyper og skal understøtte både operationel respons og ledelsesmæssig beslutningstagning.

---

## Fase FØR – Styringsgrundlag og governance

En effektiv hændelseshåndtering forudsætter et klart styringsgrundlag. Organisationen skal derfor etablere og vedligeholde en samlet governance-struktur for incident management.

Dette omfatter en godkendt incident response policy, som fastlægger formål, scope og ledelsesmæssig forankring. Derudover skal der foreligge en incident management-plan, som operationaliserer policyen og beskriver processer, roller og ansvar.

Organisationen skal definere en ensartet klassifikation af hændelsestyper samt en severity-model, der gør det muligt at vurdere hændelsers alvor og prioritere indsatsen. Samtidig skal der være etableret klare rapporteringsveje, eskalationsmekanismer og opdaterede kontaktlister.

Endelig skal der fastsættes minimumskrav til logning, evidenshåndtering og dokumentation for at sikre sporbarhed, efterlevelse og mulighed for efterfølgende analyse.


## Fase FØR – Forberedelse (Plan & Prepare)

Forberedelsesfasen har til formål at sikre organisatorisk og teknisk beredskab før en hændelse opstår.

Organisationen skal definere roller og ansvar, herunder etablering af et team (incident response team - IRT) med klare mandat- og ansvarsområder. Der skal etableres relevante logkilder og overvågningsmekanismer, så hændelser kan opdages rettidigt.

Der bør udvikles playbooks for typiske scenarier (fx ransomware, phishing, insider threats), som beskriver standardiserede responsforløb. Derudover skal organisationen gennemføre øvelser og træning for at sikre, at processer og samarbejde fungerer i praksis.

Teknologisk skal der være værktøjer til ticketing, sagsstyring og kommunikation, og der skal være etableret aftaler med leverandører og eksterne parter, herunder krav til respons og samarbejde.

Endelig skal der være defineret kriterier for, hvornår en hændelse eskaleres til kriseledelse, samt hvordan ekstern kommunikation håndteres.


## Fase FØR – Detektion og registrering (Detect & Report)

Hændelser kan identificeres gennem en række forskellige kilder, herunder Security Information and Event Management- (SIEM) og Endpoint Detection and Response (EDR) -systemer, brugermeldinger, driftsalarmer, sårbarhedsscanninger, tredjepartsvarsler og cloud-telemetri.

Når en potentiel hændelse registreres, skal den dokumenteres systematisk.Anvendes af en meldingsblanket minimumsinformation omfatter:

- *Når:* Tidspunkt for observationen
- *Hvad:* Berørte aktiver
- *Hvor:* kilde
- *Hvorledes:* Indledende observationer
- *Jeg/Vi:* Ansvarlig sagsbehandler samt en foreløbig vurdering af severity.

Denne registrering danner grundlaget for den videre vurdering og sikrer konsistens i håndteringen.

---

## Fase UNDER – Triage og vurdering (Assess & Decide)

I denne fase vurderes hændelsens karakter og alvor med henblik på at træffe de første kritiske beslutninger.

Det skal afklares, om der er tale om en reel sikkerhedshændelse eller et almindeligt driftsproblem. Herefter klassificeres hændelsen, og både teknisk og forretningsmæssig påvirkning vurderes.

På baggrund af denne vurdering besluttes det, om hændelsen skal eskaleres, hvilke ressourcer der skal aktiveres, og om der er behov for øjeblikkelig sikring af beviser.

Denne fase er central for korrekt prioritering og effektiv ressourceanvendelse.


## Fase UNDER – Analyse og respons (Respond)

Analyse- og responsfasen har til formål at forstå hændelsen i dybden og iværksætte relevante modforanstaltninger.

Incident teamet analyserer hændelsens scope, årsag og angrebsvektor samt identificerer kompromitterede systemer og data. På baggrund heraf iværksættes containment-tiltag for at begrænse skaden og forhindre yderligere spredning.

Efterfølgende gennemføres eradication, hvor den underliggende årsag fjernes, fx ved patching, fjernelse af malware eller ændring af kompromitterede legitimationsoplysninger.

Arbejdet sker i tæt koordinering med systemejere, drift og relevante forretningsenheder, og der foretages løbende vurdering af juridiske, kontraktuelle og regulatoriske krav.

---

## Fase EFTER – Recovery (Recover)

Recovery-fasen omhandler kontrolleret genetablering af normal drift.

Genopretning må først igangsættes, når organisationen har tilstrækkelig forståelse af hændelsens årsag og omfang, og når det er valideret, at kompromitteringen ikke fortsætter.

Der skal foreligge en plan for genetablering, herunder prioritering af systemer, validering af integritet samt test af funktionalitet.

Kommunikation til interne og eksterne interessenter skal være koordineret og baseret på et opdateret situationsbillede.


## Fase EFTER – Lukning og læring (Lessons Learned)

Når hændelsen afsluttes, skal der gennemføres en systematisk evaluering med henblik på læring og forbedring.

Dette indebærer udarbejdelse af en hændelsesrapport, herunder en detaljeret tidslinje, root cause-analyse og vurdering af forretningsmæssig impact.

Der skal identificeres konkrete forbedringstiltag, som adresserer både tekniske, organisatoriske og processuelle svagheder. Disse tiltag skal forankres med ansvarlige og deadlines.

Læring fra hændelser skal aktivt anvendes til at forbedre organisationens samlede sikkerhedsniveau og incident response-kapabilitet.

---

## Tjekliste for en generisk incident management-plan:
### Fase FØR - Styringsgrundlag + Forberedelse + Detektion og registrering
Organisationen skal have:

- en godkendt incident response policy
- en incident management-plan med roller og ansvar
- klassifikation af hændelsestyper og severity-niveauer
- klare rapporteringsveje
- kontaktlister og eskalationsmatrice
- minimumskrav til logning, evidens og dokumentation

Forberedelse omfatter:

- tekniske logkilder og overvågning
- playbooks for typiske scenarier
- Train-as-you-fight - øvelser og træning
- værktøjer til ticketing, cases og kommunikation
- aftaler med leverandører og tredjeparter
- kriterier for kriseledelse og ekstern kommunikation

Mulige inputkilder: hej hej 

- SIEM og EDR
- brugermeldinger
- driftsalarmer
- sårbarhedsfund
- tredjepartsvarsler
- cloud-telemetri

Ved registrering skal der som minimum noteres:
- tidspunkt
- kilde
- berørte aktiver
- indledende observationer
- ansvarlig sagsbehandler
- foreløbig severity

---

### Fase UNDER - Triage ogurdering + Analyse og respons
Følgende beslutninger træffes:

1. Er dette et incident eller et almindeligt driftsproblem?
2. Hvilken type incident er der tale om?
3. Hvilken forretningsmæssig og teknisk påvirkning ses?
4. Skal hændelsen eskaleres?
5. Skal beviser bevares straks?

Incident teamet udfører:

- analyse af scope og årsag
- identifikation af kompromitterede aktiver
- containment-tiltag
- koordinering med ejere og drift
- vurdering af juridiske, kontraktuelle og regulatoriske forhold

### Fase Efter - Recovery + Lukning og læring
Recovery må først ske kontrolleret, når organisationen har:

- tilstrækkelig viden om årsag og scope
- plan for genetablering
- validering af at kompromittering ikke fortsætter
- aftalt kommunikation til interessenter

Ved afslutning skal der mindst være:

- hændelsesrapport
- tidslinje
- vurdering af root cause
- vurdering af impact
- anbefalede forbedringstiltag
- ansvarlige og deadlines for opfølgning

---

## Minimumsartefakter

En moden generisk model bør have disse artefakter:

- policy
- plan
- playbooks
- severity-model
- kommunikationsplan
- evidenslog
- incident report-skabelon
- lessons learned-

---
### Eksempel – Moden incident management-kapabilitet i praksis

En moden incident management-kapabilitet er kendetegnet ved, at de centrale artefakter ikke blot eksisterer, men er integreret i organisationens daglige drift, beslutningsprocesser og tekniske setup.


1) En incident response policy fastlægger det overordnede styringsgrundlag og sikrer ledelsesmæssig forankring. Denne policy er operationaliseret gennem en incident management-plan, som beskriver den konkrete proces, roller, ansvar og beslutningspunkter på tværs af organisationen.
2) Planen understøttes af playbooks for specifikke scenarier, såsom ransomware, phishing eller datalæk, der gør det muligt for incident response teamet at reagere hurtigt og konsistent uden at skulle opfinde processen under pres.
3) En klassifikations- og severity-model anvendes konsekvent i både detektion, triage og rapportering, hvilket sikrer fælles forståelse af hændelsers alvor og korrekt prioritering på tværs af tekniske og forretningsmæssige interessenter.
4) Kommunikations- og eskalationsplanen sikrer, at relevante interessenter – herunder ledelse, juridisk, kommunikation og eksterne parter – inddrages rettidigt og koordineret, afhængigt af hændelsens karakter og impact.
5) Evidens- og loghåndteringsprocedurer er implementeret i de tekniske platforme og sikrer, at data indsamles, bevares og kan anvendes til både analyse, forensics og eventuel juridisk dokumentation.
6) Alle hændelser dokumenteres ved brug af en standardiseret incident report-skabelon, som sikrer ensartet rapportering af hændelsesforløb, beslutninger og handlinger.
7) Afslutningsvis anvendes en struktureret lessons learned-skabelon til systematisk evaluering, hvor erfaringer omsættes til konkrete forbedringer i både kontroller, processer og organisatoriske forhold.

Samlet set betyder dette, at organisationen ikke blot reagerer på hændelser, men løbende forbedrer sin evne til at forebygge, opdage og håndtere fremtidige hændelser på et højere modenhedsniveau.

