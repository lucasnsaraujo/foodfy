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

function handleClick(param) {
    console.log(param)
}