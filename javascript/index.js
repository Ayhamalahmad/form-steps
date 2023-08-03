// get Elements
let prgressSpan = document.querySelector(".pro-s");
let buttonsContainer = document.querySelector(".buttons");
let buttons = document.querySelectorAll(".buttons button");
let previousBtn = buttonsContainer.querySelector(".previous");
let nextBtn = buttonsContainer.querySelector(".next");
let spans = document.querySelectorAll(".container .prgress span");
// Initionlize currentStep Varaiable  
let currentStep = 1;
// Add event Clcik To buttons 
buttonsContainer.addEventListener("click", updateSteps);
//  Function  To Uptate Steps
function updateSteps(e) {
  // Increment Or Descrement the cuurentStep 
  if (e.target === nextBtn) {
    ++currentStep;
  } else if (e.target === previousBtn) {
    --currentStep;
  }
  // Loop on spans To Add or remove Active Class
  spans.forEach((span, index) => {
    span.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });
  //  Increment Or Descrement the  width for prgressSpan
  prgressSpan.style.width = `${
    ((currentStep - 1) / (spans.length - 1)) * 100
  }%`;
  // Check if Current Step is the Last or firet Step to  disable the "Next" or previous button
  if (currentStep === spans.length) {
    nextBtn.disabled = true;
  } else if (currentStep === 1) {
    previousBtn.disabled = true;
  } else {
    // If Current Step is Not First or Last  Enable all buttons
    buttons.forEach((button) => (button.disabled = false));  
  }
}
