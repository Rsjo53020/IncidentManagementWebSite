# Tjekliste for en generisk incident management-plan

## Fase FØR  
### Styringsgrundlag, forberedelse, detektion og registrering

??? check "Governance og styringsgrundlag"

    - [ ] Incident response policy er godkendt af ledelsen
    - [ ] Incident management-plan er etableret og dokumenteret
    - [ ] Roller og ansvar er defineret
    - [ ] Severity-model og klassifikation af hændelser er fastlagt
    - [ ] Rapporteringsveje og eskalationsmekanismer er etableret
    - [ ] Kontaktlister og eskalationsmatrice er opdateret
    - [ ] Minimumskrav til logning og dokumentation er defineret
    - [ ] Krav til evidenshåndtering og sporbarhed er etableret

??? check "Forberedelse"

    - [ ] Relevante logkilder er identificeret og aktiveret
    - [ ] Overvågning og alarmering er implementeret
    - [ ] SIEM-, EDR- og øvrige sikkerhedsværktøjer er konfigureret
    - [ ] Playbooks for typiske scenarier er udarbejdet
    - [ ] Ticketing- og case management-system er etableret
    - [ ] Kommunikationskanaler til incident management er defineret
    - [ ] Leverandør- og tredjepartsaftaler er dokumenteret
    - [ ] Kriterier for aktivering af kriseledelse er fastlagt
    - [ ] Kommunikationsprocedure for eksterne interessenter er etableret
    - [ ] Øvelser og træning gennemføres løbende
    - [ ] Train-as-you-fight-princippet anvendes i øvelser

??? check "Mulige inputkilder til detektion"

    - [ ] SIEM-events
    - [ ] EDR/XDR-detektioner
    - [ ] Brugermeldinger
    - [ ] Drifts- og systemalarmer
    - [ ] Sårbarhedsfund
    - [ ] Threat intelligence og tredjepartsvarsler
    - [ ] Cloud- og SaaS-telemetri
    - [ ] IDS/IPS-events
    - [ ] Netværks- og firewall-logs

??? check "Registrering af hændelser"

    - [ ] Tidspunkt for registrering dokumenteres
    - [ ] Kilde til hændelsen registreres
    - [ ] Berørte systemer og aktiver identificeres
    - [ ] Indledende observationer beskrives
    - [ ] Ansvarlig sagsbehandler registreres
    - [ ] Foreløbig severity vurderes
    - [ ] Incident-ID oprettes
    - [ ] Evidens sikres og journaliseres

---

## Fase UNDER  
### Triage, analyse og respons

??? check "Triage og vurdering"

    - [ ] Hændelsen er vurderet som incident eller driftsproblem
    - [ ] Incident-type er identificeret
    - [ ] Teknisk impact er vurderet
    - [ ] Forretningsmæssig impact er vurderet
    - [ ] Severity og prioritet er fastlagt
    - [ ] Eskalationsbehov er vurderet
    - [ ] Juridiske og regulatoriske krav er vurderet
    - [ ] Behov for evidenssikring er vurderet
    - [ ] Behov for ekstern involvering er vurderet

??? check "Analyse og respons"

    - [ ] Scope og omfang er analyseret
    - [ ] Root cause-analyse er påbegyndt
    - [ ] Kompromitterede aktiver er identificeret
    - [ ] Containment-tiltag er implementeret
    - [ ] Risiko for lateral movement er vurderet
    - [ ] Persistence-mekanismer er undersøgt
    - [ ] Eradication-plan er udarbejdet
    - [ ] Koordinering med drift og systemejere er gennemført
    - [ ] Kommunikationsspor er dokumenteret
    - [ ] Beslutninger og handlinger logges løbende

---

## Fase EFTER  
### Recovery, lukning og læring

