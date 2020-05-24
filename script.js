let arryImage = document.querySelectorAll('.imageSlider')

arryImage[0] = addEventListener('click', mainfunction)

function mainfunction() {
    for (let i = 0; i <= arryImage.length - 1; i++) {
        arryImage[i].addEventListener('click', slideImage)

        function slideImage() {
            arryImage[i].style.display = 'none'
            if (i != arryImage.length - 1) {
                arryImage[i + 1].style.display = 'block'
            } else {
                i = -1
                arryImage[0].style.display = 'block'
            }
        }

    }



}