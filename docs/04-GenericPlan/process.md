# Proces til den generiske Incident Management-plan


Den generiske Incident Management-plan er opbygget som en samlet kapabilitet, hvor governance, proces, operationel respons og kontroller hænger sammen. Formålet er ikke kun at beskrive, hvordan en organisation reagerer på en sikkerhedshændelse, men også hvordan organisationen forbereder sig, koordinerer indsatsen, dokumenterer beslutninger og lærer af hændelsen efterfølgende.

Planen tager udgangspunkt i et samspil mellem ISO- og NIST-standarder. ISO-standarderne bidrager primært med struktur, proces, roller, ansvar og koordinering, mens NIST bidrager med risikostyring, operationelle anbefalinger og konkrete sikkerhedskontroller. Tilsammen giver standarderne et praktisk grundlag for at etablere en robust incident management-kapabilitet, der kan anvendes på tværs af organisationer, teknologier og hændelsestyper.

Diagrammet nedenfor viser, hvordan de enkelte standarder placerer sig i den samlede arkitektur. Øverst ligger styrings- og koordineringslaget, hvor ISO 22320 understøtter kriseledelse, samarbejde og fælles situationsforståelse. Herefter følger ISO/IEC 27035 som proces- og ledelsesramme for hændelseshåndtering. NIST SP 800-61 understøtter den operationelle detektion og respons, mens NIST SP 800-53 omsætter kravene til konkrete kontroller, der kan implementeres, måles og forbedres.

Figuren skal derfor læses som en konceptuel model for, hvordan en organisation kan gå fra overordnet styring til praktisk hændelseshåndtering og videre til en moden kapabilitet, hvor governance, processer, mennesker, teknologi og læring er integreret.

---

## Arkitektur: Incident Management-kapabilitet

<p class="diagram-intro">
  <strong>Klik på en standard</strong> for at læse om dens rolle i den samlede kapabilitet.
</p>

<figure class="diagram-wrapper">
  <svg viewBox="360 10 420 720" xmlns="http://www.w3.org/2000/svg">

    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#888780"
              stroke-width="1.5" stroke-linecap="round"/>
      </marker>
    </defs>

    <!-- Layer 1 -->
    <rect x="390" y="30" width="360" height="120" rx="8"
          fill="#EEEDFE" stroke="#534AB7" stroke-width="0.5"/>
    <text x="400" y="52" font-family="Arial" font-size="11" fill="#534AB7">
      Styrings- og koordineringslag
    </text>

    <g class="node-box" data-info="iso22320" role="button" tabindex="0">
      <rect x="408" y="70" width="320" height="65" rx="8"
            fill="#CECBF6" stroke="#534AB7"/>
      <text x="568" y="98" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#26215C">
        ISO 22320
      </text>
      <text x="568" y="118" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#26215C">
        Crisis coordination
      </text>
    </g>

    <!-- Layer 2 -->
    <rect x="390" y="170" width="360" height="120" rx="8"
          fill="#E6F1FB" stroke="#185FA5" stroke-width="0.5"/>
    <text x="400" y="192" font-family="Arial" font-size="11" fill="#185FA5">
      Proces- og ledelseslag
    </text>

    <g class="node-box" data-info="iso27035" role="button" tabindex="0">
      <rect x="408" y="210" width="320" height="65" rx="8"
            fill="#B5D4F4" stroke="#185FA5"/>
      <text x="568" y="238" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#042C53">
        ISO 27035
      </text>
      <text x="568" y="258" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#042C53">
        Incident lifecycle
      </text>
    </g>

    <!-- Layer 3 -->
    <rect x="390" y="310" width="360" height="120" rx="8"
          fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
    <text x="400" y="332" font-family="Arial" font-size="11" fill="#0F6E56">
      Det operationelle indsatslag
    </text>

    <g class="node-box" data-info="nist80061" role="button" tabindex="0">
      <rect x="408" y="350" width="320" height="65" rx="8"
            fill="#9FE1CB" stroke="#0F6E56"/>
      <text x="568" y="378" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#04342C">
        NIST SP 800-61
      </text>
      <text x="568" y="398" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#04342C">
        Detection &amp; response
      </text>
    </g>

    <!-- Layer 4 -->
    <rect x="390" y="450" width="360" height="120" rx="8"
          fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
    <text x="400" y="472" font-family="Arial" font-size="11" fill="#854F0B">
      Kontrol- og funktionslag
    </text>

    <g class="node-box" data-info="nist80053" role="button" tabindex="0">
      <rect x="408" y="490" width="320" height="65" rx="8"
            fill="#FAC775" stroke="#854F0B"/>
      <text x="568" y="518" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#412402">
        NIST SP 800-53
      </text>
      <text x="568" y="538" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#412402">
        Security controls
      </text>
    </g>

    <!-- Core -->
    <g class="node-box" data-info="core" role="button" tabindex="0">
      <rect x="414" y="620" width="308" height="80" rx="8"
            fill="#F1EFE8" stroke="#5F5E5A"/>
      <text x="568" y="650" text-anchor="middle" font-family="Arial"
            font-size="12" font-weight="bold" fill="#2C2C2A">
        Virksomhedens kapacitet
      </text>
      <text x="568" y="670" text-anchor="middle" font-family="Arial"
            font-size="12" fill="#2C2C2A">
        til håndtering af hændelser
      </text>
      <text x="568" y="690" text-anchor="middle" font-family="Arial"
            font-size="11" fill="#2C2C2A">
        Integrated governance, process &amp; response
      </text>
    </g>

    <!-- Arrows -->
    <line x1="568" y1="135" x2="568" y2="210"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="568" y1="275" x2="568" y2="350"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="568" y1="415" x2="568" y2="490"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="568" y1="555" x2="568" y2="620"
          stroke="#888780" stroke-width="1.5" marker-end="url(#arr)"/>

  </svg>

  <figcaption>Figur 1: Konceptuel model for incident management-kapabilitet.</figcaption>
</figure>

<div id="modal-overlay" role="dialog" aria-modal="true">
  <div id="modal">
    <button id="modal-close" aria-label="Luk">✕</button>
    <div id="modal-layer"></div>
    <div id="modal-title"></div>
    <div id="modal-body"></div>
  </div>
</div>



---
