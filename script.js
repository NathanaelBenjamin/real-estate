const image = document.getElementById("image");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
let i = 0;

const imageArray = ["./ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg", "./sieuwert-otterloo-aren8nutd1Q-unsplash.jpg", "./todd-kent-178j8tJrNlc-unsplash.jpg", "./digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg", "./nsd.jpg"];

const slider = ( ) => {

    if(i > imageArray.length - 1){
        i = 0;
        image.src = imageArray[i];
    }

    else{
        image.src = imageArray[i];
        i++;
    }
};

setInterval(slider, 10000);

previousBtn.addEventListener("click", (e) => {
    e.preventDefault( );

    if(i == 0){
        i = imageArray.length;
        i--;
        image.src = imageArray[i];
    }

    else{
        i--;
        image.src = imageArray[i];
    }
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault( );

    if(i > imageArray.length - 1){
        i = 0;
        image.src = imageArray[i];
    }

    else{
        image.src = imageArray[i];
        i++;
    }
})

const firstLine = document.querySelector(".first-line");
const secondLine = document.querySelector(".second-line");
const thirdLine = document.querySelector(".third-line");
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector("nav"); 

menuBtn.addEventListener('click', ( ) =>{
    firstLine.classList.toggle("first-line-transform");
    secondLine.classList.toggle("second-line-transform");
    thirdLine.classList.toggle("third-line-transform");
    navBar.classList.toggle("open");
});




