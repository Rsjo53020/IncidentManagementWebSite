document$.subscribe(() => {
  const STORAGE_KEY = "im-checklist-v1";

  // Indlæs gemt tilstand
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  // Gem tilstand
  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // Generer unikt ID for hvert checkbox ud fra label-tekst + index
  function getCheckboxId(checkbox) {
    const label = checkbox.closest("li")?.textContent?.trim().slice(0, 60) || "";
    return btoa(encodeURIComponent(label)).slice(0, 32);
  }

  const state = loadState();

  document.querySelectorAll(".task-list-item input[type='checkbox']").forEach(cb => {
    const id = getCheckboxId(cb);

    // Sæt gemt tilstand
    if (state[id] !== undefined) cb.checked = state[id];

    // Fjern readonly som Material sætter
    cb.removeAttribute("disabled");

    cb.addEventListener("change", () => {
      state[id] = cb.checked;
      saveState(state);
    });
  });
});