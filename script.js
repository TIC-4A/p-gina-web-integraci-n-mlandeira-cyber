
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute("href"));
        seccion.scrollIntoView({ behavior: "smooth" });
    });
});

(function() {
  const modal = document.getElementById("modal");
  const btnComprar = document.getElementById("btn-comprar");
  const btnCerrar = document.getElementById("cerrar");
  const btnAceptar = document.getElementById("aceptar");

  
  if (!modal) { console.warn("No existe #modal en el DOM"); return; }
  if (!btnComprar) { console.warn("No existe #btn-comprar en el DOM"); return; }

 
  btnComprar.addEventListener("click", (e) => {
    e.preventDefault && e.preventDefault();
    modal.style.display = "flex";
  
    const inputNombre = modal.querySelector("#nombre");
    if (inputNombre) inputNombre.focus();
  });

  
  if (btnCerrar) {
    btnCerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

if (btnAceptar) {
  btnAceptar.addEventListener("click", () => {

    const nombre = modal.querySelector("#nombre").value.trim();
    const email = modal.querySelector("#email").value.trim();
    const pago = modal.querySelector("#pago").value.trim();

    
    if (nombre === "" || email === "" || pago === "") {
      alert("Por favor, completá todos los campos antes de continuar ❗");
      return;
    }

   
    alert("✅ Compra ejecutada correctamente.");
    modal.style.display = "none";
  });
}

  
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
})();

