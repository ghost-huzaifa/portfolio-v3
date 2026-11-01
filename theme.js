(() => {
  const root = document.documentElement;
  let theme = "light";

  try {
    if (localStorage.getItem("portfolio-theme") === "dark") theme = "dark";
  } catch {
    // Storage may be unavailable in private or restricted browser sessions.
  }

  function applyTheme(value) {
    root.dataset.theme = value;
    document.querySelector('meta[name="theme-color"]').content =
      value === "dark" ? "#1a1a1a" : "#ffffff";
    document
      .getElementById("theme-toggle")
      ?.setAttribute("aria-pressed", String(value === "dark"));
  }

  applyTheme(theme);

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const toggle = document.getElementById("theme-toggle");
      toggle.setAttribute(
        "aria-pressed",
        String(root.dataset.theme === "dark"),
      );
      toggle.addEventListener("click", () => {
        const value = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(value);
        try {
          localStorage.setItem("portfolio-theme", value);
        } catch {
          // Switching still works when the browser cannot save the preference.
        }
      });
      toggle.hidden = false;
    },
    { once: true },
  );
})();
