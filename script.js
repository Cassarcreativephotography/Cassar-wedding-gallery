
const imageFiles=["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.png", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg"];
const images=imageFiles.map((file,i)=>({src:file,alt:`Mr and Mrs Wheeler wedding photograph ${i+1}`}));
const gallery=document.querySelector("#gallery"),box=document.querySelector("#lightbox"),boxImg=document.querySelector("#lightbox-image");let current=0;
images.forEach((image,index)=>{const fig=document.createElement("figure");fig.className="gallery-item";const img=document.createElement("img");img.src=image.src;img.alt=image.alt;img.loading=index<3?"eager":"lazy";img.addEventListener("click",()=>openBox(index));fig.appendChild(img);gallery.appendChild(fig)});
function openBox(i){current=i;boxImg.src=images[i].src;boxImg.alt=images[i].alt;box.showModal();document.body.classList.add("no-scroll")}
function closeBox(){box.close();document.body.classList.remove("no-scroll")}
function move(step){current=(current+step+images.length)%images.length;boxImg.src=images[current].src;boxImg.alt=images[current].alt}
document.querySelector(".lightbox-close").onclick=closeBox;document.querySelector(".lightbox-prev").onclick=()=>move(-1);document.querySelector(".lightbox-next").onclick=()=>move(1);box.addEventListener("click",e=>{if(e.target===box)closeBox()});
document.addEventListener("keydown",e=>{if(!box.open)return;if(e.key==="Escape")closeBox();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)});
document.querySelectorAll("[data-scroll-to]").forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scrollTo).scrollIntoView({behavior:"smooth"}));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal,.gallery-item").forEach(el=>observer.observe(el));
const topBtn=document.querySelector(".back-to-top");window.addEventListener("scroll",()=>topBtn.classList.toggle("show",scrollY>900));window.addEventListener("load",()=>setTimeout(()=>document.querySelector("#loading-screen").classList.add("hidden"),350));
