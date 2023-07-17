'use strict'
/* ESERCIZIO: js-array-objects-carousel
Dato un array di oggetti letterali con:
  - url dell’immagine
  - titolo
  - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

// VARIABILE: Prendo l'elemento div dall'HTML
const carouselContainer = document.querySelector(".container-carousel");

// VARIABILE: racchiude tutte le informazioni delle immagini del carosello
const imageList = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, 
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, 
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, 
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// VARIABILE: Creo una variabile che rappresenta l'indice dell'immagine corrente
let currentImageIndex = 0;

// CICLO le immagini assegnate all'interno del carosello
for (let i = 0; i < imageList.length; i++) {
  // VARIABILE: Creo una variabile che rappresenta l'immagine corrente con le relative informazioni
  const currentImage = imageList[i].image;
  const currentTitle = imageList[i].title;
  const currentText = imageList[i].text;

  // Assegno una variabile vuota per l'active
  let classImage = "";

  // Condizione: imposto la classe active all'immagine corrente
  if (i === 0) {
    classImage = "active";
  }

  // Aggiungo all'interno dell'elemento preso dall'HTML l'immagine
  carouselContainer.innerHTML += `<div class="image-container-carousel ${classImage}">
                                    <img src="${currentImage}" alt="img" class="image">
                                    <div class="description text-white text-end">
                                      <h2 class="title">${currentTitle}</h2>
                                      <h4 class="text">${currentText}</h4>
                                    </div>
                                  </div>`;
}


// VARIABILI: Aggiungo i bottoni dall'HTML
const prevBtn = document.getElementById("carousel-prev-btn");
const nextBtn = document.getElementById("carousel-next-btn");

// SCATENO EVENTO: al click del button next le immagini scorrono in avanti
nextBtn.addEventListener("click", function () {
  // VARIABILE: creo una variabile che va a prendere tutti gli elementi con la seguente classe
  const imageContainerCarouselElements = document.querySelectorAll(".image-container-carousel");
  // Rimuovo la classe active
  imageContainerCarouselElements[currentImageIndex].classList.remove("active");
  // Implemento l'indice delle classi degli elementi
  currentImageIndex++;
  // Condizione: 
  if (currentImageIndex > imageContainerCarouselElements.length - 1) {
    currentImageIndex = 0;
  }
  // Aggiungo la classe active
  imageContainerCarouselElements[currentImageIndex].classList.add("active");

  console.log(imageContainerCarouselElements[currentImageIndex]);
});

// SCATENO EVENTO: al click del button prev le immagini scorrono indietro
prevBtn.addEventListener("click", function () {
  // VARIABILE: creo una variabile che va a prendere tutti gli elementi con la seguente classe
  const imageContainerCarouselElements = document.querySelectorAll(".image-container-carousel");
  // Rimuovo la classe active
  imageContainerCarouselElements[currentImageIndex].classList.remove("active");
  // Decremento l'indice delle classi degli elementi
  currentImageIndex--;
  // Condizione: 
  if (currentImageIndex < 0) {
    currentImageIndex = imageContainerCarouselElements.length - 1
  }
  // Aggiungo la classe active
  imageContainerCarouselElements[currentImageIndex].classList.add("active");
});