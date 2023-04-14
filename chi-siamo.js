// evento manina button toggler

// cattura manina navbar
let navIcon = document.querySelector('#navIcon');

// variabile d'appoggio per checkare la condizione
let confirm = false;

// evento click sul toggler
navIcon.addEventListener('click', ()=>{


    if(confirm == false){

        navIcon.classList.remove('fa-rotate-180');
        confirm = true;
    
    } else{

        navIcon.classList.add('fa-rotate-180');
        confirm = false;

    }


})


// CATTURA NAVBAR

let mainNavbar = document.querySelector('#mainNavbar');

let containerNav = document.querySelector('#container-nav');

// CATTURA LOGHI

let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');

// evento NAVBAR

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primaryC');

        // mainNavbar.style.height = '100px';
        mainNavbar.style.padding = '20px 0px';

        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

        

    } else {

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

        // mainNavbar.style.height = '60px';
        mainNavbar.style.padding = '10px 0px';

        logoA.classList.remove('d-none');
        logoB.classList.add('d-none');

      

    }


})


// logica circle

// cattura opener
let opener = document.querySelector('.opener');

// cattura div moved
let movedDivs = document.querySelectorAll('.moved');

// variabile d'appoggio per far tornare indietro i moved

let conferma = false;

// array di oggetti, docenti

let teachers = [


    { name : 'Davide', languages : ['HTML', 'CSS', 'JS'], url : './media/Davide.jpg'},
    { name : 'Davide', languages : ['HTML', 'CSS', 'JS'], url : './media/Davide.jpg'},
    { name : 'Davide', languages : ['HTML', 'CSS', 'JS'], url : './media/Davide.jpg'},
    { name : 'Davide', languages : ['HTML', 'CSS', 'JS'], url : './media/Davide.jpg'},


]

// cattura cardWrapper
let cardWrapper = document.querySelector('#cardWrapper');


movedDivs.forEach((moved, i)=>{


    moved.style.backgroundImage = `url('${teachers[i].url}')`;

    // evento click per far apparire gli amici docenti

    moved.addEventListener('click', ()=>{


        // console.log(teachers[i]);

        cardWrapper.innerHTML = '';

        let div = document.createElement('div');
        
        div.classList.add('teacher-card');

        div.innerHTML = `
                    <p class="h3">${teachers[i].name}</p>
                    <p>${teachers[i].languages}</p>
        `;

        cardWrapper.appendChild(div);


        // catturo la singola card per cambiare immagine

        // let card = document.querySelector('.teacher-card');
        
        // card.style.backgroundImage=`url('${teachers[i].url}')`;


    })

})


// evento su opener

opener.addEventListener('click', ()=>{


    if(conferma == false){


        conferma = true;

        movedDivs.forEach( (moved, i)=>{

            let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;

            opener.innerHTML = `<i class="fa-solid fa-minus text-blackC fa-5x"></i>`;
    
    
        })

    } else {

        conferma = false;

        cardWrapper.innerHTML = '';

        movedDivs.forEach( (moved)=>{

            // let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(0deg) translate(0px)`;

            opener.innerHTML = `<i class="fa-solid fa-plus text-blackC fa-5x"></i>`;
    
    
        })


    }

  


})