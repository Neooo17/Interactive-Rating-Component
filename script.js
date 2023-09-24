const buttons = document.querySelectorAll(".btn");
const submit = document.querySelector(".btnSubmit");
const resultSpan = document.querySelector(".result");

const ratingSection = document.querySelector(".rating");
const thankSection = document.querySelector(".thank");

let selectedRating = null;

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        // console.log(button.textContent);
        selectedRating = button.textContent;
    })
     
});

submit.addEventListener("click", () =>{
    if (selectedRating === null) {
        alert("Please select a rating before submitting.");
    
    } else {
        resultSpan.innerHTML = selectedRating;
        ratingSection.style.display = "none";
        thankSection.style.display = "block";
    }
    
})


