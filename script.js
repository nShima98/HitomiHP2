'use strict'
//-----ハンバーガーメニュー(PC)-----
{
    const openBtnPC = document.querySelector('.hbg-btn-open')
    const closeBtnPC = document.querySelector('.hbg-btn-close')
    const navPcActive = document.querySelector('.nav-pc')
    const mainActive = document.querySelector('main')
    const ThBox = document.querySelector('#th-box')
    const NwBox = document.querySelector('#th-box')
    const WoBox = document.querySelector('#wo-box')
    const PrBox = document.querySelector('#pr-box')
    const GaBox = document.querySelector('#ga-box')
    const FaBox = document.querySelector('#fa-box')
    //NemuOpen
    openBtnPC.addEventListener('click', () => {
        openBtnPC.classList.toggle('active');
        navPcActive.classList.toggle('active');
        mainActive.style.display = 'none';
        ThBox.style.display = 'none';
        NwBox.style.display = 'none';
        WoBox.style.display = 'none';
        PrBox.style.display = 'none';
        GaBox.style.display = 'none';
        FaBox.style.display = 'none';
    });
    //NemuClose
    closeBtnPC.addEventListener('click', () => {
        openBtnPC.classList.toggle('active');
        navPcActive.classList.toggle('active');
        mainActive.style.display = 'block';
        ThBox.style.display = 'block';
        NwBox.style.display = 'block';
        WoBox.style.display = 'block';
        PrBox.style.display = 'block';
        GaBox.style.display = 'block';
        FaBox.style.display = 'block';
    });
}



//-----Topページgalleryセクション-----
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