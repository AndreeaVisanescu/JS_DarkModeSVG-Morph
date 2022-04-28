const moonPath = "M29.5 50.5C29.5 78.1142 50 100.5 50 100.5C22.3858 100.5 0 78.1142 0 50.5C0 22.8858 22.3858 0.5 50 0.5C50 3 29.5 22.8858 29.5 50.5Z";

const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

darkMode.addEventListener('click', () => {
    //we need to use anime.js
    //SET THE TIMELINE
    const timeline = anime.timeline({
        duration : 750,
        easing : 'easeOutExpo'
    });
    //ADD DFFERENT ANIMATIONS TO THE TIMELINE
    timeline.add({
        targets: '.sun',
        d: [{value: toggle ? sunPath: moonPath}]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
    }, '-= 350')
    .add({
        targets: 'section',
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
    }, '-= 700')
//Everytime i click on the sun, i want to toggle to switch
    if(!toggle){
        toggle = true;
    } else {
        toggle = false;
    }

});