??? check "Recovery"

    - [ ] Årsag og scope er tilstrækkeligt forstået
    - [ ] Genetableringsplan er godkendt
    - [ ] Kompromittering er verificeret stoppet
    - [ ] Systemer er genetableret kontrolleret
    - [ ] Recovery er valideret teknisk og forretningsmæssigt
    - [ ] Kommunikationsplan til interessenter er gennemført
    - [ ] Forhøjet overvågning er aktiveret efter recovery

??? check "Lukning og læring"

    - [ ] Hændelsesrapport er udarbejdet
    - [ ] Tidslinje for hændelsen er dokumenteret
    - [ ] Root cause er dokumenteret
    - [ ] Business impact er vurderet
    - [ ] Lessons learned-session er gennemført
    - [ ] Forbedringstiltag er identificeret
    - [ ] Ansvarlige for opfølgning er udpeget
    - [ ] Deadlines for forbedringstiltag er fastsat
    - [ ] Kontroller, processer og playbooks er opdateret
    - [ ] Ledelsen er orienteret om læringspunkter

---

## Minimumsartefakter

??? check "Governance og styring"

    - [ ] Incident response policy
    - [ ] Incident management-plan
    - [ ] Roller og ansvarsmodel
    - [ ] Severity- og klassifikationsmodel
    - [ ] Kommunikations- og eskalationsplan

??? check "Operationelle artefakter"

    - [ ] Playbooks
    - [ ] Incident register
    - [ ] Evidenslog
    - [ ] Incident report-skabelon
    - [ ] Lessons learned-skabelon
    - [ ] Kontaktlister
    - [ ] Tidslinje-skabelon
    - [ ] Recovery-procedure

??? check "Teknisk understøttelse"

    - [ ] SIEM-platform
    - [ ] EDR/XDR-platform
    - [ ] Ticketing- og case management-system
    - [ ] Sikker logopbevaring
    - [ ] Overvågning og alarmering
    - [ ] Backup- og recovery-løsninger

---

---
### Eksempel – Moden incident management-kapabilitet i praksis

En moden incident management-kapabilitet er kendetegnet ved, at de centrale artefakter ikke blot eksisterer, men er integreret i organisationens daglige drift, beslutningsprocesser og tekniske setup.


1) En incident response policy fastlægger det overordnede styringsgrundlag og sikrer ledelsesmæssig forankring. Denne policy er operationaliseret gennem en incident management-plan, som beskriver den konkrete proces, roller, ansvar og beslutningspunkter på tværs af organisationen.

2) Planen understøttes af playbooks for specifikke scenarier, såsom ransomware, phishing eller datalæk, der gør det muligt for incident response teamet at reagere hurtigt og konsistent uden at skulle opfinde processen under pres.

3) En klassifikations- og alvorligheds-skala anvendes konsekvent i både detektion, triage og rapportering, hvilket sikrer fælles forståelse af hændelsers alvor og korrekt prioritering på tværs af tekniske og forretningsmæssige interessenter.

4) Kommunikations- og eskalationsplanen sikrer, at relevante interessenter – herunder ledelse, juridisk, kommunikation og eksterne parter – inddrages rettidigt og koordineret, afhængigt af hændelsens karakter og impact.

5) Evidens- og loghåndteringsprocedurer er implementeret i de tekniske platforme og sikrer, at data indsamles, bevares og kan anvendes til både analyse, forensics og eventuel juridisk dokumentation.

6) Alle hændelser dokumenteres ved brug af en standardiseret incident report-skabelon, som sikrer ensartet rapportering af hændelsesforløb, beslutninger og handlinger.

7) Afslutningsvis anvendes en struktureret lessons learned-skabelon til systematisk evaluering, hvor erfaringer omsættes til konkrete forbedringer i både kontroller, processer og organisatoriske forhold.

Samlet set betyder dette, at organisationen ikke blot reagerer på hændelser, men løbende forbedrer sin evne til at forebygge, opdage og håndtere fremtidige hændelser på et højere modenhedsniveau.

---