# Inddæmning, eradikering og recovery

## Inddæmning

Containment handler om at begrænse videre skade, uden at organisationen mister kritisk viden eller skaber unødig forretningsforstyrrelse.

### Eksempler

- isolering af endpoint
- blokering af IoC'er
- deaktivering af konto
- segmentering eller netværksbegrænsning
- stop af ondsindet proces eller tjeneste

## Strategiske valg

Organisationen skal ofte balancere mellem:

- hurtig skadebegrænsning
- bevaring af spor og evidens
- påvirkning af drift
- risiko for at angriber ændrer adfærd

## Eradication

Eradication handler om at fjerne årsagen til hændelsen.

Det kan omfatte:

- fjernelse af malware eller persistence
- patching af sårbarhed
- reset af credentials og sessions
- ændring af konfigurationer
- fjernelse af uautoriserede konti, nøgler eller regler

## Recovery

Recovery er mere end at tænde systemet igen. Recovery skal sikre, at organisationen kan stole på miljøet.

### Typiske aktiviteter

- genetablering fra kendt god kilde
- genudrulning eller rebuilding
- validering af logs og telemetri
- forstærket overvågning efter genstart
- verifikation med system- og procesejere

## Beslutningskriterier før recovery

- kompromittering er forstået tilstrækkeligt
- resterende risici er accepteret eller reduceret
- relevante data er bevaret
- systemejer og driftsansvarlig er involveret
- kommunikation er afstemt

## Faldgruber

- recovery uden root cause-forståelse
- konti genåbnes før identitetslaget er renset
- miljøet re-infekteres fra samme årsag
- ændringer dokumenteres ikke
