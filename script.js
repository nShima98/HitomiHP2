//Topページgalleryセクション
const container = document.querySelector('.Container');
const boxContainer = document.querySelector('.Box-Container');
const leftArrow = document.querySelector('.Arrow.left');
const rightArrow = document.querySelector('.Arrow.right');
const scrollAmount = 400; // ３回で最大値まで行く程度の数値

leftArrow.addEventListener('click', () => {
  const containerWidth = container.offsetWidth;
  const maxScrollAmount = boxContainer.offsetWidth - containerWidth;
  const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
  const newScrollAmount = Math.max(currentScrollAmount - scrollAmount, 0);
  boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
  updateArrowVisibility(newScrollAmount, maxScrollAmount);
});

rightArrow.addEventListener('click', () => {
  const containerWidth = container.offsetWidth;
  const maxScrollAmount = boxContainer.offsetWidth - containerWidth;
  const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
  const newScrollAmount = Math.min(currentScrollAmount + scrollAmount, maxScrollAmount);
  boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
  updateArrowVisibility(newScrollAmount, maxScrollAmount);
});

function updateArrowVisibility(scrollAmount, maxScrollAmount) {
  if (scrollAmount === 0) {
    leftArrow.classList.add('Hide');
  } else {
    leftArrow.classList.remove('Hide');
  }

  if (scrollAmount === maxScrollAmount) {
    rightArrow.classList.add('Hide');
  } else {
    rightArrow.classList.remove('Hide');
  }
}