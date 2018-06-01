
const   acs    = document.querySelector('#acs')
      , svgBg  = document.querySelector('#svg-bg')
      , video  = document.querySelector('#video')


acs.style.display   = 'none';
svgBg.style.display = 'none';
video.style.display = 'none';

setTimeout(() => {

  acs.style.display   = 'block';

}, 1400);

setTimeout(() => {

  svgBg.classList.add('fade-in');
  svgBg.style.display = 'block';

  video.classList.add('fade-in');
  video.style.display = 'block';

}, 1800);
