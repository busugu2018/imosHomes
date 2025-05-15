// let items = document.querySelectorAll('.slider .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');

// let active = 3;
// function loadShow(){
//     let stt = 0;
//     for(var i = active + 1; i < items.length; i++){
//         stt++;
//         items[i].style.transform = `translateX({$120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
//     }
// }
// loadShow();


const initSlider = () => {
    const imageList = document.querySelectorAll("#first .slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll("#first .slider-wrapper .slide-button");
    // Slide images according toTthe slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener ("load", initSlider);