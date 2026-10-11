
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

document.querySelectorAll("[data-placeholder-form]").forEach(form => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent =
        "Thanks! This form is ready for your preferred contact/form service. Once the business contact details are added, we can connect it for real submissions.";
      message.hidden = false;
    }
  });
});
