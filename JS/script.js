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