const buttonHover = () => {
    const addButton = document.querySelector('.addBtn')
    const cartImg = document.querySelector('.cartImg')
    const cartInvertedColorImg = document.querySelector ('.cartImgHover')
    addButton.addEventListener('mouseover', () => {
        cartImg.classList.remove('active');
        cartInvertedColorImg.classList.add('active');

    })
    addButton.addEventListener('mouseout', () => {
        cartImg.classList.add('active');
        cartInvertedColorImg.classList.remove('active');
    })
}

buttonHover()