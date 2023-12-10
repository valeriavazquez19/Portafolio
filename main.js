let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #bc0b27;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #bc0b27;">Estudiante que le Interesa el Desarrollo Web. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
