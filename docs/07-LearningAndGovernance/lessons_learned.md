# Lukning og lærings fase - Yderligere detaljer

Når hændelsen er håndteret, containment gennemført og normal drift genetableret, skal organisationen gennemføre en systematisk evaluering af hele hændelsesforløbet. Formålet med denne fase er at sikre organisatorisk læring, identificere forbedringsmuligheder og styrke organisationens samlede incident management-kapabilitet.

Lessons Learned-fasen er afgørende for modenheden af organisationens sikkerhedsarbejde. Hvis erfaringer fra hændelser ikke omsættes til konkrete forbedringer, vil organisationen ofte gentage de samme fejl ved fremtidige incidents.

Fasen bør påbegyndes så hurtigt som muligt efter recovery, mens hændelsesforløbet stadig er aktuelt hos de involverede parter. Samtidig bør organisationen sikre, at evalueringen sker i en konstruktiv og læringsorienteret ramme med fokus på forbedring frem for skyldplacering.

Evalueringen bør involvere relevante interessenter, herunder:

- incident management
- sikkerhedsteams
- drift
- systemejere
- ledelse
- legal/compliance
- kommunikation
- leverandører
- eksterne samarbejdspartnere

Et centralt element i fasen er udarbejdelsen af en samlet hændelsesrapport. Rapporten fungerer som den formelle dokumentation af hændelsen og skal sikre sporbarhed, læring og beslutningsgrundlag for forbedringer.

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

- hvornår kompromitteringen begyndte
- hvornår hændelsen blev opdaget
- hvor hurtigt organisationen reagerede
- hvilke beslutninger der blev truffet
- hvornår containment blev gennemført
- hvor lang tid recovery tog

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

Organisationen skal samtidig gennemføre en root cause-analyse for at identificere de underliggende årsager til hændelsen.

Root cause-analysen bør ikke alene fokusere på den tekniske sårbarhed, men også undersøge organisatoriske og processuelle forhold.

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

Root cause-analysen skal hjælpe organisationen med at forstå, hvorfor hændelsen kunne opstå, og hvorfor eksisterende kontroller ikke forhindrede eller opdagede den tidligere.

Der skal samtidig gennemføres en samlet vurdering af hændelsens forretningsmæssige impact.

Dette kan blandt andet omfatte:

- driftsforstyrrelser
- økonomiske tab
- tab af produktivitet
- påvirkning af kunder
- regulatoriske konsekvenser
- kontraktuelle konsekvenser
- omdømmepåvirkning
- påvirkning af samarbejdspartnere

Organisationen bør også evaluere selve incident management-processen og vurdere:

- hvor hurtigt hændelsen blev opdaget
- kvaliteten af triage
- effektiviteten af containment
- samarbejdet mellem teams
- beslutningsprocesser
- kommunikationsflow
- dokumentationskvalitet
- anvendelsen af playbooks
- tekniske værktøjers effektivitet

Eksempler på spørgsmål i evalueringen kan være:

- Var alarmerne tilstrækkelige?
- Var severity korrekt vurderet?
- Var eskaleringen rettidig?
- Var roller og ansvar tydelige?
- Var kommunikationen effektiv?
- Fungerede recovery-planen?
- Var logning og evidens tilstrækkelig?
- Var der flaskehalse i beslutningsprocessen?

På baggrund af evalueringen skal organisationen identificere konkrete forbedringstiltag. Disse tiltag skal være operationelle, målbare og forankrede organisatorisk.

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

Alle forbedringstiltag bør dokumenteres med:

- ansvarlig ejer
- deadline
- prioritet
- forventet effekt
- statusopfølgning

Eksempel:

| Tiltag | Ansvarlig | Deadline | Status |
|---|---|---|---|
| Implementere MFA på VPN | Infrastrukturteam | 30 dage | Planlagt |
| Opdatere ransomware-playbook | Incident Manager | 14 dage | Igangværende |
| Etablere nye SIEM-regler | SOC Team | 21 dage | Ikke startet |

Lessons Learned-fasen bør samtidig bruges aktivt til at forbedre organisationens samlede sikkerhedsmodenhed.

Dette kan blandt andet ske gennem:

- opdatering af playbooks
- forbedring af sikkerhedskontroller
- ændringer i governance
- opdatering af risikovurderinger
- træning og awareness
- forbedring af logging og monitorering
- justering af recovery-strategier
- forbedring af samarbejde med leverandører

Organisationen bør desuden anvende erfaringerne til fremtidige øvelser og tabletop exercises, så identificerede svagheder testes og valideres løbende.

--- 

## Afsluttende bemærkninger

Lessons Learned-fasen er derfor ikke afslutningen på incident management-processen, men mekanismen der driver kontinuerlig forbedring og øger organisationens samlede robusthed over tid.

ISO/IEC 27035-1 beskriver “Learn Lessons”-fasen som en central del af incident management-processen med fokus på læring, forbedringer og organisatorisk modenhed :contentReference. ISO/IEC 27035-2 uddyber kravene til evaluering, forbedringstiltag og opdatering af incident management-kapabiliteter, mens NIST SP 800-61 fremhæver betydningen af post-incident activities, root cause-analyse og kontinuerlig forbedring efter sikkerhedshændelser.

---