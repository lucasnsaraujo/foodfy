const cards = document.querySelectorAll('.card');
for (let card of cards) {
    card.addEventListener('click', () => {
        console.log(this)
        const modal = document.querySelector('.modal')
        modal.classList.add('active')
    })
}


const closeModal = document.getElementById('close-modal')
closeModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    modal.classList.remove('active')
})

function handleClick(element) {
    let imgSource = element.querySelector('.card-image-container').childNodes[1].src
    let recipeTitle = element.querySelector('.card-title').childNodes[1].innerHTML
    let recipeAuthor = element.querySelector('.card-info').childNodes[1].innerHTML
    let modalImage = document.querySelector('.modal-image').childNodes[1]
    let modalTitle = document.querySelector('.modal-info').childNodes[1]
    let modalAuthor = document.querySelector('.modal-info').childNodes[3]
    modalImage.src = imgSource
    modalTitle.innerHTML = recipeTitle
    modalAuthor.innerHTML = recipeAuthor
}


