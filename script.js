// Número do WhatsApp do Hibisco (DDI + DDD + número)
const WHATSAPP = "5515997651020";

// Links de WhatsApp com mensagem pronta (atributo data-wa)
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(el.dataset.wa)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Foto ainda não enviada: mostra placeholder elegante no lugar da imagem quebrada
document.querySelectorAll(".foto img").forEach((img) => {
  const vazia = () => {
    img.parentElement.classList.add("vazia");
    img.remove();
  };
  if (img.complete && img.naturalWidth === 0) vazia();
  else img.addEventListener("error", vazia, { once: true });
});

// Cabeçalho muda ao rolar + botão flutuante aparece depois do hero
const topo = document.getElementById("topo");
const waFlutuante = document.querySelector(".wa-flutuante");
const aoRolar = () => {
  const y = window.scrollY;
  topo.classList.toggle("rolado", y > 40);
  waFlutuante.classList.toggle("visivel", y > window.innerHeight * 0.5);
};
window.addEventListener("scroll", aoRolar, { passive: true });
aoRolar();

// Balão "Fale com a gente" aparece uma vez, alguns segundos depois do botão surgir
let convidou = false;
window.addEventListener("scroll", () => {
  if (convidou || !waFlutuante.classList.contains("visivel")) return;
  convidou = true;
  setTimeout(() => waFlutuante.classList.add("convite"), 1500);
  setTimeout(() => waFlutuante.classList.remove("convite"), 6500);
}, { passive: true });

// Entrada suave das seções, com leve escalonamento entre irmãos
const revelaveis = document.querySelectorAll(".revela");
revelaveis.forEach((el) => {
  const irmaos = [...el.parentElement.children].filter((c) => c.classList.contains("revela"));
  const i = irmaos.indexOf(el);
  if (i > 0) el.style.transitionDelay = `${Math.min(i, 6) * 90}ms`;
});

if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visivel");
      obs.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revelaveis.forEach((el) => obs.observe(el));
} else {
  revelaveis.forEach((el) => el.classList.add("visivel"));
}

document.getElementById("ano").textContent = new Date().getFullYear();
