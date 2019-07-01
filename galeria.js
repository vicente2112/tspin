let AnteriorEL = document.querySelector('#anterior');
  let ProximoEL = document.querySelector('#proximo');


  nomesDasImagens = [
    'RUSSOS!.png',
    'atari.jpg',
    'commodore.jpg',
    'gameboy.jpg',
    'NES.jpg',
    'gamecube.jpg',
    'effect.jpg'
  ];


i = 0;


ProximoEL.addEventListener('click', Proximo);
AnteriorEL.addEventListener('click', Anterior);

function Anterior(){
  if (i==0) i = nomesDasImagens.length;
  i--;
  document.getElementById("slide").src = "./imagens_galeria/" + nomesDasImagens[i];
}
function Proximo(){
    i++;
    if (i==nomesDasImagens.length) i = 0;
    document.getElementById("slide").src = "./imagens_galeria/" + nomesDasImagens[i];
}