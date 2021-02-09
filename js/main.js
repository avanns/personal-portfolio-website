// Let scroll equal the amount the page has been scrolled

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

const iconArray = document.querySelectorAll(".icons");

iconArray.forEach(icon => {
    let tl = gsap.timeline({ paused: true });
    tl.to(icon, {scale: 2});
  icon.addEventListener("mouseenter", () => tl.play() );
  icon.addEventListener("mouseleave", () => tl.reverse() );
});

