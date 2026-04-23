# Centrale begreber

## Event, Alert og Incident

En præcis begrebsafklaring er fundamental for effektiv hændelseshåndtering. Uden et fælles sprog opstår der hurtigt fejlklassifikation, forkert prioritering og ineffektiv respons.

### Event  
En **observerbar hændelse** i systemer, netværk eller processer.  
Et event er neutralt og indikerer ikke nødvendigvis en sikkerhedstrussel.

> Eksempel: Login, systemændring eller netværkstrafik

---

### Alert  
Et **indikatorbaseret signal**, der indikerer potentiel unormal eller mistænkelig aktivitet.  
Alerts genereres typisk via overvågningsværktøjer (SIEM, EDR) eller korrelationsregler.

> Alerts kræver altid validering – de er hypoteser, ikke fakta

---

### Incident  
En **bekræftet eller højt sandsynlig sikkerhedshændelse**, der kompromitterer eller truer:

- Fortrolighed (Confidentiality)  
- Integritet (Integrity)  
- Tilgængelighed (Availability)  

> Incident = når risiko bliver til reel påvirkning eller konkret trussel

---

## Severity, Impact og Priority

Disse tre dimensioner er centrale i styring og beslutningstagning – og bliver ofte fejlagtigt blandet sammen.

| Begreb     | Fokus                     | Spørgsmål det besvarer |
|------------|--------------------------|------------------------|
| **Severity** | Teknisk alvor            | Hvor slemt er det teknisk/sikkerhedsmæssigt? |
| **Impact**   | Forretningspåvirkning    | Hvad betyder det for forretningen? |
| **Priority** | Respons og handling      | Hvor hurtigt skal vi reagere – og med hvilke ressourcer? |

> **Vigtigt:** Priority er en funktion af *både* severity og impact – ikke en selvstændig vurdering.

---

## Triage

Triage er den **første analytiske beslutningsfase** i incident response-processen.

Formålet er at skabe hurtig klarhed og sikre korrekt håndtering fra start.

### Triage omfatter:

- Klassifikation: *Er dette et incident eller ej?*  
- Kategorisering: *Hvilken type hændelse er det?*  
- Kritikalitet: *Hvor alvorligt er det?*  
- Eskalation: *Hvem skal involveres?*  
- Initial respons: *Hvilke handlinger skal iværksættes nu?*  

> Effektiv triage reducerer responstid og begrænser skade markant

---

## Containment, Eradication og Recovery

Disse tre faser udgør kernen i den operationelle håndtering.

### Containment  
**Begrænsning af skade og spredning**

Typiske tiltag:
- Isolering af systemer  
- Blokering af IP’er/domæner  
- Deaktivering af konti  

---

### Eradication  
**Fjernelse af root cause**

Typiske tiltag:
- Fjernelse af malware  
- Lukning af sårbarheder  
- Fjernelse af persistence mechanisms  

---

### Recovery  
**Sikker genetablering af drift**

Omfatter:
- Gendannelse af systemer  
- Validering af integritet  
- Overvågning for reinfektion  

> Recovery handler ikke kun om drift – men om **tillid til miljøet**

---

## Lessons Learned

Lessons learned er en **kontinuerlig forbedringsmekanisme**, ikke blot en afsluttende aktivitet.

Formålet er at styrke organisationens samlede sikkerhedsniveau.

### Fokusområder:

- Teknologi (detektion, logs, tooling)  
- Processer (playbooks, workflows)  
- Organisation (roller, ansvar, samarbejde)  
- Kompetencer (træning og awareness)  
- Governance (kontroller og compliance)

> Understøtter en moden risk management tilgang (NIST SP 800-53)

---

## Evidens og Chain of Custody

Ved alvorlige hændelser er korrekt håndtering af evidens afgørende – særligt ved:

- Juridiske sager  
- Interne disciplinærsager  
- Revision og compliance  

### Chain of Custody sikrer dokumentation for:

- Hvem der indsamlede data  
- Hvornår det blev gjort  
- Hvordan integriteten er sikret  
- Hvor data er opbevaret  
- Hvem der har haft adgang  

> Uden korrekt chain of custody kan evidens miste sin værdi