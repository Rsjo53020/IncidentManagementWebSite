# Forensics og evidens

## Hvorfor er forensics en del af incident management?

Ikke alle hændelser kræver fuld digital efterforskning, men mange incidents kræver, at data indsamles og bevares på en måde, der understøtter:

- root cause-analyse
- beslutninger om containment og recovery
- disciplinære eller juridiske forløb
- revisionsspor og ekstern rapportering

## NIST SP 800-86 i praksis

SP 800-86 beskriver forensics som en disciplin, der bør integreres i incident response, ikke stå ved siden af den.

Det betyder blandt andet:

- at roller og ansvar skal være afklaret på forhånd
- at procedurer for dataindsamling skal være beskrevet
- at værktøjer og kompetencer skal være til rådighed
- at rapportering skal være systematisk og sporbar

## Fire grundaktiviteter

En enkel undervisningsmodel kan beskrives i fire trin:

1. **Collection** – indsamling af relevante data  
2. **Examination** – teknisk gennemgang og udtræk  
3. **Analysis** – tolkning og sammenstilling  
4. **Reporting** – dokumentation af fund, metode og konklusion  

## Hvad bør bevares?

Afhængigt af hændelsen kan følgende være relevante:

- logdata
- memory dumps
- disk images
- netværksspor
- EDR-telemetri
- cloud audit logs
- mails, tickets og tidslinjer
- ændringshistorik og scripts

## Centrale principper

### Minimer forurening af beviser
Undgå unødige ændringer på kompromitterede systemer.

### Dokumentér alle handlinger
Hvem gjorde hvad, hvornår og hvorfor.

### Bevar integritet
Brug hashes, sikre kopier og kontrolleret opbevaring.

### Tænk proportionalt
Ikke alle incidents kræver fuld imaging. Indsamling skal være risikobaseret.

## Praktisk anbefaling til site og undervisning

Indfør en fast sektion i alle playbooks:

- hvilke data der skal indsamles først
- hvem der er ansvarlig
- hvordan data sikres
- hvornår juridisk rådgivning skal inddrages
- hvordan chain of custody dokumenteres
