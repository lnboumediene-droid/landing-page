const form = document.getElementById("orderForm");
const msg = document.getElementById("msg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  msg.textContent = `Merci ${data.get("name")} ! 🍦 Commande “${data.get("flavor")}” pour ${data.get("city")} enregistrée (démo).`;
  form.reset();
});
