# Roller, ansvar og eskalation

## Hvorfor er roller afgørende?

Mange incident-forløb mislykkes ikke på grund af manglende teknologi, men på grund af uklare beslutningsrettigheder. Derfor skal roller og mandat være kendt før en hændelse opstår.

## Centrale roller

### Incident Manager / Incident Lead
Ansvarlig for koordinering, prioritering, status og beslutningsoplæg.

### Incident Handlers / Analysteams
Udfører triage, analyse, dataindsamling og teknisk respons.

### System- og serviceejere
Bidrager med viden om berørte aktiver, forretningskritikalitet og godkendelse af driftsnære ændringer.

### Drift / Infrastruktur / Cloud teams
Udfører mange containment- og recovery-aktiviteter.

### Ledelse
Træffer beslutninger ved høj impact, fx nedlukning, ekstern kommunikation eller aktivering af kriseberedskab.

### Jura, HR og Kommunikation
Inddrages efter behov ved persondata, medarbejdersager, kontraktforhold eller mediehåndtering.

## Eksempel på RACI-lignende rollefordeling
RACI (Responsible, Accountable, Consult, Inform)

| Aktivitet | Incident Lead | Analyst | Driftsansvarlig | Systemejer | Ledelse |
|---|---|---:|---:|---:|---:|
| Registrere incident | A | R | C | I | I |
| Udføre triage | A | R | C | C | I |
| Godkende større containment | C | C | R | C | A |
| Beslutte ekstern kommunikation | C | I | I | C | A |
| Godkende recovery til drift | C | C | R | A | I |
| Godkende lessons learned-plan | A | C | C | C | I |

## Eskalation

Eskalation bør ske efter faste kriterier, fx:

- påvirkning på kritiske tjenester
- mistanke om databrud
- lateral movement eller privilege escalation
- regulatoriske eller kontraktuelle krav
- offentlig eksponering eller medieinteresse
- tvivl om scope eller utilstrækkelige ressourcer

## Beslutningspunkter der bør være afklaret på forhånd

- Hvem må isolere en server eller konto?  
- Hvem må afbryde produktion eller netværkssegmenter?  
- Hvem beslutter anmeldelse eller rapportering?  
- Hvem godkender genetablering?  
- Hvem ejer opfølgning på forbedringstiltag?  

## Praktisk anbefaling

Lav altid en **escalation matrix** med kontaktoplysninger, backup-roller, tidskrav og beslutningsmandat.
