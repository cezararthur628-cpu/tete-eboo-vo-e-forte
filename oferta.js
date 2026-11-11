// Cole o link HTTPS oficial do checkout abaixo para habilitar a compra.
const checkout = "https://pay.kiwify.com.br/7TCMS1e";
const botao = document.getElementById("comprar");
try {
  const url = new URL(checkout);
  if (url.protocol === "https:") {
    botao.href = url.href;
    botao.hidden = false;
    document.getElementById("estado").hidden = true;
  }
} catch {}

