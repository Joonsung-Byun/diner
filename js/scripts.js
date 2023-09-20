console.log('Im connected')
const rightNow = new Date()
console.log(rightNow.getFullYear())

document.querySelector('#year').textContent = rightNow.getFullYear();

function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle("open");
}

const x = document.querySelector('#hamburgerBtn');
console.log(x)

x.addEventListener("click", toggleMenu);