# A straightforward portfolio repository to hold the code for my portfolio site.

### How to review repository
- view the live site here: https://tayconn.github.io/ 
- All CSS styling was made in .SCSS and lives in the ./CSS directory
- Javascript file is minimal, but lives in ./JS
- HTML pags live in the root, 4 pages in total 

### Skills
- Responsive web design and animation leveraging SCSS/CSS
- Accessible HTML semantic language
- Javascript driven animation triggers
- Proving visual web design skills

### Building the project

1. Planning overall HTML architecture and semantics.
2. Creating CSS/Sass globals and classes for individual website sections and functionality.
3. Designed with responsive resizing based on screen resolutions for mobile, tablet, desktop and wide-screen desktop.
4. Mobile menu functionality in vanilla javascript, accent animation triggers and intersection observer listeners to trigger transitions.
5. Copywritting for all pages and image creation

### Personal Challenge!!

I decided to apply javascript driven css animations that would trigger after the user reaches a certain place in the website to privide a more interactive and interesting experience.

### A few things I'm proud of:
```js
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
```
