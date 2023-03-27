const changeColor = document.querySelectorAll('span');
const changeImg = document.querySelector('.shopImg');
console.log(changeColor);
console.log(changeImg);

changeColor.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('shs2')) {
      changeImg.src = `img/s3.jpg`;
    } else if (e.classList.contains('shs3')) {
      changeImg.src = `img/s2.jpg`;
    } else {
      changeImg.src = `img/s1.jpg`;
    }
  });
});
