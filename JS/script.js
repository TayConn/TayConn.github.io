//Mobile Menu JS
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


//fade in effect for  aestetics 
const accentAnim = document.querySelectorAll('.fadeFx');

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.add('fadeIn');
            // console.log(accentAnim);
        } else {
        entry.target.classList.remove('fadeIn');
        }
    });
});

accentAnim.forEach(motion => {
    observer.observe(motion);
  });


//drip effects for accent
const dripfx = document.querySelectorAll('.mask');

observer_drip = new IntersectionObserver(entries_drip => {
    entries_drip.forEach(entry_drip => {
        if (entry_drip.intersectionRatio > 0){
            entry_drip.target.classList.add('scale-in-ver-top');
            // console.log(dripfx);
        } else {
        entry_drip.target.classList.remove('scale-in-ver-top');
        }
    });
});

dripfx.forEach(drip => {
    observer_drip.observe(drip);
});

// //Slide in from left accent
// const slideInfx = document.querySelectorAll('.about-bg-block');

// observer_slide = new IntersectionObserver(entries_slide => {
//     entries_slide.forEach(entry_slide => {
//         if (entry_slide.intersectionRatio > 0.25){
//             entry_slide.target.classList.add('slide-in-left');
//         } else {
//         entry_slide.target.classList.remove('slide-in-left');
//         }
//     });
// });

// slideInfx.forEach(slide => {
//     observer_slide.observe(slide);
// });
