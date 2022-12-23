const navContainer = document.getElementById('navContainer');
const windowWidth = window.innerWidth;
console.log(windowWidth);

if (windowWidth < 992) {
    navContainer.classList.add('navReduced');
} else {
    navContainer.classList.remove('navReduced');
}