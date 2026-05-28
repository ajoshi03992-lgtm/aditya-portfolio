const text = [

  "Frontend Developer",
  "Software Developer",
  "AI Enthusiast",
  "Backend Developer"

];

let speed = 100;

const typingText =
document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

  if(charIndex < text[textIndex].length){

    typingText.innerHTML +=
    text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter,speed);

  }

  else{

    setTimeout(eraseText,1500);

  }

}

function eraseText(){

  if(typingText.innerHTML.length > 0){

    typingText.innerHTML =
    typingText.innerHTML.slice(0,-1);

    setTimeout(eraseText,50);

  }

  else{

    textIndex++;

    if(textIndex >= text.length){

      textIndex = 0;

    }

    charIndex = 0;

    setTimeout(typeWriter,500);

  }

}

window.onload = typeWriter;


/* CERTIFICATE MODAL */

function openModal(title, description, image){

  document.getElementById("certificateModal").style.display = "flex";

  document.getElementById("modalTitle").innerText = title;

  document.getElementById("modalDescription").innerText = description;

  document.getElementById("modalImage").src = image;

}

function closeModal(){

  document.getElementById("certificateModal").style.display = "none";

}

window.onclick = function(e){

  const modal =
  document.getElementById("certificateModal");

  if(e.target == modal){

    modal.style.display = "none";

  }

}