# Generisk incident management-plan

## Formål

Denne side beskriver en overordnet generisk plan, som kan anvendes som udgangspunkt i undervisning eller som organisatorisk baseline.

## Fase 1 - Styringsgrundlag

Organisationen skal have:

- en godkendt incident response policy
- en incident management-plan
- klassifikation af hændelsestyper og severity-niveauer
- klare rapporteringsveje
- kontaktlister og eskalationsmatrice
- minimumskrav til logning, evidens og dokumentation

## Fase 1 - Forberedelse

Forberedelse omfatter:

- roller og ansvar
- tekniske logkilder og overvågning
- playbooks for typiske scenarier
- øvelser og træning
- værktøjer til ticketing, cases og kommunikation
- aftaler med leverandører og tredjeparter
- kriterier for kriseledelse og ekstern kommunikation

## Fase 2 - Detektion og registrering

Mulige inputkilder:

- SIEM og EDR
- brugermeldinger
- driftsalarmer
- sårbarhedsfund
- tredjepartsvarsler
- cloud-telemetri
- CERT/CIRT-notifikationer

Ved registrering skal der som minimum noteres:

- tidspunkt
- kilde
- berørte aktiver
- indledende observationer
- ansvarlig sagsbehandler
- foreløbig severity

## Fase 3 - Triage og vurdering

Følgende beslutninger træffes:

1. Er dette et incident eller et almindeligt driftsproblem?  
2. Hvilken type incident er der tale om?  
3. Hvilken forretningsmæssig og teknisk påvirkning ses?  
4. Skal hændelsen eskaleres?  
5. Skal beviser bevares straks?  

## Fase 3 + 4 - Analyse og respons

Incident teamet udfører:

- analyse af scope og årsag
- identifikation af kompromitterede aktiver
- containment-tiltag
- koordinering med ejere og drift
- vurdering af juridiske, kontraktuelle og regulatoriske forhold

## Fase 4 - Recovery

Recovery må først ske kontrolleret, når organisationen har:

- tilstrækkelig viden om årsag og scope
- plan for genetablering
- validering af at kompromittering ikke fortsætter
- aftalt kommunikation til interessenter

## Fase 5 - Lukning og læring

Ved afslutning skal der mindst være:

- hændelsesrapport
- tidslinje
- vurdering af root cause
- vurdering af impact
- anbefalede forbedringstiltag
- ansvarlige og deadlines for opfølgning

## Kompakt procesmodel

```text
Forberedelse -> Detektion -> Registrering -> Triage -> Analyse -> Containment -> Eradication -> Recovery -> Lukning -> Lessons Learned
```

## Minimumsartefakter

En moden generisk model bør have disse artefakter:

- policy
- plan
- playbooks
- severity-model
- kommunikationsplan
- evidenslog
- incident report-skabelon
- lessons learned-skabelon
