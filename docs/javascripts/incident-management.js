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
              <strong>Del 3 — Incident Response (ICT)-hændelsesrespons</strong>
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
              Sikrer at hændelser bevæger sig fra operationelt niveau til strategisk niveau i ledelsen med tydelige eskaleringstærskler.
            </li>
            <li>
              <strong>Tværfunktionel involvering</strong>
              Juridisk afdeling, Human Resources (HR), kommunikation og ledelse får definerede roller.
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
              Begreber som kritisk alarm, alvorlig hændelse og krise skal hænge sammen.
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

function initWeekPlanDiagram() {
  const weekContent = {

    uge7: {
      title: "Uge 7 – Valg af emne",
      body: `
        <p><strong>Formål:</strong> Afgrænse projektets faglige fokus</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Identificere relevante domæner inden for valgte emne.</li>
          <li>Foretage scope-afgrænsning.</li>
          <li>Reflektere over relevans i forhold til praksis og læringsmål.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Valg af scenarie.</li>
          <li>Beskrivelse af scenariet og dets relevans.</li>
          <li>Refleksion over valg og afgrænsning.</li>
          <li>Overvejelser om, hvordan scenariet kan anvendes til at illustrere centrale aspekter af emnet.</li>
        </ul>
      `
    },

    uge8: {
      title: "Uge 8 – Vejledning og konceptualisering",
      body: `
        <p><strong>Formål:</strong> Kvalificere projektets retning gennem sparring</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Præsentere idé: "reel trussel".</li>
          <li>Diskutere gennemførelse, risiko og læringsudbytte ift. valgte emne.</li>
          <li>Afklare metodisk tilgang (praktisk + teoretisk).</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Justeret projektplan efter vejledningen.</li>
          <li>Klarere konceptualisering af projektets fokus og metode.</li>
          <li>Refleksion over vejledningens input og dets betydning for projektets videre forløb.</li>
          <li>Overgang til omsætning af idé til konkret projekt.</li>
          <li>Fokus på realistisk simulation frem for ren teori.</li>
        </ul>
      `
    },

    uge9: {
      title: "Uge 9 – Opsætning af testmiljø + indledende litteraturgennemgang",
      body: `
        <p><strong>Formål:</strong> Etablere sikkert eksperimentelt miljø</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Klargøring af det materiale setup, som skal bruges til at simulere problemstillinger i projektets emne.</li>
          <li>Indledende gennemgang af relevant litteratur.</li>
          <li>Identificere centrale begreber, processer og kontroller i litteraturen, som kan anvendes i projektet.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Dokumenteret testmiljø.</li>
          <li>Noter og refleksioner over den indledende litteraturgennemgang.</li>
          <li>Identificerede nøgleelementer i litteraturen, som kan anvendes i projektet.</li>
          <li>Refleksion over, hvordan litteraturen kan informere og støtte projektets videre udvikling.</li>
          <li>Fokus på at skabe et sikkert og kontrolleret miljø for eksperimenter.</li>
          <li>Fokus på at opbygge en solid teoretisk forståelse, som kan anvendes i det videre arbejde.</li>
          <li>Overvejelser om, hvordan det indledende arbejde kan danne grundlag for den videre projektudvikling.</li>
        </ul>
      `
    },

    uge10: {
      title: "Uge 10 – Teoretisk fordybelse i litteraturen",
      body: `
        <p><strong>Formål:</strong> Opbygge solid teoretisk forståelse</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Studere de mest relevante og centrale kilder i dybden.</li>
          <li>Notere nøgleindsigter, processer og kontroller.</li>
          <li>Reflektere over, hvordan disse elementer kan anvendes i projektet.</li>
          <li>Identificere eventuelle huller i litteraturen, som projektet kan adressere.</li>
          <li>Overveje, hvordan den teoretiske forståelse kan informere det praktiske arbejde i projektet.</li>
          <li>Fokus på at opbygge en dyb og nuanceret forståelse af emnet.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Noter og modeludkast baseret på den teoretiske fordybelse.</li>
          <li>Refleksion over, hvordan den teoretiske forståelse kan anvendes i projektet.</li>
          <li>Identificerede områder, hvor projektet kan bidrage med ny indsigt eller perspektiv.</li>
          <li>Overvejelser om, hvordan den teoretiske fordybelse kan informere og støtte det videre arbejde i projektet.</li>
          <li>Fokus på at skabe en stærk teoretisk base, som kan anvendes i det praktiske arbejde.</li>
          <li>Fokus på at identificere muligheder for at bidrage med ny indsigt eller perspektiv i forhold til den eksisterende litteratur.</li>
        </ul>

        <h4>Refleksion:</h4>
        <ul>
          <li>Fokus på forståelse og anvendelse af teori.</li>
        </ul>
      `
    },

    uge11: {
      title: "Uge 11 – Påbegyndelse af hjemmeside (GitLab Pages)",
      body: `
        <p><strong>Formål:</strong> Strukturere vidensformidling</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Opsætning af GitLab.io site.</li>
          <li>Definere informationsarkitektur og navigation.</li>
          <li>Implementere første sider i Markdown.</li>
          <li>Reflektere over, hvordan hjemmesiden kan understøtte projektets formål og læringsmål.</li>
          <li>Overveje, hvordan hjemmesiden kan anvendes som et værktøj til at formidle viden og indsigt om emnet på en klar og tilgængelig måde.</li>
          <li>Fokus på at skabe en struktureret og logisk opbygning af hjemmesiden.</li>
          <li>Fokus på at formidle komplekse emner på en måde, som er let at forstå og anvende for målgruppen.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Grundstruktur af website med navigation.</li>
          <li>Første indholdssider i Markdown.</li>
          <li>Refleksion over hjemmesidens rolle i projektet og dens potentiale som formidlingsværktøj.</li>
          <li>Fokus på at skabe en solid og brugervenlig platform for formidling af viden og indsigt om emnet.</li>
          <li>Første skridt i at omsætte teoretisk forståelse til praksisnær formidling gennem hjemmesiden.</li>
        </ul>
      `
    },

    uge12: {
      title: "Uge 12 – Vejledning om hjemmeside",
      body: `
        <p><strong>Formål:</strong> Forbedre teknisk og visuel kvalitet</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Sparring om struktur og navigation.</li>
          <li>Sparring om visuel præsentation.</li>
          <li>Sparring om indholdsmæssig klarhed.</li>
          <li>Implementere forbedringer baseret på vejledning.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Reflektere over, hvordan vejledningen kan hjælpe med at forbedre hjemmesiden.</li>
          <li>Overveje, hvordan tekniske og visuelle forbedringer kan gøre hjemmesiden mere tilgængelig.</li>
          <li>Fokus på at skabe en hjemmeside, som både er informativ og brugervenlig.</li>
          <li>Fokus på at implementere vejledningens input på en måde, som forbedrer hjemmesidens evne til at formidle viden.</li>
        </ul>
      `
    },

    uge13_14: {
      title: "Uge 13 + 14 – Praktisk erfaring",
      body: `
        <p><strong>Formål:</strong> Observere real-world</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Deltage i mulige møder eller aktiviteter relateret til emnet i praksis.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Observere og notere relevante processer, beslutninger og kommunikation.</li>
          <li>Reflektere over, hvordan praksis stemmer overens med eller adskiller sig fra teorien og standarderne.</li>
          <li>Overveje, hvordan de observerede erfaringer kan informere og forbedre projektets model og formidling.</li>
          <li>Fokus på at skabe forbindelse mellem teori og praksis.</li>
          <li>Fokus på at identificere styrker og svagheder i den observerede praksis.</li>
        </ul>
      `
    },

    uge15: {
      title: "Uge 15 – Færdiggørelse af hjemmeside",
      body: `
        <p><strong>Formål:</strong> Afslutte hovedprodukt</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Færdiggøre indhold på hjemmesiden med fokus på klarhed.</li>
          <li>Fokus på præcision.</li>
          <li>Fokus på relevans.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Implementere eventuelle sidste tekniske eller visuelle forbedringer.</li>
          <li>Reflektere over, hvordan det færdige produkt opfylder projektets formål og læringsmål.</li>
          <li>Overveje, hvordan hjemmesiden kan anvendes som formidlingsværktøj.</li>
          <li>Fokus på at skabe et færdigt produkt, som effektivt formidler viden.</li>
          <li>Fokus på at sikre, at hjemmesiden er både informativ og brugervenlig.</li>
        </ul>
      `
    },

    uge16: {
      title: "Uge 16 – Kvalitetssikring",
      body: `
        <p><strong>Formål:</strong> Sikre alignment med krav</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Gennemgå hjemmesiden kritisk med fokus på faglig kvalitet.</li>
          <li>Fokus på akademisk kvalitet.</li>
          <li>Fokus på formidlingseffektivitet.</li>
          <li>Alignment med læringsmål og projektkrav.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Identificere eventuelle gaps eller forbedringsområder.</li>
          <li>Foretage nødvendige rettelser.</li>
          <li>Reflektere over, hvordan kvalitetssikringen har forbedret hjemmesiden.</li>
          <li>Fokus på at skabe et færdigt og kvalitetssikret produkt.</li>
        </ul>
      `
    },

    uge17: {
      title: "Uge 17 – Kilder og endelig aflevering",
      body: `
        <p><strong>Formål:</strong> Akademisk færdiggørelse</p>

        <h4>Aktiviteter:</h4>
        <ul>
          <li>Tilføje kildehenvisninger (APA).</li>
          <li>Finpudsning af indhold og formidling.</li>
          <li>Forberede endelig aflevering.</li>
          <li>Endelig gennemlæsning.</li>
          <li>Udarbejde en video med præsentation af projektet.</li>
          <li>Reflektere over hele projektforløbet.</li>
          <li>Overveje hvordan erfaringer kan anvendes i fremtidige projekter.</li>
        </ul>

        <h4>Leverancer:</h4>
        <ul>
          <li>Færdigt website.</li>
          <li>Klar til aflevering.</li>
        </ul>
      `
    }
  };

  const overlay = document.getElementById("week-modal-overlay");
  const closeButton = document.getElementById("week-modal-close");

  if (!overlay || !closeButton) return;

  function openWeekModal(key) {
    const item = weekContent[key];
    if (!item) return;

    document.getElementById("week-modal-title").textContent = item.title;
    document.getElementById("week-modal-body").innerHTML = item.body;

    overlay.classList.add("active");
  }

  function closeWeekModal() {
    overlay.classList.remove("active");
  }

  document.querySelectorAll(".week-node").forEach(function (node) {

    if (node.dataset.bound === "true") return;

    node.dataset.bound = "true";

    node.addEventListener("click", function () {
      openWeekModal(node.dataset.week);
    });

    node.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openWeekModal(node.dataset.week);
      }
    });
  });

  closeButton.onclick = closeWeekModal;

  overlay.onclick = function (e) {
    if (e.target === overlay) closeWeekModal();
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeWeekModal();
  });
}

document.addEventListener("DOMContentLoaded", initWeekPlanDiagram);

if (typeof document$ !== "undefined") {
  document$.subscribe(initWeekPlanDiagram);
}