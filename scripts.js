// Dropdown function
const dropdown = document.getElementById("dropdown-options");

function openDropdown(){
  if (dropdown.classList.contains("open")){
    dropdown.classList.remove("open");    
  } else {
    dropdown.classList.add("open");
  }
    
};

// Constants
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// Clear function
function clear(){
    body.classList = '';
    
    title.innerHTML = "";
    
    slot1.classList = 'content';
    slot1.innerHTML = "";
    
    slot2.classList = 'content';
    slot2.innerHTML = "";
    
    slot3.classList = 'content';
    slot3.innerHTML = "";
    
    dropdown.classList.remove("open");
}

// Option 1
function option1(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("sin");

    title.innerHTML = "SINE ";


    localStorage.setItem("choice", "sine");
}

// Option 2
function option2(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("cos");

    title.innerHTML = "Cosine ";

    s

    localStorage.setItem("choice", "cosine");
}

// Option 3
function option3(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("Tangent");

    title.innerHTML = "Tan() or Tangent";

    slot1.classList.add("tan");
    
}

// Observers
const slot1observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("fade-in");
    }
}, {threshold: 1});
slot1observer.observe(slot1);

const slot2observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("grow-in");
    }
}, {threshold: 1});
slot2observer.observe(slot2);

const slot3observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("rise-in");
    }
}, {threshold: 1});
slot3observer.observe(slot3);

// Loading event
document.addEventListener("DOMContentLoaded", function () {
    const choice = localStorage.getItem("choice");
  
    if (choice == "sine"){
        option1();
    } else if (choice == "cosine"){
        option2();
    } else if (choice == "tangent"){
        option3();
    }
});

// Reset
function reset(){
    clear();
    content.style.display = "";
    instruction.style.display = 'flex';
    localStorage.setItem("choice", "");
}