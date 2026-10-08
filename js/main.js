// >>> Put your real email address here (the only place you need to change it) <<<
const EMAIL = "swifttrackrecovery@gmail.com";

document.querySelectorAll("[data-email]").forEach((a) => {
  a.href = "mailto:" + EMAIL;
  if (a.dataset.email === "text") a.textContent = EMAIL;
});
const menu = document.getElementById("menu"),
  nav = document.querySelector("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));

const form = document.getElementById("contact-form");
if (form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const body = `${f.get("message")}\n\nName: ${f.get("name")}\nReply to: ${f.get("email")}`;
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  });
