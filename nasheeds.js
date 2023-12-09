/* ABDALNA */

var playabdalna = new Audio();
playabdalna.src = "Nasheeds/Abdalna.mp3";

function abdalnaPlay() {
  var playStopAbdalna = document.querySelector('.btn-abdalna');
  
  if (playStopAbdalna.textContent === 'Play') {
    playabdalna.play();
    playStopAbdalna.textContent = 'Stop';
    playStopAbdalna.classList.add('playing');
    playStopAbdalna.classList.remove('stopped');
  } else {
    playStopAbdalna.textContent === 'Stop';
    playabdalna.pause();
    playStopAbdalna.textContent = 'Play';
    playStopAbdalna.classList.add('stopped');
    playStopAbdalna.classList.remove('playing');
  }
}

/* ASK THE RHYMES */

var playatr = new Audio();
playatr.src = "Nasheeds/AskTheRhymes.mp3";

function atrPlay() {
  var playStopAtr = document.querySelector('.btn-atr');
  
  if (playStopAtr.textContent === 'Play') {
    playatr.play();
    playStopAtr.textContent = 'Stop';
    playStopAtr.classList.add('playing');
    playStopAtr.classList.remove('stopped');
  } else {
    playStopAtr.textContent === 'Stop';
    playatr.pause();
    playStopAtr.textContent = 'Play';
    playStopAtr.classList.add('stopped');
    playStopAtr.classList.remove('playing');
  }
}

/* ALLAHU YALAM */

var playay = new Audio();
playay.src = "Nasheeds/AllahuYalam.mp3";

function ayPlay() {
  var playStopAy = document.querySelector('.btn-ay');
  
  if (playStopAy.textContent === 'Play') {
    playay.play();
    playStopAy.textContent = 'Stop';
    playStopAy.classList.add('playing');
    playStopAy.classList.remove('stopped');
  } else {
    playStopAy.textContent === 'Stop';
    playay.pause();
    playStopAy.textContent = 'Play';
    playStopAy.classList.add('stopped');
    playStopAy.classList.remove('playing');
  }
}

/* WE ARE THE SOLDIERS OF ALLAH(BOSNIAN) */

var playwatsoa = new Audio();
playwatsoa.src = "Nasheeds/BosnianWarNasheed.mp3";

function watsoaPlay() {
  var playStopwatsoa = document.querySelector('.btn-watsoa');
  
  if (playStopwatsoa.textContent === 'Play') {
    playwatsoa.play();
    playStopwatsoa.textContent = 'Stop';
    playStopwatsoa.classList.add('playing');
    playStopwatsoa.classList.remove('stopped');
  } else {
    playStopwatsoa.textContent === 'Stop';
    playwatsoa.pause();
    playStopwatsoa.textContent = 'Play';
    playStopwatsoa.classList.add('stopped');
    playStopwatsoa.classList.remove('playing');
  }
}

/* BRIGADE 103 */

var playbrigade = new Audio();
playbrigade.src = "Nasheeds/Brigade103.mp3";

function brigadePlay() {
  var playStopbrigade = document.querySelector('.btn-brigade');
  
  if (playStopbrigade.textContent === 'Play') {
    playbrigade.play();
    playStopbrigade.textContent = 'Stop';
    playStopbrigade.classList.add('playing');
    playStopbrigade.classList.remove('stopped');
  } else {
    playStopbrigade.textContent === 'Stop';
    playbrigade.pause();
    playStopbrigade.textContent = 'Play';
    playStopbrigade.classList.add('stopped');
    playStopbrigade.classList.remove('playing');
  }
}

/* FATAT AL KHAYR */

var playfak = new Audio();
playfak.src = "Nasheeds/FatatAlKhayr.mp3";

function fakPlay() {
  var playStopfak = document.querySelector('.btn-fak');
  
  if (playStopfak.textContent === 'Play') {
    playfak.play();
    playStopfak.textContent = 'Stop';
    playStopfak.classList.add('playing');
    playStopfak.classList.remove('stopped');
  } else {
    playStopfak.textContent === 'Stop';
    playfak.pause();
    playStopfak.textContent = 'Play';
    playStopfak.classList.add('stopped');
    playStopfak.classList.remove('playing');
  }
}

/* GHABAD GHABAD */

var playghabad = new Audio();
playghabad.src = "Nasheeds/GhabadGhabad.mp3";

function ghabadPlay() {
  var playStopghabad = document.querySelector('.btn-ghabad');
  
  if (playStopghabad.textContent === 'Play') {
    playghabad.play();
    playStopghabad.textContent = 'Stop';
    playStopghabad.classList.add('playing');
    playStopghabad.classList.remove('stopped');
  } else {
    playStopghabad.textContent === 'Stop';
    playghabad.pause();
    playStopghabad.textContent = 'Play';
    playStopghabad.classList.add('stopped');
    playStopghabad.classList.remove('playing');
  }
}

