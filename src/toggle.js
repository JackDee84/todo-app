





const sunMoonContainer = document.getElementById('sunMoonContainer');
const bodyBgImage = document.querySelector('#imageHeader');
const bg = document.querySelector('#bg')



sunMoonContainer.addEventListener('click', () => {
    if (bodyBgImage.classList.contains('imgDark')) {

        bodyBgImage.classList.remove('imgDark');
        bodyBgImage.classList.add('imgLigth');

        sunMoonContainer.classList.remove('sun');
        sunMoonContainer.classList.add('moon');

        bodyBgImage.classList.remove('bgDark');
        bodyBgImage.classList.add('bgLigth');

        bg.classList.remove('bgDark');
        bg.classList.add('bgLigth');





    } else if (bodyBgImage.classList.contains('imgLigth')) {

        bodyBgImage.classList.remove('imgLigth');
        bodyBgImage.classList.add('imgDark');

        sunMoonContainer.classList.remove('moon');
        sunMoonContainer.classList.add('sun');

        bodyBgImage.classList.remove('bgLigth');
        bodyBgImage.classList.add('bgDark');

        bg.classList.remove('bgLigth');
        bg.classList.add('bgDark');

    }
});














