rtc = () => {
  Array.from(document.getElementsByClassName('wi-ch')).forEach((el) => {
    el.style.width = 0;
  })
}

Array.from(document.getElementsByClassName('w-ch')).forEach((el, i) => {
  el.addEventListener('click', () => {
    rtc();
    let rnd = Math.floor(Math.random()*360);
    document.getElementById(('val')).innerText = '0'+ (i +1);
    document.getElementsByClassName('wi-ch')[i].style.width = "200px";
    document.getElementsByTagName('header')[0].style.filter = `hue-rotate(${rnd}deg)`;
  })
})