/* HALUMMU HALUMMU */

var playhalummu = new Audio();
playhalummu.src = "Nasheeds/HalummuHalummu.mp3";

function halummuPlay() {
  var playStophalummu = document.querySelector('.btn-halummu');
  
  if (playStophalummu.textContent === 'Play') {
    playhalummu.play();
    playStophalummu.textContent = 'Stop';
    playStophalummu.classList.add('playing');
    playStophalummu.classList.remove('stopped');
  } else {
    playStophalummu.textContent === 'Stop';
    playhalummu.pause();
    playStophalummu.textContent = 'Play';
    playStophalummu.classList.add('stopped');
    playStophalummu.classList.remove('playing');
  }
}

/* APACHE */

var playapache = new Audio();
playapache.src = "Nasheeds/IChallengeTheApache.mp3";

function apachePlay() {
  var playStopapache = document.querySelector('.btn-apache');
  
  if (playStopapache.textContent === 'Play') {
    playapache.play();
    playStopapache.textContent = 'Stop';
    playStopapache.classList.add('playing');
    playStopapache.classList.remove('stopped');
  } else {
    playStopapache.textContent === 'Stop';
    playapache.pause();
    playStopapache.textContent = 'Play';
    playStopapache.classList.add('stopped');
    playStopapache.classList.remove('playing');
  }
}

/* QAD TASAMA */

var playqadTasama = new Audio();
playqadTasama.src = "Nasheeds/QadTasama.mp3";

function qadTasamaPlay() {
  var playStopqadTasama = document.querySelector('.btn-qadTasama');
  
  if (playStopqadTasama.textContent === 'Play') {
    playqadTasama.play();
    playStopqadTasama.textContent = 'Stop';
    playStopqadTasama.classList.add('playing');
    playStopqadTasama.classList.remove('stopped');
  } else {
    playStopqadTasama.textContent === 'Stop';
    playqadTasama.pause();
    playStopqadTasama.textContent = 'Play';
    playStopqadTasama.classList.add('stopped');
    playStopqadTasama.classList.remove('playing');
  }
}

/* UNKNOWN */

var playunknown = new Audio();
playunknown.src = "Nasheeds/MusabAlAdani.mp3";

function unknownPlay() {
  var playStopunknown = document.querySelector('.btn-unknown');
  
  if (playStopunknown.textContent === 'Play') {
    playunknown.play();
    playStopunknown.textContent = 'Stop';
    playStopunknown.classList.add('playing');
    playStopunknown.classList.remove('stopped');
  } else {
    playStopunknown.textContent === 'Stop';
    playunknown.pause();
    playStopunknown.textContent = 'Play';
    playStopunknown.classList.add('stopped');
    playStopunknown.classList.remove('playing');
  }
}

/* QALU LAHU */

var playqalu = new Audio();
playqalu.src = "Nasheeds/QaluLahu.mp3";

function qaluPlay() {
  var playStopqalu = document.querySelector('.btn-qalu');
  
  if (playStopqalu.textContent === 'Play') {
    playqalu.play();
    playStopqalu.textContent = 'Stop';
    playStopqalu.classList.add('playing');
    playStopqalu.classList.remove('stopped');
  } else {
    playStopqalu.textContent === 'Stop';
    playqalu.pause();
    playStopqalu.textContent = 'Play';
    playStopqalu.classList.add('stopped');
    playStopqalu.classList.remove('playing');
  }
}

/* SHAY SHAY */

var playshay = new Audio();
playshay.src = "Nasheeds/ShayShay.mp3";

function shayPlay() {
  var playStopshay = document.querySelector('.btn-shay');
  
  if (playStopshay.textContent === 'Play') {
    playshay.play();
    playStopshay.textContent = 'Stop';
    playStopshay.classList.add('playing');
    playStopshay.classList.remove('stopped');
  } else {
    playStopshay.textContent === 'Stop';
    playshay.pause();
    playStopshay.textContent = 'Play';
    playStopshay.classList.add('stopped');
    playStopshay.classList.remove('playing');
  }
}

/* SIBSI QAYED AL KUFFAR */

var playsibsi = new Audio();
playsibsi.src = "Nasheeds/SibsiQayedAlKuffar.mp3";

function sibsiPlay() {
  var playStopsibsi = document.querySelector('.btn-sibsi');
  
  if (playStopsibsi.textContent === 'Play') {
    playsibsi.play();
    playStopsibsi.textContent = 'Stop';
    playStopsibsi.classList.add('playing');
    playStopsibsi.classList.remove('stopped');
  } else {
    playStopsibsi.textContent === 'Stop';
    playsibsi.pause();
    playStopsibsi.textContent = 'Play';
    playStopsibsi.classList.add('stopped');
    playStopsibsi.classList.remove('playing');
  }
}

