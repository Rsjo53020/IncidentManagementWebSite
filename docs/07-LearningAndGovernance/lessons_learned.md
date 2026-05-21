# Lukning og lærings fasen - Yderligere detaljer

Når hændelsen er håndteret, containment gennemført og normal drift genetableret, skal organisationen gennemføre en systematisk evaluering af hele hændelsesforløbet. Formålet med denne fase er at sikre organisatorisk læring, identificere forbedringsmuligheder og styrke organisationens samlede incident management kapabilitet. Lessons Learned fasen er afgørende for modenheden af organisationens sikkerhedsarbejde. Hvis erfaringer fra hændelser ikke omsættes til konkrete forbedringer, vil organisationen ofte gentage de samme fejl ved fremtidige sikkerhedshændelser. Fasen bør påbegyndes så hurtigt som muligt efter recovery, mens hændelsesforløbet stadig er aktuelt hos de involverede parter og hændelsen stadigvæk er frisk i hukommelsen. Yderligere bør organisationen sikre, at evalueringen sker i en konstruktiv og læringsorienteret ramme med fokus på forbedring frem for skyldplacering.

Evalueringen bør involvere relevante interessenter, herunder:

- Incident management
- Sikkerhedsteams
- Drift
- Systemejere
- Ledelse
- Legal/compliance
- Kommunikation
- Leverandører
- Eksterne samarbejdspartnere

Et centralt element i fasen er udarbejdelsen af en samlet hændelsesrapport. Rapporten fungerer som den formelle dokumentation af hændelsen og skal sikre sporbarhed, læring og beslutningsgrundlag for forbedringer.

## Udarbejdelse af hændelsesrapport

Hændelsesrapporten bør udarbejdes i en struktureret form og indeholde både tekniske og organisatoriske aspekter af hændelsen. Rapporten skal være tilstrækkelig detaljeret til at give en dybdegående forståelse af hændelsesforløbet, men samtidig formidlet på en måde, der er tilgængelig for både tekniske og ikke-tekniske interessenter. Rapporten bør også indeholde en klar tidslinje over hændelsesforløbet, en root cause-analyse, en vurdering af forretningsmæssig impact og en evaluering af incident management-processen.

En hændelsesrapport bør typisk indeholde:

| Element | Formål |
|---|---|
| Executive summary | Overordnet ledelsesopsummering |
| Tidslinje | Rekonstruktion af hændelsesforløb |
| Root cause-analyse | Identifikation af underliggende årsager |
| Scope | Berørte systemer og data |
| Impact-vurdering | Teknisk og forretningsmæssig påvirkning |
| Responsaktiviteter | Beskrivelse af containment og recovery |
| Beslutninger | Centrale beslutninger og eskaleringer |
| Kommunikationsforløb | Intern og ekstern kommunikation |
| Evidens og analyser | Centrale tekniske fund |
| Lessons learned | Identificerede læringspunkter |
| Forbedringstiltag | Konkrete anbefalinger |

Et vigtigt element i rapporten er etableringen af en detaljeret tidslinje over hændelsesforløbet. Tidslinjen giver organisationen mulighed for at forstå:

- Hvornår kompromitteringen begyndte
- Hvornår hændelsen blev opdaget
- Hvor hurtigt organisationen reagerede
- Hvilke beslutninger der blev truffet
- Hvornår containment blev gennemført
- Hvor lang tid recovery tog

Eksempel på tidslinje:

| Tidspunkt | Aktivitet |
|---|---|
| 08:43 | SIEM registrerer mistænkelig loginaktivitet |
| 08:51 | SOC starter initial triage |
| 09:07 | Kompromitteret konto identificeres |
| 09:15 | Incident eskaleres til Incident Manager |
| 09:32 | Containment gennemført |
| 11:10 | Forensics identificerer initial access |
| 14:45 | Password reset gennemført |
| 18:20 | Recovery påbegyndt |
| Næste dag 09:00 | Drift genetableret |

