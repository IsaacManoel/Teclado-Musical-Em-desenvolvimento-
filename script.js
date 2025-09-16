const notas = [
  { classe: ".do", som: "do.mp3" },
  { classe: ".re", som: "re.mp3" },
  { classe: ".mi", som: "mi.mp3" },
  { classe: ".fa", som: "fa.mp3" },
  { classe: ".so", som: "so.mp3" },
  { classe: ".la", som: "la.mp3" },
  { classe: ".ci", som: "ci.mp3" },
  { classe: ".du", som: "du.mp3" }
];

notas.forEach(nota => {
  const elemento = document.querySelector(nota.classe);
  const audio = new Audio(nota.som);

  elemento.addEventListener("mouseenter", () => {
    audio.play();
  });

  elemento.addEventListener("mouseleave", () => {
    audio.pause();
    audio.currentTime = 0;
  });
});
