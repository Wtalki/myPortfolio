const sr = ScrollReveal({
  duration: 2500,
  delay: 400,
});

sr.reveal(`.scrollB`, {
  delay: 200,
  distance: "100px",
  origin: "bottom",
  interval: 100,
});

sr.reveal(`.scrollBt`, {
  delay: 20,
  origin: "bottom",
  distance: "100px",
  interval: 200,
});
sr.reveal(`.scrollL`, {
  delay: 20,
  origin: "left",
  distance: "100px",
  interval: 200,
});
