const navSlide = ()=>{
    const burger = document.querySelector('.ham-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');


    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });
}

navSlide();



const btnElList = document.querySelectorAll('.btn');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnEl.classList.add('special');
    });
});





document.getElementById('worksButton').addEventListener('click', () => {
    document.getElementById('worksSection').style.display = 'grid'; // Show works section
    document.getElementById('achivementsSection').style.display = 'none'; // Hide achievements section
});

document.getElementById('achivementsButton').addEventListener('click', () => {
    document.getElementById('worksSection').style.display = 'none'; // Hide works section
    document.getElementById('achivementsSection').style.display = 'grid'; // Show achievements section
});