# Generisk Incident Management-plan

## Formål

Formålet med denne incident management-plan er at etablere en struktureret, reproducerbar og risikobaseret tilgang til håndtering af sikkerhedshændelser. Planen skal sikre, at organisationen effektivt kan identificere, analysere, begrænse og genoprette efter hændelser samt minimere forretningsmæssig påvirkning og understøtte kontinuerlig forbedring.

Planen er designet til at kunne anvendes på tværs af teknologier, organisatoriske enheder og hændelsestyper og skal understøtte både operationel respons og ledelsesmæssig beslutningstagning.

---

## Fase FØR – Styringsgrundlag og governance

En effektiv hændelseshåndtering forudsætter et klart styringsgrundlag. Organisationen skal derfor etablere og vedligeholde en samlet governance-struktur for incident management.

Dette omfatter en godkendt incident response policy, som fastlægger formål, scope og ledelsesmæssig forankring. Derudover skal der foreligge en incident management-plan, som operationaliserer policyen og beskriver processer, roller og ansvar.

Organisationen skal definere en ensartet klassifikation af hændelsestyper samt en alvorlighedsskala, der gør det muligt at vurdere hændelsers alvor og prioritere indsatsen. Samtidig skal der være etableret klare rapporteringsveje, eskalationsmekanismer og opdaterede kontaktlister.

Endelig skal der fastsættes minimumskrav til logning, evidenshåndtering og dokumentation for at sikre sporbarhed, efterlevelse og mulighed for efterfølgende analyse.


<div class="inline-link">
  <a href="/incident-management/05-Proces/governance/">
    Governance og styringsmodel →
  </a>
</div>

---

## Fase FØR – Forberedelse

Forberedelsesfasen har til formål at sikre organisatorisk og teknisk beredskab før en hændelse opstår. Der skal etableres relevante logkilder og overvågningsmekanismer, så hændelser kan opdages rettidigt.

Der bør udvikles playbooks for typiske scenarier (fx ransomware, phishing, insider threats), som beskriver standardiserede responsforløb. Derudover skal organisationen gennemføre øvelser og træning for at sikre, at processer og samarbejde fungerer i praksis. Teknologisk skal der være værktøjer til ticketing, sagsstyring og kommunikation, og der skal være etableret aftaler med leverandører og eksterne parter, herunder krav til respons og samarbejde. Yderligere skal der være defineret kriterier for, hvornår en hændelse eskaleres til kriseledelse, samt hvordan ekstern kommunikation håndteres.


<div class="inline-link">
  <a href="/incident-management/05-Proces/preparation/">
    Forberedelse →
  </a>
</div>

---


## Fase UNDER – Detektion og registrering

Hændelser kan identificeres gennem en række forskellige kilder, herunder Security Information and Event Management- (SIEM) og Endpoint Detection and Response (EDR) -systemer, brugermeldinger, driftsalarmer, sårbarhedsscanninger, tredjepartsvarsler og cloud-telemetri.

Når en potentiel hændelse registreres, skal den dokumenteres systematisk. Anvendes af en meldingsblanket minimumsinformation omfatter:

- *Når:* Tidspunkt for observationen
- *Hvad:* Berørte aktiver
- *Hvor:* kilde
- *Hvorledes:* Indledende observationer
- *Jeg/Vi:* Ansvarlig sagsbehandler samt en foreløbig vurdering af severity.

Denne registrering danner grundlaget for den videre vurdering og sikrer konsistens i håndteringen.

<div class="inline-link">
  <a href="/incident-management/06-OperationalManagement/detect_report/">
    Detektion og registrering →
  </a>
</div>

---

## Fase UNDER – Triage og vurdering

I denne fase vurderes hændelsens karakter og alvor med henblik på at træffe de første kritiske beslutninger.

Det skal afklares, om der er tale om en reel sikkerhedshændelse eller et almindeligt driftsproblem. Herefter klassificeres hændelsen, og både teknisk og forretningsmæssig påvirkning vurderes.

På baggrund af denne vurdering besluttes det, om hændelsen skal eskaleres, hvilke ressourcer der skal aktiveres, og om der er behov for øjeblikkelig sikring af beviser.

Denne fase er central for korrekt prioritering og effektiv ressourceanvendelse.

<div class="inline-link">
  <a href="/incident-management/06-OperationalManagement/triage_assessment/">
    Triage og vurdering →
  </a>
</div>

---


## Fase UNDER – Analyse og respons

Analyse- og responsfasen har til formål at forstå hændelsen i dybden og iværksætte relevante modforanstaltninger.

Incident teamet analyserer hændelsens scope, årsag og angrebsvektor samt identificerer kompromitterede systemer og data. På baggrund heraf iværksættes containment-tiltag for at begrænse skaden og forhindre yderligere spredning.

Efterfølgende gennemføres eradication, hvor den underliggende årsag fjernes, fx ved patching, fjernelse af malware eller ændring af kompromitterede legitimationsoplysninger.

Arbejdet sker i tæt koordinering med systemejere, drift og relevante forretningsenheder, og der foretages løbende vurdering af juridiske, kontraktuelle og regulatoriske krav.

<div class="inline-link">
  <a href="/incident-management/06-OperationalManagement/analysis_response/">
    Analyse og respons →
  </a>
</div>

---

## Fase EFTER – Recovery

Recovery-fasen omhandler kontrolleret genetablering af normal drift.

Genopretning må først igangsættes, når organisationen har tilstrækkelig forståelse af hændelsens årsag og omfang, og når det er valideret, at kompromitteringen ikke fortsætter.

Der skal foreligge en plan for genetablering, herunder prioritering af systemer, validering af integritet samt test af funktionalitet.

Kommunikation til interne og eksterne interessenter skal være koordineret og baseret på et opdateret situationsbillede.

<div class="inline-link">
  <a href="/incident-management/07-LearningAndGovernance/recover/">
    Recovery →
  </a>
</div>

---

## Fase EFTER – Lukning og læring

Når hændelsen afsluttes, skal der gennemføres en systematisk evaluering med henblik på læring og forbedring.

Dette indebærer udarbejdelse af en hændelsesrapport, herunder en detaljeret tidslinje, root cause-analyse og vurdering af forretningsmæssig impact.

Der skal identificeres konkrete forbedringstiltag, som adresserer både tekniske, organisatoriske og processuelle svagheder. Disse tiltag skal forankres med ansvarlige og deadlines.

Læring fra hændelser skal aktivt anvendes til at forbedre organisationens samlede sikkerhedsniveau og incident response-kapabilitet.


<div class="inline-link">
  <a href="/incident-management/07-LearningAndGovernance/lessons_learned/">
    Lukning og læring →
  </a>
</div>


---