// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// Header Shadow On Scroll
// ==========================

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.05)";

    }

});


// ==========================
// Reveal Animation
// ==========================

const elements =
document.querySelectorAll(".card,.post");


const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity="1";

        entry.target.style.transform="translateY(0)";

    }

});

},{
threshold:.15
});


elements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="all .7s ease";

    observer.observe(el);

});
