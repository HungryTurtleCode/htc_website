const bg = document.querySelector('.background');
const mg = document.querySelector('.middleground');
const fg = document.querySelector('.foreground');
const title = document.querySelector('.firstpage h1');
const titleTwo = document.querySelector('.secondpage h1');
const titleParts = document.querySelectorAll('.secondpage h1 span');
const firstpage = document.querySelector('.firstpage');
const thirdpage = document.querySelector('.third');
const mascotimg = document.querySelector('.turtlemascot');
const app = document.querySelector('#app');
const imgs = document.querySelectorAll('.imgs .img');
const progressLine = document.querySelector('.progress-line');

document.addEventListener('scroll', () => {
  const yoff = window.pageYOffset;

  const MOUNTAIN_SCALE_END = 500;
  const TRANSITION_END = 800;
  const WORD_SPLIT_END = 2300;
  const END_OF_PAGE = 3450;

  if (yoff < MOUNTAIN_SCALE_END) {
    // Mountain Parallax
    const perc = yoff / MOUNTAIN_SCALE_END;
    fg.style.transform = `scale(${1 + 0.4 * perc})`;
    mg.style.transform = `scale(${1 + 0.1 * perc})`;
    bg.style.transform = `scale(${1 + 0.04 * perc})`;
    title.style.transform = `scale(${1 + 0.35 * perc})`;
    firstpage.style.opacity = `1`;
  } else if (yoff < TRANSITION_END) {
    // Fade transition
    const perc = (yoff - MOUNTAIN_SCALE_END) / (TRANSITION_END - MOUNTAIN_SCALE_END);
    firstpage.style.opacity = `${1 - perc}`;
    firstpage.style.display = 'block';
    titleParts[0].style.transform = `translate3d(0, 0, 0)`;
    titleParts[1].style.transform = `translate3d(0, 0, 0)`;
    titleParts[2].style.transform = `translate3d(0, 0, 0)`;
  } else if (yoff < WORD_SPLIT_END) {
    // Word splitting
    titleParts[0].style.display = `inline-block`;
    titleParts[1].style.display = `inline-block`;
    titleParts[2].style.display = `inline-block`;
    title.style.transform = `scale(1.3472)`;
    fg.style.transform = `scale(${1.4})`;
    mg.style.transform = `scale(${1.1})`;
    bg.style.transform = `scale(${1.04})`;

    firstpage.style.opacity = `0`;
    firstpage.style.display = 'none';
    const offset = yoff - TRANSITION_END;
    titleParts[0].style.transform = `translate3d(0, -${offset}px, 0)`;
    titleParts[1].style.transform = `translate3d(0, 0, 0)`;
    titleParts[2].style.transform = `translate3d(0, ${offset}px, 0)`;
    mascotimg.style.transform = `scale(0)`;
    app.style.transform = `translate3d(0, 0, 0)`;

    if (offset > 300) {
      titleParts[1].style.transform = `translate3d(-${offset - 300}px, 0, 0)`;
    }
    if (offset > 500) {
      const perc = Math.min(1, (offset - 500) / (WORD_SPLIT_END - TRANSITION_END - 800));
      mascotimg.style.transform = `scale(${1.2 * perc})`;
    }
  } else if (yoff < END_OF_PAGE) {
    // Scrolling parallax
    titleParts[0].style.display = `none`;
    titleParts[1].style.display = `none`;
    titleParts[2].style.display = `none`;
    firstpage.style.display = 'none';
    mascotimg.style.transform = `scale(1.2)`;

    const offset = yoff - WORD_SPLIT_END;
    const duration = END_OF_PAGE - WORD_SPLIT_END;
    app.style.transform = `translate3d(0, -${offset}px, 0)`;
    imgs[0].style.transform = `translate3d(0, -${offset * 0.1}px, 0)`;
    imgs[1].style.transform = `translate3d(0, -${offset * 0.25}px, 0)`;

    const progressTrigger = duration * 0.2;

    if (offset > progressTrigger) {
      const progressDur = duration - progressTrigger;
      const progressOff = offset - progressTrigger;
      const progress = Math.min(1, progressOff / progressDur) * 100;
      progressLine.style.transform = `translate3d(0, -${100 - progress}%, 0)`;
    } else {
      progressLine.style.transform = `translate3d(0, -100%, 0)`;
    }
  }
});
