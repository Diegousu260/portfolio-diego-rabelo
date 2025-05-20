function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  const frases = [
    "Continue acreditando nos seus sonhos! 🚀",
    "O futuro pertence a quem se dedica hoje. 💡",
    "Você é capaz de criar coisas incríveis! ✨"
  ];
  const indice = Math.floor(Math.random() * frases.length);
  mensagem.textContent = frases[indice];
}
