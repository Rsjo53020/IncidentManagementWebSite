# Styringsgrundlag og governance fasen - Yderligere detaljer

En effektiv hændelseshåndtering begynder længe før en konkret sikkerhedshændelse opstår. Organisationen skal derfor etablere et tydeligt styringsgrundlag, som sikrer, at roller, processer, ansvar og beslutningsveje er defineret og forankret organisatorisk. Uden dette fundament vil håndteringen af hændelser ofte blive præget af usikkerhed, forsinkelser og manglende koordinering.

Governance-strukturen bør tage udgangspunkt i en formelt godkendt incident response policy, som er forankret hos ledelsen og koblet til organisationens overordnede risikostyring. Policyen bør beskrive:

- Formål med incident management
- Organisatorisk scope
- Ledelsens ansvar og mandat
- Krav til rapportering og eskalering
- Krav til dokumentation og compliance
- Sammenhæng til øvrige sikkerheds- og beredskabsprocesser

Policyen fungerer som det strategiske styringsdokument og skal understøttes af en operationel incident management-plan. Planen beskriver, hvordan organisationen konkret håndterer hændelser i praksis, herunder:

- Processer for identifikation, vurdering og respons
- Roller og ansvar
- Kommunikationsveje
- Eskalationsprocedurer
- Tekniske og organisatoriske afhængigheder
- Integration med drift, SOC, beredskab og ledelse

Organisationen bør samtidig etablere en tydelig organisatorisk struktur for incident management. Dette omfatter typisk:

| Rolle | Ansvar |
|---|---|
| Kriseledelse | Beslutninger ved kritiske hændelser |
| Ledelse | Strategisk beslutningstagning og prioritering |
| Incident Manager | Koordinering af hændelseshåndtering |
| Legal / Compliance | Juridisk vurdering og myndighedskrav |
| HR | Personrelaterede hændelser |
| Eksterne partnere | Specialiseret assistance og koordinering |
| SOC Analyst | Overvågning, triage og initial analyse |
| Threat Hunter | Proaktiv identifikation af trusler |
| IT Drift | Teknisk afhjælpning og recovery |
| Forensics Specialist | Evidensindsamling og analyse |
| Kommunikationsansvarlig | Intern og ekstern kommunikation |
| CISO | Strategisk risikostyring og ledelsesrapportering |

For hver rolle bør der foreligge:

- Mandat og beslutningskompetence
- Ansvar under hændelser
- Backup-personer
- Kontaktoplysninger
- Krav til tilgængelighed
- Kompetencekrav og træning


Der skal samtidig etableres procedurer for vagtordninger og on-call beredskab, så organisationen kan reagere uden for normal arbejdstid. For at sikre ensartet håndtering skal organisationen etablere en klassifikationsmodel for hændelser. Modellen skal gøre det muligt hurtigt at vurdere hændelsens type, omfang og potentielle konsekvenser. Klassifikation kan eksempelvis baseres på:

- Påvirkning af fortrolighed
- Påvirkning af integritet
- Påvirkning af tilgængelighed
- Forretningsmæssig påvirkning
- Regulatoriske konsekvenser
- Omdømmerisiko

På baggrund af klassifikationen anvendes en alvorlighedsskala til prioritering af indsatsen. Et eksempel kan være:

| Alvorlighed | Beskrivelse | Eksempel |
|---|---|---|
| Kritisk | Kritisk påvirkning af drift eller sikkerhed | Ransomware i produktion |
| Høj | Betydelig påvirkning | Kompromitteret administrator-konto |
| Medium | Begrænset påvirkning | Malware på enkelt endpoint |
| Lav | Minimal påvirkning | Fejlkonfiguration uden aktiv udnyttelse |

Alvorlighedsskalaen skal være koblet til konkrete krav om:

- Responstid
- Eskalationsniveau
- Ledelsesinvolvering
- Kommunikation
- Dokumentationsniveau

Organisationen skal derudover etablere klare rapporteringsveje og eskalationsmekanismer. Medarbejdere skal vide:

- Hvordan hændelser rapporteres
- Hvem der kontaktes
- Hvornår eskalering er nødvendig
- Hvordan kritiske hændelser håndteres uden for normal arbejdstid

Dette understøttes typisk af:

- Kontaktlister
- On-call vagtordninger
- Eskalationsmatricer
- Kommunikationsplaner
- Beslutningshierarkier

Et centralt element i governance-fasen er fastsættelse af krav til logning, evidenshåndtering og dokumentation. Organisationen bør definere minimumskrav for:

- Systemlogning
- Tidsstempling
- Fastholdelse perioder af data
- Synkronisering af tid (Network Time Protocol - NTP)
- Adgang til logs
- Sikker opbevaring af evidens
- Dokumentation af handlinger og beslutninger

