window.addEventListener('scroll', onScroll);
onScroll();

function onScroll (){
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection (section){
    //Soma o scroll com a altura visível na tela sobre 2
    const targetLine = scrollY + innerHeight / 2;

    //Valores para representar o topo do home e sua altura
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopPassedTargetLine = targetLine >= sectionTop;
    const sectionEnds = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEnds <= targetLine;

    const sectionBoundaries = sectionTopPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }
}

function showNavOnScroll (){
    if(scrollY > 0){
        navigation.classList.add('scroll');
    }
    else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll (){
    if(scrollY > 500){
        backToTopButton.classList.add('show');
    }
    else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu (){
    document.body.classList.add('menu-expanded');
}

function closeMenu (){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);