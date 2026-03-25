# Dokumentation og auditspor

## Hvorfor dokumentation?

Dokumentation er nødvendig for:

- koordinering under hændelsen
- revisionsspor
- ledelsesrapportering
- regulatorisk dokumentation
- efterfølgende læring
- eventuel juridisk opfølgning

## Hvad bør dokumenteres løbende?

- observationer og alarmer
- beslutninger og begrundelser
- tekniske handlinger
- ændringer på systemer og konti
- indsamlede beviser
- statuskommunikation
- eskalationer
- recovery-beslutninger

## Incident record som minimum

En incident record bør som minimum rumme:

- incident-id
- kategori
- severity/priority
- ejer og ansvarlige
- berørte aktiver
- tidslinje
- handlinger
- evidensreferencer
- status og lukningsgrundlag

## Auditspor

Et stærkt auditspor gør det muligt at rekonstruere forløbet og evaluere kvaliteten af håndteringen.

## Skabelon for hændelseslog

| Tidspunkt | Handling | Udført af | Begrundelse | Reference |
|---|---|---|---|---|
| 09:14 | Konto deaktiveret | SOC analyst | Mistanke om kompromittering | INC-2026-014 |
| 09:22 | Firewall-regel indført | Netværksteam | Stoppe C2-trafik | CHG-2026-203 |
| 10:05 | Memory dump sikret | IR specialist | Forensics | EVD-2026-011 |

## God praksis

- skriv kort og præcist
- tidsstempl konsekvent
- adskil fakta fra vurdering
- link tickets, changes og evidens sammen
