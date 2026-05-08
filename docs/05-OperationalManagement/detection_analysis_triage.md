# Detektion, analyse og triage

## Formål

Målet i den tidlige fase er at skabe tilstrækkelig situationsforståelse til at kunne træffe de rigtige første beslutninger hurtigt.

## Primære spørgsmål i triage

- Hvad er observeret?
- Hvilke aktiver er berørt?
- Hvad er den sandsynlige hændelsestype?
- Hvad er det værst tænkelige scope lige nu?
- Hvilken business impact er sandsynlig?
- Hvilke handlinger haster mest?

## Praktisk triagemodel

### Trin 1: Bekræft signalet
Verificér om alerten er reel, falsk positiv eller utilstrækkelig.

### Trin 2: Klassificér hændelsen
Placer hændelsen i en kategori, fx konto, malware, dataeksponering eller driftsforstyrrelse.

### Trin 3: Vurdér impact
Se på kritikalitet, eksponering, antal berørte aktiver og forretningspåvirkning.

### Trin 4: Beslut næste skridt
Eskalér, indsamle data, isolér, overvåg videre eller luk som ikke-incident.

## Datakilder til analyse

- endpoint logs
- authenticationslogs
- firewall og proxy
- cloud audit trails
- mail- og identity-platforme
- netværksflows
- sårbarhedsdata
- konfigurations- og ændringsdata

## Tegn på dårlig triage

- hændelser eskaleres for sent
- containment iværksættes uden scope-forståelse
- beviser overskrives
- systemejere informeres for sent
- tickets mangler tidslinje og begrundelser

## God praksis

Brug faste beslutningsfelter i ticket eller case:

- mistænkt incident type
- berørte aktiver
- indledende indikatorer
- foreløbig severity
- anbefalet næste handling
- behov for evidenssikring
