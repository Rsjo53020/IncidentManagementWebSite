# Tjekliste for en generisk incident management-plan:

## Fase FØR - Styringsgrundlag + Forberedelse + Detektion og registrering
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

Mulige inputkilder:

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

## Fase UNDER - Triage og vurdering + Analyse og respons
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

## Fase EFTER - Recovery + Lukning og læring
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

---