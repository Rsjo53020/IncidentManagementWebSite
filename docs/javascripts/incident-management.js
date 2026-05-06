function initIncidentDiagram() {
  const content = {
    iso22320: {
      layer: "Governance & Coordination Layer",
      title: "ISO 22320 — Krisehåndtering",
      body: `
        <p>ISO 22320 er den internationale standard for krisehåndtering, der specifikt fokuserer på ledelse, kontrol og koordinering under kriser. 
        Den opererer på et andet niveau end de tre andre standarder – hvor 27035 og 800-61 omhandler håndtering af hændelser inden for en organisation, regulerer 22320, hvad der sker, når en hændelse eskalerer ud over en enkelt organisations grænser eller udvikler sig til en fuldgyldig krise, der kræver en indsats fra flere myndigheder.
        Standarden dækker fire kerneområder:</p>
        <ul>
          <li><strong>Kommando- og kontrolstrukturer</strong> – definition af klare autoritets- og beslutningshierarkier under pres. Når en krise udspiller sig, koster uklarhed om, hvem der har ansvaret, tid og menneskeliv. 22320 foreskriver, hvordan kommandoen etableres, hvordan autoritet delegeres ned ad, og hvordan beslutninger træffes, når normale organisationsstrukturer er forstyrret eller overbelastet.</li>
          <li><strong>Koordination på tværs af organisationer</strong>— standardens mest markante bidrag. Den fastlægger, hvordan flere indsatsorganisationer — offentlige myndigheder, beredskabstjenester, enheder i den private sektor og NGO’er — skaber et fælles operationsbillede og koordinerer indsatsen uden at gentage arbejdet eller arbejde mod hinanden. Dette omfatter krav til interoperabilitet, så organisationer med forskellige systemer og terminologier stadig kan kommunikere effektivt.</li>
          <li><strong>Informationsstyring</strong> — hvordan situationsinformation flyder mellem kommandoniveauer og på tværs af organisationer. Dette dækker, hvilke oplysninger der skal deles, i hvilket format, med hvilken hyppighed og gennem hvilke kanaler. Begrebet et fælles operationelt billede (COP) — et fælles, opdateret overblik over situationen — er centralt her.</li>
          <li><strong>Operativ planlægning</strong> — hvordan beredskabsplaner udvikles og tilpasses i realtid, efterhånden som en krise udvikler sig. I modsætning til planlægning før en krise (som andre standarder dækker) omhandler 22320 dynamisk planlægning under forhold med usikkerhed, ufuldstændig information og tidspres.</li>
          <li><strong>Hvor den befinder sig i arkitekturen</strong> 22320 er styrings- og koordineringslaget af en specifik grund: det aktiveres, når de tre andre lag er utilstrækkelige. En typisk eskaleringsvej ser således ud: 
          Der udløses en sikkerhedsadvarsel → 800-61 håndterer den operationelt.
          Den bliver til en formel hændelse → 27035 styrer livscyklussen
          Den udvikler sig til en krise, der påvirker flere organisationer eller kritisk infrastruktur → 22320 leverer kommandostrukturen for den tværgående organisatoriske indsats.
          I praksis betyder dette, at 22320 er relevant for scenarier som et ransomware-angreb på kritisk national infrastruktur, et databrud, der påvirker en organisations forsyningskæde, eller en cyberhændelse med fysiske konsekvenser. I disse situationer overdrager hændelsesberedskabsteamet opgaven til en krisestyringsstruktur, som ISO 22320 definerer.
          Det, den ikke dækker, er de tekniske detaljer i cybersikkerhedsindsatsen — det hører hjemme i 800-61 og 800-53. 22320 er bevidst teknologineutral; den handler om organisatorisk myndighed og koordinering, ikke om værktøjer eller kontroller.</li>
        </ul>
      `
    },
    iso27035: {
      layer: "Process & Management Layer",
      title: "ISO 27035 — Hændelseshåndtering",
      body: `<p>ISO 27035 er den internationale standard for håndtering af informationssikkerhedshændelser. Mens NIST SP 800-61 er en praktisk, operationel vejledning, har 27035 et bredere anvendelsesområde. 
      Den fastlægger, hvordan en organisation håndterer hændelser som et program snarere end blot en reaktionsprocedure. 
      Standarden er opdelt i to hoveddele:</p>
      <ul>
      <li><strong>Del 1 – Principper definerer den overordnede ramme:> - hvad en informationssikkerhedshændelse er, hvordan den adskiller sig fra en begivenhed eller en svaghed, og hvordan en moden hændelseshåndteringskapacitet ser ud. Den fastlægger den femfasede model, som resten af standarden bygger på.</li>
      <li><strong>Del 2 – Retningslinjer går i detaljer med de operationelle aspekter af hver fase:</strong>Planlægning og forberedelse — politikker, procedurer, teamstruktur (ISIRT: Information Security Incident Response Team), kommunikationskanaler og bevidstgørelsestræning. Dette er bredere end 800-61's forberedelsesfase, fordi det eksplicit inkluderer godkendelse fra ledelsen og integration med forretningskontinuitetsplanlægning.
      Detektion og rapportering — hvordan hændelser identificeres og rapporteres, herunder krav til personale på alle niveauer om at vide, hvordan og hvor de skal rapportere mistænkte hændelser. Denne vægt på en organisatorisk rapporteringskultur er noget, som 800-61 ikke behandler så eksplicit.
      Vurdering og beslutning — inddeling af, om der er tale om en hændelse, en svaghed eller en fuldgyldig hændelse, samt fastlæggelse af det passende reaktionsniveau. I denne fase klassificeres hændelserne formelt, og ansvaret fordeles.
      Reaktioner — koordinering af den tekniske og organisatoriske indsats, herunder eskaleringsprocedurer, kommunikation med interessenter og indsamling af bevismateriale med henblik på eventuelle juridiske eller disciplinære foranstaltninger.
      Erfaringer — struktureret evaluering efter hændelsen, analyse af årsagerne og inddragelse af resultaterne i forbedringer af politikker og kontrolforanstaltninger.</li>
      Det, der adskiller 27035 fra 800-61, er dens fokus på tre ting, som operationelle vejledninger ofte ikke specificerer tilstrækkeligt:
      
      Rapporteringskæden — sikring af, at hændelser kommer frem fra frontpersonalet op gennem ledelsen med definerede tærskler for eskalering
      Tværfunktionel involvering — juridisk afdeling, HR, kommunikation og den øverste ledelse har alle definerede roller, ikke kun det tekniske team
      Kontinuerlig forbedring — standarden kræver udtrykkeligt, at erfaringerne indgår i planlægnings- og forberedelsesfasen, hvilket skaber en lukket kredsløb
      
      I arkitekturen ligger 27035 over 800-61, fordi den regulerer hændelsernes livscyklus og organisatoriske dimension, mens 800-61 håndterer den tekniske udførelse inden for denne framework
      </ul>
      `
    },
    nist80061: {
      layer: "Operational Response Layer",
      title: "NIST SP 800-61 — Hændelsesrespons",
      body: `<p>NIST SP 800-61 er den amerikanske føderale regerings vejledning i håndtering af cybersikkerhedshændelser, udgivet af National Institute of Standards and Technology. Den dækker hele den operationelle livscyklus for håndtering af en cybersikkerhedshændelse og er opbygget omkring fire faser:</p>
      <ul>
      <li><strong>Forberedelse</strong> — etablering af beredskabet til at reagere på hændelser, inden noget sker. Dette omfatter sammensætning af teamet, definition af roller, udarbejdelse af kommunikationsplaner, anskaffelse af værktøjer og oprettelse af infrastruktur til logning og overvågning, så man har de nødvendige data, når en hændelse indtræffer.</li>
      <li><strong>Detektion og analyse</strong>— at erkende, at en hændelse finder sted, og forstå, hvad den går ud på. Denne fase dækker, hvordan man prioriterer alarmer, skelner mellem reelle hændelser og falske positiver, kategoriserer og prioriterer hændelser efter alvorlighed og dokumenterer resultaterne. Den adresserer også den udfordring, at mange hændelser er tvetydige i den tidlige fase — vejledningen giver heuristikker til at træffe beslutninger under usikkerhed.</li>
      <li><strong>Inddæmning, udryddelse og genopretning </strong>— at standse skaden, fjerne truslen og genoprette normal drift. Inddæmningsstrategier varierer alt efter hændelsestype (et malwareudbrud inddæmmes på en anden måde end en kompromitteret konto). Udrydning betyder at fjerne årsagen. Genopretning betyder at bringe systemerne sikkert online igen og kontrollere, at de er rene.</li>
      <li><strong>Aktiviteter efter hændelsen</strong>– fasen, hvor man drager erfaringer. Når hændelsen er afsluttet, kræver vejledningen en struktureret gennemgang: hvad der skete, hvor godt teamet reagerede, hvilke mangler der blev afsløret, og hvad der skal ændres. Dette indgår direkte i forberedelserne til den næste hændelse.</li>
      Ud over livscyklussen dækker 800-61 også koordinering med eksterne parter — retshåndhævende myndigheder, andre agenturer, leverandører og ISAC'er — og fastsætter forventninger til håndtering af bevismateriale og dokumentation, hvilket er vigtigt, hvis en hændelse har juridiske konsekvenser.
      I sammenhæng med arkitekturdiagrammet udgør 800-61 udførelseslaget: det forudsætter, at kontrollerne fra 800-53 genererer hændelser, og det overdrager til ISO 27035, når en hændelse skal spores og håndteres formelt gennem hele sin organisatoriske livscyklus.
      </ul>
      `
    },
    nist80053: {
      layer: "Controls & Capability Layer",
      title: "NIST SP 800-53 — Sikkerhedskontroller",
      body: `<p>NIST SP 800-53 definerer de konkrete sikkerhedskontroller, der udgør fundamentet for incident management-kapabiliteten. De fire lag fungerer som en indlejret afhængighedsstak — hvert lag er afhængigt af det underliggende, og tilsammen danner de en lukket kredsløb.</p>
      <ul>
      <li><strong>Kontroller og kapacitet (fundament)</strong> — NIST SP 800-53 definerer, hvilke sikkerhedskontroller der rent faktisk findes: adgangsstyring, logning, overvågning, kryptering osv. Uden disse tekniske og proceduremæssige kontroller på plads er der intet at opdage hændelser med og ingen værktøjer at reagere med. Dette er infrastrukturlaget.</li>
      <li><strong>Operationel reaktion (udførelse) — NIST SP 800-61 ligger oven på kontrolaget. Det forudsætter, at kontrollerne genererer hændelser og alarmer, og giver en vejledning i, hvad man skal gøre med dem: hvordan man opdager, prioriterer, inddæmmer, udrydder og genopretter efter hændelser. Det er det praktiske lag.</strong></li>
      <li><strong>Processer og ledelse (livscyklus)</strong> — ISO 27035 løfter perspektivet et niveau højere. Hvor 800-61 handler om at udføre en reaktion, regulerer 27035 hele hændelsens livscyklus: hvordan hændelser defineres, klassificeres, rapporteres, spores, lukkes og føres tilbage til forbedring. Den håndterer også tværgående koordinering og dokumentation — ting, der betyder mindre i heden af en enkelt hændelse, men som er afgørende for at styre hændelser som et program over tid.</li>
      <li><strong>Styring og koordinering (myndighed)</strong> — ISO 22320 befinder sig øverst, fordi den opererer på krise- og tværgående organisationsniveau. Den definerer, hvem der har myndighed til at træffe beslutninger, når en hændelse eskalerer ud over et enkelt team eller en organisation, hvordan kommandostrukturer fungerer under pres, og hvordan koordinering foregår med eksterne parter som tilsynsmyjndigheder, partnere eller beredskabstjenester.</li>
      Integrationen i en virksomheds kapacitet sker gennem tre mekanismer:
      Vertikal eskalering — en alarm (kontrolniveau) udløser en reaktionsprocedure (operativt niveau), som, hvis den er alvorlig nok, aktiverer hændelseslivscyklusprocessen (ledelsesniveau), som, hvis den udvikler sig til en krise, aktiverer koordineringsrammen (styringsniveau). Hvert niveau har en tærskel, der overdrager til det niveau, der ligger over det.
      Feedback-sløjfer — styringslaget fastlægger retningslinjer og prioriteter, der videreføres nedad og bestemmer, hvordan proceslaget klassificerer hændelser, hvilket igen bestemmer, hvad driftslaget prioriterer, og dermed hvad kontrol- og kapacitetslaget investerer i. Strukturen fungerer top-down med hensyn til strategi og bottom-up med hensyn til udførelse.
      Fælles terminologi — det egentlige integrationsarbejde består i at sikre, at det, kontrolniveauet kalder en »kritisk alarm«, svarer til det, det operationelle niveau kalder en »P1-hændelse«, hvilket svarer til det, ledelsesniveauet kalder en »alvorlig hændelse«, hvilket svarer til det, styringsniveauet kalder en »krise«. Uden denne afstemning forbliver niveauerne adskilte, selvom alle fire standarder formelt er vedtaget.
      </ul>
      `
    },
    core: {
      layer: "Integreret kapabilitet",
      title: "Enterprise Incident Management Capability",
      body: `<p>Kapabiliteten er resultatet af en bevidst sammenkobling af standarderne, så hvert lag styrker de andre.</p>
      <ul>
      <li><strong>Kommando- og kontrolstrukturer</strong></li>
      <li><strong>Kommando- og kontrolstrukturer</strong></li>
      </ul>
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