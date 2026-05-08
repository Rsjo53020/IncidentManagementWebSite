function initIncidentDiagram() {
  const content = {
    iso22320: {
      layer: "Governance & Coordination Layer",
      title: "ISO 22320 — Krisehåndtering",
      body: `
        <div class="modal-section">
          <p>
            ISO 22320 er en international standard for krisehåndtering med fokus på ledelse,
            kontrol og koordinering under kriser. Den bliver relevant, når en hændelse eskalerer
            ud over én organisations grænser og kræver tværgående indsats.
          </p>
        </div>

        <div class="modal-section">
          <h3>Kerneområder</h3>
          <ul class="info-list">
            <li>
              <strong>Kommando- og kontrolstrukturer</strong>
              Definition af klare autoritets- og beslutningshierarkier under pres.
            </li>
            <li>
              <strong>Koordination på tværs af organisationer</strong>
              Flere myndigheder, beredskaber, private aktører og NGO’er kan skabe et fælles operationsbillede og undgå dobbeltarbejde.
            </li>
            <li>
              <strong>Informationsstyring</strong>
              Sikrer at situationsinformation deles i rette format, hyppighed og kanal.
            </li>
            <li>
              <strong>Operativ planlægning</strong>
              Understøtter dynamisk planlægning under usikkerhed, tidspres og ufuldstændig information.
            </li>
          </ul>
        </div>

        <div class="modal-section">
          <h3>Placering i arkitekturen</h3>
          <ul class="flow-list">
            <li>Sikkerhedsadvarsel → NIST 800-61 håndterer den operationelt</li>
            <li>Formel hændelse → ISO 27035 styrer livscyklussen</li>
            <li>Krise på tværs af organisationer → ISO 22320 leverer koordineringsrammen</li>
          </ul>
          <p>
            ISO 22320 dækker ikke de tekniske detaljer i cybersikkerhedsindsatsen.
            Den handler om organisatorisk myndighed, kriseledelse og koordinering.
          </p>
        </div>
      `
    },

    iso27035: {
      layer: "Process & Management Layer",
      title: "ISO 27035 — Hændelseshåndtering",
      body: `
        <div class="modal-section">
          <p>
            ISO 27035 er standarden for styring af informationssikkerhedshændelser.
            Hvor NIST 800-61 er mere operationel, beskriver ISO 27035 hændelseshåndtering
            som en organisatorisk proces og et program.
          </p>
        </div>

        <div class="modal-section">
          <h3>Hoveddele</h3>
          <ul class="info-list">
            <li>
              <strong>Del 1 — Principper og proces</strong>
              Definerer begreber, roller og den overordnede femfasede model:
              planlægning, detektion, vurdering, respons og læring.
            </li>
            <li>
              <strong>Del 2 — Planlægning og forberedelse</strong>
              Beskriver politikker, procedurer, teamstruktur, kommunikationskanaler,
              træning og ledelsesforankring.
            </li>
            <li>
              <strong>Del 3 — ICT-hændelsesrespons</strong>
              Går tættere på den operationelle håndtering: detektion, analyse,
              triage, inddæmning, udryddelse, genopretning og rapportering.
            </li>
            <li>
              <strong>Del 4 — Koordinering</strong>
              Beskriver koordinering mellem flere organisationer ved større eller tværgående hændelser.
            </li>
          </ul>
        </div>

        <div class="modal-section">
          <h3>Det særlige ved ISO 27035</h3>
          <ul class="info-list">
            <li>
              <strong>Rapporteringskæde</strong>
              Sikrer at hændelser bevæger sig fra frontpersonale til ledelse med tydelige eskaleringstærskler.
            </li>
            <li>
              <strong>Tværfunktionel involvering</strong>
              Juridisk afdeling, HR, kommunikation og ledelse får definerede roller.
            </li>
            <li>
              <strong>Kontinuerlig forbedring</strong>
              Erfaringer fra hændelser føres tilbage til politikker, procedurer og kontroller.
            </li>
          </ul>
        </div>
      `
    },

    nist80061: {
      layer: "Operational Response Layer",
      title: "NIST SP 800-61 — Hændelsesrespons",
      body: `
        <div class="modal-section">
          <p>
            NIST SP 800-61 beskriver den praktiske og operationelle håndtering af cybersikkerhedshændelser.
            Den fokuserer på, hvordan organisationen opdager, analyserer, inddæmmer og genopretter efter hændelser.
          </p>
        </div>

        <div class="modal-section">
          <h3>Faser</h3>
          <ul class="info-list">
            <li>
              <strong>Forberedelse</strong>
              Etablering af roller, værktøjer, kommunikationsplaner, logning og overvågning.
            </li>
            <li>
              <strong>Detektion og analyse</strong>
              Identifikation, prioritering, klassifikation og dokumentation af hændelser.
            </li>
            <li>
              <strong>Inddæmning, udryddelse og genopretning</strong>
              Begrænsning af skade, fjernelse af truslen og sikker tilbagevenden til normal drift.
            </li>
            <li>
              <strong>Aktiviteter efter hændelsen</strong>
              Evaluering, lessons learned og forbedring af beredskab.
            </li>
          </ul>
        </div>

        <div class="modal-section">
          <h3>Rolle i arkitekturen</h3>
          <p>
            NIST 800-61 udgør udførelseslaget. Det omsætter alarmer og tekniske observationer
            til konkret respons og overdrager til ISO 27035, når hændelsen skal styres formelt
            gennem hele sin organisatoriske livscyklus.
          </p>
        </div>
      `
    },

    nist80053: {
      layer: "Controls & Capability Layer",
      title: "NIST SP 800-53 — Sikkerhedskontroller",
      body: `
        <div class="modal-section">
          <p>
            NIST SP 800-53 definerer sikkerheds- og privatlivskontroller, der udgør fundamentet
            for en organisations incident management-kapabilitet.
          </p>
        </div>

        <div class="modal-section">
          <h3>Lag i arkitekturen</h3>
          <ul class="info-list">
            <li>
              <strong>Kontroller og kapacitet</strong>
              Adgangsstyring, logning, overvågning, kryptering og øvrige kontroller, der gør det muligt at opdage og reagere.
            </li>
            <li>
              <strong>Operationel reaktion</strong>
              NIST 800-61 bruger kontrollerne som input til praktisk hændelsesrespons.
            </li>
            <li>
              <strong>Processer og ledelse</strong>
              ISO 27035 styrer hændelsens livscyklus, rapportering, klassifikation og læring.
            </li>
            <li>
              <strong>Styring og koordinering</strong>
              ISO 22320 aktiveres, når hændelsen bliver til en krise eller kræver tværgående koordinering.
            </li>
          </ul>
        </div>

        <div class="modal-section">
          <h3>Integration</h3>
          <ul class="info-list">
            <li>
              <strong>Vertikal eskalering</strong>
              Alarm → operationel respons → hændelsesproces → krisestyring.
            </li>
            <li>
              <strong>Feedback-sløjfer</strong>
              Erfaringer fra hændelser forbedrer kontroller, procedurer og styring.
            </li>
            <li>
              <strong>Fælles terminologi</strong>
              Begreber som kritisk alarm, P1-hændelse, alvorlig hændelse og krise skal hænge sammen.
            </li>
          </ul>
        </div>
      `
    },

    core: {
      layer: "Integreret kapabilitet",
      title: "Enterprise Incident Management Capability",
      body: `
        <div class="modal-section">
          <p>
            Den samlede kapabilitet opstår, når standarderne forbindes som lag:
            kontroller, operationel respons, organisatorisk hændelseshåndtering og krisekoordinering.
          </p>
        </div>

        <div class="modal-section">
          <h3>Samlet funktion</h3>
          <ul class="info-list">
            <li>
              <strong>NIST 800-53</strong>
              Skaber de tekniske og organisatoriske kontroller.
            </li>
            <li>
              <strong>NIST 800-61</strong>
              Beskriver den praktiske respons på cybersikkerhedshændelser.
            </li>
            <li>
              <strong>ISO 27035</strong>
              Styrer hændelsen som proces, livscyklus og ledelsesdisciplin.
            </li>
            <li>
              <strong>ISO 22320</strong>
              Håndterer kriser og koordinering på tværs af organisationer.
            </li>
          </ul>
        </div>
      `
    }
  };

  const overlay = document.getElementById("modal-overlay");
  const closeButton = document.getElementById("modal-close");

  if (!overlay || !closeButton) return;

  function showInfo(key) {
    const c = content[key];
    if (!c) return;

    document.getElementById("modal-layer").textContent = c.layer;
    document.getElementById("modal-title").textContent = c.title;
    document.getElementById("modal-body").innerHTML = c.body;

    overlay.classList.add("active");
  }

  function closeModal() {
    overlay.classList.remove("active");
  }

  document.querySelectorAll(".node-box").forEach(function (node) {
    if (node.dataset.bound === "true") return;

    node.dataset.bound = "true";

    node.addEventListener("click", function () {
      showInfo(node.dataset.info);
    });

    node.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showInfo(node.dataset.info);
      }
    });
  });

  closeButton.onclick = closeModal;

  overlay.onclick = function (e) {
    if (e.target === overlay) closeModal();
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", initIncidentDiagram);

if (typeof document$ !== "undefined") {
  document$.subscribe(initIncidentDiagram);
}