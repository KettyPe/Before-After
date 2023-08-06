
const slider = document.querySelector('.slider');
const before = slider.querySelector('.before');
const beforeImg = before.querySelector('img');
const change = slider.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
     let width = slider.offsetWidth;
     beforeImg.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
     let shift = Math.max(0, Math.min(x, slider.offsetWidth));

     before.style.width = `${shift}px`;
     change.style.left = `${shift}px`;
};

const pauseEvent = (e) => {
     e.stopPropagation();
     e.preventDefault();
     return false;
}

body.addEventListener('mouseup', () => {
     isActive = false;
});

body.addEventListener('mousedown', () => {
     isActive = true;
});

body.addEventListener('mouseleave', () => {
     isActive = false;
});

body.addEventListener('mousemove', (e) => {
     if(!isActive) {
          return;
     }

     let x = e.pageX;
     x -= slider.getBoundingClientRect().left;
     beforeAfterSlider(x);
     pauseEvent(e);
});


body.addEventListener('touchstart', () => {
     isActive = true;
});

body.addEventListener('touchend', () => {
     isActive = false;
});

body.addEventListener('touchcancle', () => {
     isActive = false;
});

body.addEventListener('touchmove', (e) => {
     if(!isActive) {
          return;
     }

     let x;
     let i;

     for(i = 0; i < e.changedTouches; i++) {
          x = e.changedTouches[i].pageX;
     }

     x -= slider.getBoundingClientRect().left;

     beforeAfterSlider(x);
     pauseEvent(e);
});