/* SOLDIER OF ALLAH */

var playsoa = new Audio();
playsoa.src = "Nasheeds/SoldierOfAllah.mp3";

function soaPlay() {
  var playStopsoa = document.querySelector('.btn-soa');
  
  if (playStopsoa.textContent === 'Play') {
    playsoa.play();
    playStopsoa.textContent = 'Stop';
    playStopsoa.classList.add('playing');
    playStopsoa.classList.remove('stopped');
  } else {
    playStopsoa.textContent === 'Stop';
    playsoa.pause();
    playStopsoa.textContent = 'Play';
    playStopsoa.classList.add('stopped');
    playStopsoa.classList.remove('playing');
  }
}

/* TABALAGH BIL QALEEL */

var playtbq = new Audio();
playtbq.src = "Nasheeds/TabalaghBilQaleel.mp3";

function tbqPlay() {
  var playStoptbq = document.querySelector('.btn-tbq');
  
  if (playStoptbq.textContent === 'Play') {
    playtbq.play();
    playStoptbq.textContent = 'Stop';
    playStoptbq.classList.add('playing');
    playStoptbq.classList.remove('stopped');
  } else {
    playStoptbq.textContent === 'Stop';
    playtbq.pause();
    playStoptbq.textContent = 'Play';
    playStoptbq.classList.add('stopped');
    playStoptbq.classList.remove('playing');
  }
}

/* TAWEEL AL SHAWQ */

var playtas = new Audio();
playtas.src = "Nasheeds/TaweelAlShawq.mp3";

function tasPlay() {
  var playStoptas = document.querySelector('.btn-tas');
  
  if (playStoptas.textContent === 'Play') {
    playtas.play();
    playStoptas.textContent = 'Stop';
    playStoptas.classList.add('playing');
    playStoptas.classList.remove('stopped');
  } else {
    playStoptas.textContent === 'Stop';
    playtas.pause();
    playStoptas.textContent = 'Play';
    playStoptas.classList.add('stopped');
    playStoptas.classList.remove('playing');
  }
}

/* THABATAN THABATAN */

var playthabatan = new Audio();
playthabatan.src = "Nasheeds/ThabatanThaban.mp3";

function thabatanPlay() {
  var playStopthabatan = document.querySelector('.btn-thabatan');
  
  if (playStopthabatan.textContent === 'Play') {
    playthabatan.play();
    playStopthabatan.textContent = 'Stop';
    playStopthabatan.classList.add('playing');
    playStopthabatan.classList.remove('stopped');
  } else {
    playStopthabatan.textContent === 'Stop';
    playthabatan.pause();
    playStopthabatan.textContent = 'Play';
    playStopthabatan.classList.add('stopped');
    playStopthabatan.classList.remove('playing');
  }
}

/* THE WAY OF TEARS */

var playtwot = new Audio();
playtwot.src = "Nasheeds/TheWayOfTears.mp3";

function twotPlay() {
  var playStoptwot = document.querySelector('.btn-twot');
  
  if (playStoptwot.textContent === 'Play') {
    playtwot.play();
    playStoptwot.textContent = 'Stop';
    playStoptwot.classList.add('playing');
    playStoptwot.classList.remove('stopped');
  } else {
    playStoptwot.textContent === 'Stop';
    playtwot.pause();
    playStoptwot.textContent = 'Play';
    playStoptwot.classList.add('stopped');
    playStoptwot.classList.remove('playing');
  }
}

/* YA FAWZA MANNAHA WASHAHADAH */

var playyfm = new Audio();
playyfm.src = "Nasheeds/YaFawzaMannaha.mp3";

function yfmPlay() {
  var playStopyfm = document.querySelector('.btn-yfm');
  
  if (playStopyfm.textContent === 'Play') {
    playyfm.play();
    playStopyfm.textContent = 'Stop';
    playStopyfm.classList.add('playing');
    playStopyfm.classList.remove('stopped');
  } else {
    playStopyfm.textContent === 'Stop';
    playyfm.pause();
    playStopyfm.textContent = 'Play';
    playStopyfm.classList.add('stopped');
    playStopyfm.classList.remove('playing');
  }
}

/* HASN'T DEATH CALLED YOU */

var playhdcy = new Audio();
playhdcy.src = "Nasheeds/HasntDeathCalledYou.mp3";

function hdcyPlay() {
  var playStophdcy = document.querySelector('.btn-hdcy');
  
  if (playStophdcy.textContent === 'Play') {
    playhdcy.play();
    playStophdcy.textContent = 'Stop';
    playStophdcy.classList.add('playing');
    playStophdcy.classList.remove('stopped');
  } else {
    playStophdcy.textContent === 'Stop';
    playhdcy.pause();
    playStophdcy.textContent = 'Play';
    playStophdcy.classList.add('stopped');
    playStophdcy.classList.remove('playing');
  }
}
