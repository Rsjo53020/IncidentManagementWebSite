# Centrale begreber

## Event, alert og incident

Det er afgørende at skelne mellem de centrale begreber:

### Event
En observerbar hændelse i systemer, netværk, services eller processer. Et event er ikke nødvendigvis skadeligt.

### Alert
Et event eller en sammenstilling af events, der giver anledning til mistanke. Alerts udløses ofte af overvågning, regler, korrelation eller brugerhenvendelser.

### Incident
En hændelse, der faktisk eller med høj sandsynlighed kompromitterer fortrolighed, integritet eller tilgængelighed, eller truer forretningsdrift, data eller efterlevelse.

## Severity, impact og priority

Disse tre forveksles ofte:

- **Severity**: hvor alvorlig hændelsen er teknisk eller sikkerhedsmæssigt
- **Impact**: hvilken forretningsmæssig konsekvens hændelsen har
- **Priority**: hvor hurtigt og med hvilke ressourcer hændelsen skal håndteres

## Triage

Triage er den indledende vurdering, hvor man afgør:

- om noget er et incident
- hvilken type incident der er tale om
- hvor kritisk det er
- hvem der skal involveres
- hvilke første handlinger der skal udføres

## Containment, eradication og recovery

### Containment
Tiltag der begrænser skade og spredning, fx netværksisolering, kontolåsning eller blokering af indikatorer.

### Eradication
Fjernelse af den bagvedliggende årsag, fx malware, persistence, kompromitterede konti eller sårbare konfigurationer.

### Recovery
Sikker genetablering af drift og tillid til miljøet, inklusive validering af at kompromitteringen ikke fortsætter.

## Lessons learned

Lessons learned er ikke blot et afsluttende møde. Det er en struktureret læringsproces, som skal forbedre:

- teknologi
- processer
- ansvar og samspil
- træning
- playbooks
- kontrolmiljø

## Evidens og chain of custody

Når data kan få juridisk, disciplinær eller revisionsmæssig betydning, skal organisationen kunne dokumentere:

- hvem der indsamlede data
- hvornår data blev indsamlet
- hvordan data blev sikret mod ændring
- hvor data blev opbevaret
- hvem der har haft adgang

Dette er centralt ved forensics og alvorlige hændelser.
