/**
 * Main JS file for theme behaviours
 */

// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle');
if (menuToggle) {
  for (var i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('click', function (e) {
      document.body.classList.toggle('menu--opened');
      e.preventDefault();
    }, false);
  }

  document.body.classList.remove('menu--opened');

  window.addEventListener('resize', function () {
    if (menuToggle[0].offsetParent === null) {
      document.body.classList.remove('menu--opened');
    }
  }, true);
}

// Add scroller to homepage subtitle
(() => {
  const subtitles = document.querySelectorAll('.block-hero .block-content p')
  subtitles.forEach(subtitle => {
    if (subtitle.innerText == "I'm a tech consultant based in London.") {
      subtitle.innerHTML = `
        I'm <span id="typewriterTarget"></span> based in London.
      `
      const target = document.getElementById('typewriterTarget')
      const typewriter = new Typewriter(target, {
        loop: true,
        strings: [
          'a tech consultant',
          'an entrepreneur',
          'a public speaker',
          'a software engineer',
          'a product manager',
        ],
        autoStart: true,
        //cursor: ''
      })
    }
  })
})()

document.getElementById('footerDate').innerText = new Date().getFullYear()