## udarbejdelse af root cause-analyse
Root cause-analysen er et centralt element i Lessons Learned-fasen, idet den hjælper organisationen med at forstå, hvorfor hændelsen kunne opstå, og hvorfor eksisterende kontroller ikke forhindrede eller opdagede den tidligere. Root cause-analysen bør ikke alene fokusere på den tekniske sårbarhed, men også undersøge organisatoriske og processuelle forhold, der bidrog til hændelsen. 

Dette kan eksempelvis omfatte:

| Område | Eksempel |
|---|---|
| Teknologi | Manglende patching |
| Konfiguration | Fejlkonfigureret firewall |
| Identitetsstyring | Manglende MFA |
| Proces | Mangelfuld eskalering |
| Overvågning | Manglende use cases |
| Awareness | Phishing lykkedes mod bruger |
| Governance | Uklar beslutningskompetence |
| Leverandørstyring | Utilstrækkelig tredjepartssikkerhed |

Root cause-analysen bør gennemføres i en struktureret form, hvor organisationen systematisk undersøger alle relevante aspekter af hændelsen for at identificere både tekniske og organisatoriske årsager. Analysen bør også inddrage input fra alle relevante interessenter for at sikre en holistisk forståelse af hændelsen.

## Forretningsmæssig impact-vurdering
En vigtig del af Lessons Learned-fasen er at vurdere den forretningsmæssige impact af hændelsen. Dette indebærer en vurdering af, hvordan hændelsen påvirkede organisationens drift, økonomi, omdømme og relationer til kunder og samarbejdspartnere. 
Dette kan blandt andet omfatte:

- Driftsforstyrrelser
- Økonomiske tab
- Tab af produktivitet
- Påvirkning af kunder
- Regulatoriske konsekvenser
- Kontraktuelle konsekvenser
- Omdømmepåvirkning
- Påvirkning af samarbejdspartnere

Forretningsmæssig impact-vurdering er afgørende for at forstå, hvilke konsekvenser hændelsen havde, og for at kunne prioritere forbedringstiltag baseret på den faktiske påvirkning på organisationen.

## Evaluering af incident management-processen
Lessons Learned-fasen bør også omfatte en systematisk evaluering af hele incident management-processen. Dette indebærer en kritisk gennemgang af, hvordan organisationen håndterede hændelsen, hvilke beslutninger der blev truffet, og hvordan samarbejdet mellem teams fungerede. Evalueringen bør identificere både styrker og svagheder i organisationens incident management-kapabilitet og bør danne grundlag for konkrete forbedringstiltag.

Evalueringen kan blandt andet fokusere på:

- Hvor hurtigt hændelsen blev opdaget
- Kvaliteten af triage
- Effektiviteten af containment
- Samarbejdet mellem teams
- Beslutningsprocesser
- Kommunikationsflow
- Dokumentationskvalitet
- Anvendelsen af playbooks
- Tekniske værktøjers effektivitet

formålet med evalueringen er at identificere, hvad der fungerede godt, og hvad der kunne have været håndteret bedre, så organisationen kan lære af erfaringerne og styrke sin incident management-kapabilitet over tid. Dette sker gennem en systematisk analyse af hændelsesforløbet, hvor organisationen vurderer alle aspekter af håndteringen med kritisk blik.

Eksempler på spørgsmål i evalueringen kan være:

- Var alarmerne tilstrækkelige?
- Var severity korrekt vurderet?
- Var eskaleringen rettidig?
- Var roller og ansvar tydelige?
- Var kommunikationen effektiv?
- Fungerede recovery-planen?
- Var logning og evidens tilstrækkelig?
- Var der flaskehalse i beslutningsprocessen?

På baggrund af disse spørgsmål kan organisationen identificere konkrete forbedringstiltag, som kan implementeres for at styrke incident management-processen fremadrettet. Samtidig bør organisationen sikre, at læring fra hændelsen ikke blot forbliver i rapporten, men også omsættes til konkrete ændringer i procedurer, kontroller, træning og governance, så organisationen bliver mere robust over tid.

### Eksempel på forbedringstiltag
Hvert serviceområde, der har været involveret i håndteringen af hændelsen, bør identificere konkrete forbedringstiltag baseret på evalueringen. Forbedringstiltagene bør være specifikke, målbare, opnåelige, relevante og tidsbestemte (SMART), så organisationen kan sikre effektiv implementering og opfølgning.

