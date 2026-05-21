function openCPA(link){

  window.open(link, "_blank");

}

/* Smooth Card Animation */

const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

  card.style.animationDelay =
  `${index * 0.2}s`;

});

/* Scroll Reveal */

window.addEventListener("scroll",()=>{

  const cards =
  document.querySelectorAll(".card");

  cards.forEach(card=>{

    const cardTop =
    card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 50){

      card.classList.add("show");

    }

  });

});