Dette er afgørende for:

- Teknisk analyse
- Forensic investigations
- Compliance og audit
- Juridisk efterprøvning
- Læring og forbedring

Der bør samtidig etableres governance for løbende vedligeholdelse og forbedring af incident management-kapabiliteten. Dette omfatter blandt andet:

- Regelmæssig review af planer og procedurer
- Tabletop exercises og øvelser
- Modenhedsvurderinger
- KPI/KRI-overvågning
- Lessons learned-processer
- Træning og awareness


## Eksempel på RACI-matrix for Incident Management

RACI-modellen anvendes til at tydeliggøre ansvar, beslutningskompetence og involvering under håndtering af sikkerhedshændelser. Modellen reducerer usikkerhed under kritiske situationer og sikrer, at både tekniske og forretningsmæssige aktiviteter bliver håndteret korrekt.

### Forklaring på RACI

| Betegnelse | Betydning |
|---|---|
| R – Responsible | Udfører aktiviteten |
| A – Accountable | Har det overordnede ansvar og godkender |
| C – Consulted | Konsulteres og bidrager fagligt |
| I – Informed | Holdes orienteret |

---

| Aktivitet | Kriseledelse | Ledelse | Incident Manager | Legal / Compliance | HR | Eksterne partnere | SOC Analyst | Threat Hunter | IT Drift | Forensics Specialist | Kommunikations ansvarlig | CISO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Modtage og registrere hændelse | I | I | A | I | I | I | R | C | I | I | I | C |
| Initial triage og klassifikation | I | I | A | I | I | I | R | C | C | C | I | C |
| Identificere indikatorer på kompromittering | I | I | C | I | I | I | R | R | C | C | I | C |
| Teknisk analyse af hændelse | I | I | A | I | I | C | R | R | C | R | I | C |
| Evidensindsamling og forensic analyse | I | I | A | C | I | C | C | C | C | R | I | C |
| Containment af kompromitterede systemer | I | I | A | I | I | C | C | C | R | C | I | C |
| Recovery og genetablering af drift | I | I | C | I | I | C | I | I | R | C | I | A |
| Vurdering af regulatoriske krav | I | I | C | R | I | C | I | I | I | C | I | A |
| Beslutning om myndighedsrapportering | I | A | C | R | I | C | I | I | I | C | C | A |
| Håndtering af personrelaterede forhold | I | I | C | C | R | I | I | I | I | I | I | C |
| Eskalering til kriseledelse | A | C | R | C | I | I | C | C | C | C | I | C |
| Intern kommunikation | I | C | C | C | C | I | I | I | I | I | R | A |
| Ekstern kommunikation og presse | A | C | C | C | I | I | I | I | I | I | R | A |
| Koordinering med eksterne leverandører | I | I | A | C | I | R | C | C | C | C | I | C |
| Ledelsesrapportering | I | A | R | C | I | I | I | I | I | I | I | C |
| Beslutning om krisehåndtering | A | R | C | C | C | I | I | I | I | I | C | C |
| Lessons learned og forbedringsplan | I | I | A | C | C | C | C | C | C | C | C | R |
| Opdatering af playbooks og procedurer | I | I | A | C | I | C | C | C | C | C | I | R |
| Rapportering til audit/compliance | I | A | C | R | I | I | I | I | I | C | I | C |

---

RACI-matricen bør tilpasses organisationens størrelse, modenhed og governance-struktur. I mindre organisationer vil flere roller ofte være samlet hos samme personer eller teams, mens større organisationer typisk vil have mere specialiserede funktioner og formelle eskalationsniveauer.

RACI-modellen bør samtidig understøttes af:

- Eskalationsmatricer
- Kontaktlister
- Vagtplaner
- Kommunikationsplaner
- Beslutningshierarkier
- Playbooks
- Krisestyringsprocedurer

Formålet er at reducere tvivl og sikre hurtige beslutninger under sikkerhedshændelser.

---

## Afsluttende bemærkninger

Fasen før hændelsen er derfor ikke kun administrativ forberedelse, men selve fundamentet for organisationens samlede evne til at opdage, koordinere, håndtere og lære af sikkerhedshændelser.

ISO/IEC 27035-1 beskriver denne fase som etablering af en struktureret og planlagt tilgang til incident management med fokus på policy, planlægning, roller, dokumentation og læring. ISO/IEC 27035-2 uddyber kravene til planlægning, Incident Management Teams (IMT), relationer, træning og governance. NIST CSF 2.0 placerer governance som en central funktion i organisationens samlede cybersikkerhedsstyring, mens ISO 22320 understreger betydningen af entydig kommandostruktur, koordinering og fælles situationsforståelse i hændelseshåndtering.

---