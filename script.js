document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});

// Dropdown menu functionalityconst menuBtn = document.getElementById("menuBtn");
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && e.target !== menuBtn) {
    dropdown.classList.remove("show");
  }
});


window.addEventListener("blur", () => {
  setTimeout(() => {
    const active = document.activeElement;
    if (active && active.tagName === "IFRAME") {
      dropdown.classList.remove("show");
    }
  }, 0);
});

console.log("Script loaded successfully.");