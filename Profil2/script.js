const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'imgDark.png';