Forbedringstiltag kan blandt andet omfatte:

| Område | Eksempel på forbedring |
|---|---|
| Teknologi | Implementering af MFA |
| Overvågning | Nye SIEM-use cases |
| Hardening | Segmentering af netværk |
| Processer | Opdatering af playbooks |
| Governance | Tydeligere eskalationsregler |
| Awareness | Øget phishing-træning |
| Recovery | Forbedrede backup-tests |
| Leverandører | Skærpede sikkerhedskrav |

Når forbedringstiltag er identificeret, bør organisationen sikre, at der er en klar ejer for hvert tiltag, en realistisk deadline for implementering og en plan for opfølgning på status og effekt. Det er vigtigt, at forbedringstiltagene ikke blot identificeres, men også implementeres og følges op på, så organisationen kan sikre, at den lærer af hændelsen og styrker sin sikkerhedsposition over tid. 

Derfor bør alle forbedringstiltag dokumenteres med:

- Ansvarlig ejer
- Deadline
- Prioritet
- Forventet effekt
- Statusopfølgning

Eksempel:

| Tiltag | Ansvarlig | Deadline | Status |
|---|---|---|---|
| Implementere MFA på VPN | Infrastrukturteam | 30 dage | Planlagt |
| Opdatere ransomware-playbook | Incident Manager | 14 dage | Igangværende |
| Etablere nye SIEM-regler | SOC Team | 21 dage | Ikke startet |

## Modenhed
Modenhed er et centralt element i Lessons Learned-fasen, idet det understreger, at en professionel incident management-praksis forudsætter, at organisationen kan lære af hændelser og omsætte erfaringer til ændringer i procedurer, kontroller og organisatorisk adfærd. Modenhed handler ikke blot om at have processer på papiret, men om at kunne demonstrere, at organisationen faktisk lærer af sine erfaringer og forbedrer sin sikkerhedsposition over tid.
Modenhed kan vurderes ud fra, i hvilken grad organisationen har implementeret forbedringstiltag efter tidligere hændelser, og i hvilken grad disse tiltag har haft en positiv effekt på organisationens sikkerhedsposition. En moden organisation vil have en kultur, hvor læring og forbedring er integreret i alle aspekter af incident management, og hvor erfaringer fra hændelser systematisk omsættes til konkrete ændringer i praksis.

Dette kan blandt andet ske gennem:

- Opdatering af playbooks
- Forbedring af sikkerhedskontroller
- Ændringer i governance
- Opdatering af risikovurderinger
- Træning og awareness
- Forbedring af logging og monitorering
- Justering af recovery-strategier
- Forbedring af samarbejde med leverandører

For at modenhed forankres i organisationen kultur, bør ledelsen aktivt støtte og fremme en læringsorienteret tilgang til incident management, hvor det er legitimt at diskutere fejl og svagheder åbent med fokus på forbedring frem for skyldplacering. Samtidig bør organisationen sikre, at der er klare mekanismer for at følge op på forbedringstiltag og evaluere deres effekt over tid, så organisationen kan demonstrere, at den faktisk lærer af sine erfaringer og styrker sin sikkerhedsposition kontinuerligt. Organisationen bør desuden anvende disse erfaringer til fremtidige øvelser og tabletop exercises, så identificerede svagheder testes og valideres løbende.

--- 

## Afsluttende bemærkninger

Lessons Learned-fasen er derfor ikke afslutningen på incident management-processen, men mekanismen der driver kontinuerlig forbedring og øger organisationens samlede robusthed over tid. ISO/IEC 27035-1 beskriver “Learn Lessons”-fasen som en central del af incident management-processen med fokus på læring, forbedringer og organisatorisk modenhed. ISO/IEC 27035-2 uddyber kravene til evaluering, forbedringstiltag og opdatering af incident management kapabiliteter, mens NIST SP 800-61 fremhæver betydningen af post-incident activities, root cause-analyse og kontinuerlig forbedring efter sikkerhedshændelser.

---