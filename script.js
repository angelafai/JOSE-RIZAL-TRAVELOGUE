// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
}));

// Scroll animations
const animateEls=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show');});
},{threshold:0.2});
animateEls.forEach(el=>observer.observe(el));

// Country lightbox
const boxes=document.querySelectorAll('.country-box');
const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lightbox-img');
const closeLB=document.getElementById('close-lightbox');
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        lbImg.src='https://via.placeholder.com/600x400?text='+encodeURIComponent(box.dataset.country);
        lightbox.style.display='flex';
    });
});
closeLB.addEventListener('click',()=>lightbox.style.display='none');
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.style.display='none';});

// CAROUSEL
const track=document.getElementById('carousel-track');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
let currentIndex=0;
const visible=3;

function updateCarousel(){
    const boxWidth=boxes[0].offsetWidth + 16; // including margin
    track.style.transform=`translateX(${-currentIndex*boxWidth}px)`;
    // Update airplane to first visible country
    const airplane=document.getElementById('airplane');
    const positions=[
        [75,50],[70,55],[60,45],[65,35],[68,45],[70,40],[65,45],[64,44],[75,40],[76,41],[70,38],[60,42],[58,40],[55,42],[50,38],[52,40],[40,35],[35,30]
    ];
    const idx=currentIndex;
    airplane.style.left=positions[idx][0]+'%';
    airplane.style.top=positions[idx][1]+'%';
}
prev.addEventListener('click',()=>{
    if(currentIndex>0){ currentIndex--; updateCarousel(); }
});
next.addEventListener('click',()=>{
    if(currentIndex<boxes.length-visible){ currentIndex++; updateCarousel(); }
});
window.addEventListener('resize',updateCarousel);
updateCarousel();

document.addEventListener('DOMContentLoaded', () => {
  const introElements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  introElements.forEach(el => observer.observe(el));
});