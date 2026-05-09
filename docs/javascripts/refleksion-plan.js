function initReflectionPlanDiagram() {
  const reflectionContent = {
    uge7: {
      title: "Uge 7 – Valg af emneområde",
      body: `
        <p>Den første uge brugte jeg på at afklare, hvilket emne jeg ønskede at arbejde med. Jeg overvejede særligt to områder:</p>
        <ul>
          <li>Kommunikation af sikkerhed i organisationer, herunder hvordan informationssikkerhed kan forankres i organisationens kultur og daglige praksis.</li>
          <li>Hændelseshåndtering før, under og efter en sikkerhedshændelse.</li>
        </ul>
        <p>Jeg oplevede tidligt, at begge emner interesserede mig fagligt, hvilket gjorde beslutningsprocessen vanskelig. Refleksionen fra denne uge var, at jeg havde svært ved at afgrænse mig fagligt, fordi jeg ønskede at arbejde med flere problemstillinger samtidigt. Det blev samtidig tydeligt for mig, hvor vigtigt det er at definere et klart fokus tidligt i et projektforløb.</p>
      `
    },

    uge8: {
      title: "Uge 8 – Sparring med vejleder",
      body: `
        <p>Jeg drøftede begge emner med min vejleder og fik sparring på mine idéer og muligheder. Selvom vejledningen gav mig mere indsigt i emnernes potentiale, var jeg stadig ikke afklaret omkring mit endelige valg. Derfor begyndte jeg at arbejde på begge spor parallelt.</p>
        <p>Denne beslutning medførte en unødvendig stor arbejdsbelastning. Jeg brugte meget tid på at undersøge og udvikle to forskellige retninger samtidig, hvilket gjorde det sværere at skabe struktur og fremdrift. Erfaringen lærte mig, at manglende prioritering tidligt i et projekt kan skabe ineffektivitet senere i processen.</p>
      `
    },

    uge9: {
      title: "Uge 9 – Fastlåst og svært ved at begrænse mig",
      body: `
        <p>Jeg arbejdede nu i flere parallelle spor:</p>
        <ul>
          <li>Jeg begyndte at simulere et ransomware-angreb ved hjælp af Purple Kali på en ældre pc i et lukket testmiljø. Formålet var at opnå praktisk erfaring med hændelseshåndtering og forstå angriberens perspektiv.</li>
          <li>Samtidig begyndte jeg at udvælge relevant litteratur om incident management og informationssikkerhed.</li>
          <li>Derudover deltog jeg i interne møder i Bankdata omkring nye sikkerhedstiltag og organisationens kommunikation heraf.</li>
        </ul>
        <p>Efter møderne noterede jeg observationer og refleksioner, hvor jeg blandt andet sammenholdt organisationens tilgang med mine erfaringer fra Forsvaret. Her blev jeg særligt opmærksom på betydningen af tydelig kommunikation, fælles forståelse og organisatorisk koordinering i sikkerhedsarbejde.</p>
        <p>Denne uge lærte mig værdien af praksisnære observationer. Jeg oplevede, hvordan teori og praksis ofte adskiller sig, og hvordan organisatoriske forhold spiller en lige så stor rolle som tekniske løsninger i hændelseshåndtering.</p>
      `
    },

    uge10: {
      title: "Uge 10 – Beslutningen",
      body: `
        <p>I denne uge begyndte projektets retning for alvor at falde på plads. Jeg begyndte at lytte til podcasten <em>Risiko Radio</em> samt <em>Operation Pellegrino</em> fra Zetland. Begge podcasts gav indblik i virkelige hændelser og organisatoriske konsekvenser af sikkerhedshændelser, hvilket styrkede min motivation for at arbejde med incident management.</p>
        <p>Mit Purple Kali-testmiljø var nu færdigt, og jeg kunne demonstrere et ransomware-angreb, hvor filer blev krypteret og efterfølgende dekrypteret ved hjælp af en nøgle. Jeg forsøgte samtidig at efterligne adfærd fra trusselsaktøren Sandworm Team fra MITRE ATT&amp;CK-frameworket.</p>
        <p>Derudover begyndte jeg at udvikle min hjemmeside i Markdown med versionsstyring. Jeg startede på GitLab.io, men valgte senere at flytte projektet til GitHub, fordi jeg havde mere erfaring med platformen. Her lærte jeg, hvor vigtigt det er at vælge værktøjer, som understøtter ens arbejdsproces, fremfor at bruge unødvendig tid på tekniske barrierer.</p>
      `
    },

    uge11: {
      title: "Uge 11 – Hurtigt ud af starthullerne",
      body: `
        <p>Selvom den indledende beslutningsproces havde forsinket mig, begyndte projektet nu at tage form. Min mindmap og projektstruktur gav mig et overblik over de elementer, jeg skulle igennem.</p>
        <p>Jeg oplevede dog også en vigtig læring omkring risikohåndtering. Mit testmiljø forblev ikke isoleret i den virtuelle maskine, hvilket resulterede i, at hele min pc blev krypteret. Heldigvis havde jeg taget backup af vigtige filer.</p>
        <p>Denne oplevelse gav mig en langt større respekt for operational security og behovet for kontrollerede testmiljøer. Det blev samtidig et konkret eksempel på, hvorfor backup, segmentering og risikovurdering er afgørende elementer i hændelseshåndtering.</p>
      `
    },

    uge12: {
      title: "Uge 12 – Vejledning om hjemmeside og målgruppe",
      body: `
        <p>Jeg modtog vejledning omkring struktur, design og formidling på min hjemmeside. Fokus var blandt andet på:</p>
        <ul>
          <li>Struktur og navigation</li>
          <li>Visuel opbygning af et hændelsesforløb</li>
          <li>Tilpasning til målgruppen</li>
          <li>Forbedringer af brugeroplevelsen</li>
        </ul>
        <p>Under vejledningen blev det tydeligt, at jeg havde skrevet til en alt for teknisk målgruppe. Jeg havde antaget, at læseren havde stor faglig forståelse for området, men vejledningen tydeliggjorde, at målgruppen skulle forstås som “laveste fællesnævner”.</p>
        <p>Dette medførte en omfattende restrukturering af hjemmesiden. Refleksionen herfra var, at faglig formidling ikke handler om at demonstrere viden, men om at gøre komplekse emner forståelige og anvendelige for modtageren.</p>
      `
    },

    uge13: {
      title: "Uge 13 – Praktiske erfaringer og manglende elementer",
      body: `
        <p>Jeg fik mulighed for at observere håndtering af reelle sikkerhedshændelser i praksis. Dette gav værdifulde erfaringer, som jeg kunne sammenholde med min egen generiske hændelsesplan.</p>
        <p>En vigtig observation var organisationers anvendelse af NIST CSF Tier-modellen. Jeg oplevede, at flere afdelinger anvendte Tier-niveauer som et mål i sig selv fremfor som et refleksionsværktøj til risikobaserede prioriteringer. Denne observation gav mig en bedre forståelse af, hvordan organisatoriske faktorer kan påvirke implementeringen af sikkerhedsrammeverk.</p>
        <p>Jeg reflekterede meget over, hvordan misforståelser omkring frameworks kan føre til ressourcespild og fokus på dokumentation fremfor reel risikoreduktion. Dette understregede for mig vigtigheden af fælles forståelse og tværgående kommunikation i organisationer.</p>
        <p>Jeg oplevede samtidig udfordringer med at finde relevant litteratur. Internettet indeholder store mængder materiale om incident management, men det var vanskeligt at identificere kilder med tilstrækkelig faglig dybde. Efter sparring med min vejleder kontaktede jeg UCL Odense Bibliotek for adgang til ISO 27035-standarderne.</p>
      `
    },

    uge14: {
      title: "Uge 14 – Kobling mellem teori og praksis",
      body: `
        <p>Jeg fortsatte deltagelsen i praksisnære incident management-forløb og integrerede mine observationer i både hjemmeside og generisk model.</p>
        <p>Mit fokus begyndte særligt at bevæge sig mod de afsluttende faser af hændelseshåndtering, herunder:</p>
        <ul>
          <li>Recovery</li>
          <li>Lessons learned</li>
          <li>Kommunikation</li>
          <li>Kontinuerlig forbedring</li>
        </ul>
        <p>Her kunne jeg tydeligt se sammenhængen mellem teori og praksis, særligt der hvor læring og forbedring er centrale elementer i processen.</p>
        <p>Jeg begyndte samtidig at reflektere mere kritisk over forskellen mellem teori og praksis. Mange processer ser logiske ud i standarder, men fungerer anderledes under tidspres og organisatoriske hensyn.</p>
      `
    },

    uge15: {
      title: "Uge 15 – Struktur, ISO-standarder og tidsstyring",
      body: `
        <p>Jeg blev opmærksom på, at jeg var markant bagud i forhold til min oprindelige projektplan. Jeg havde prioriteret observationer og praksisforståelse højere end produktionen af selve hjemmesiden.</p>
        <p>Samtidig modtog jeg endelig ISO/IEC 27035-standarderne fra biblioteket og brugte en hel weekend på at gennemgå dem. Standarderne gav mig en langt stærkere forståelse af:</p>
        <ul>
          <li>Planlægning og forberedelse</li>
          <li>Incident response-operationer</li>
          <li>Koordinering mellem organisationer</li>
          <li>Lessons learned og forbedringsprocesser</li>
        </ul>
        <p>Jeg oplevede dog også praktiske udfordringer, da jeg ikke måtte skrive eller markere direkte i standarderne. Derfor måtte alle noter skrives manuelt, hvilket gjorde arbejdsprocessen langsommere.</p>
        <p>Denne uge lærte mig vigtigheden af realistisk tidsstyring og nødvendigheden af at balancere research med produktion.</p>
      `
    },

    uge16: {
      title: "Uge 16 – Krav, struktur og realitetscheck",
      body: `
        <p>Denne uge burde have været brugt på kvalitetssikring, men jeg arbejdede stadig intensivt med omskrivning og strukturering af materialet.</p>
        <p>Jeg gennemgik derfor kravene til selvvalgt fordybelse systematisk og sammenholdt dem med det, jeg allerede havde produceret. Dette gav mig et nødvendigt overblik og gjorde det muligt at prioritere mere målrettet.</p>
        <p>Jeg lærte her, hvor vigtigt det er løbende at validere projektets fremdrift op mod krav og læringsmål fremfor kun at fokusere på det fagligt interessante.</p>
      `
    },

    uge17: {
      title: "Uge 17 – Når virkeligheden ændrer planen",
      body: `
        <p>Jeg havde lagt en realistisk, men presset plan for den sidste del af projektet. Den blev dog afbrudt, da jeg akut blev indlagt med kraftige smerter i brystet.</p>
        <p>Situationen tvang mig til at acceptere, at jeg ikke kunne gennemføre projektet efter den oprindelige tidsplan. Det var mentalt svært, fordi jeg normalt er vant til at presse mig selv igennem udfordringer.</p>
        <p>Denne oplevelse lærte mig noget vigtigt om egne begrænsninger og nødvendigheden af at prioritere helbred fremfor præstation. Jeg fik samtidig erfaring med tydelig forventningsafstemning og kommunikation med undervisere under pres.</p>
      `
    },

    uge18: {
      title: "Uge 18 – Fokus på andre forpligtelser",
      body: `
        <p>Efter udskrivelsen deltog jeg i aflevering af synopsis i et andet fag sammen med min gruppe. Mit fokus flyttede sig derfor midlertidigt fra min egen forsinkede aflevering.</p>
        <p>Jeg oplevede her betydningen af samarbejde og ansvarsfølelse i gruppearbejde, selv under personligt pres.</p>
      `
    },

    uge19: {
      title: "Uge 19 – En ulykke kommer sjældent alene",
      body: `
        <p>Efter aflevering af gruppeopgaven havde jeg planlagt at færdiggøre min egen opgave. Jeg blev dog akut indlagt igen, da symptomerne vendte tilbage.</p>
        <p>Denne afsluttende fase blev derfor præget af usikkerhed og begrænset arbejdskapacitet. På trods af dette fastholdt jeg fokus på at gennemføre projektet bedst muligt under de givne omstændigheder.</p>
      `
    }
  };

  const overlay = document.getElementById("reflection-modal-overlay");
  const closeButton = document.getElementById("reflection-modal-close");

  if (!overlay || !closeButton) return;

  function openReflectionModal(key) {
    const item = reflectionContent[key];
    if (!item) return;

    document.getElementById("reflection-modal-title").textContent = item.title;
    document.getElementById("reflection-modal-body").innerHTML = item.body;
    overlay.classList.add("active");
  }

  function closeReflectionModal() {
    overlay.classList.remove("active");
  }

  document.querySelectorAll(".reflection-week-node").forEach(function (node) {
    if (node.dataset.bound === "true") return;
    node.dataset.bound = "true";

    node.addEventListener("click", function () {
      openReflectionModal(node.dataset.week);
    });

    node.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openReflectionModal(node.dataset.week);
      }
    });
  });

  closeButton.onclick = closeReflectionModal;

  overlay.onclick = function (e) {
    if (e.target === overlay) closeReflectionModal();
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeReflectionModal();
  });
}

document.addEventListener("DOMContentLoaded", initReflectionPlanDiagram);

if (typeof document$ !== "undefined") {
  document$.subscribe(initReflectionPlanDiagram);
}