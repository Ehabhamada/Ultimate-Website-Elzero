
/* video_playlist */

const main_video = document.querySelector('.videos .holder .preview video');
const main_video_title = document.querySelector('.videos .holder .preview .info');
const video_playlist = document.querySelector('.videos .holder .list ul  ');

let data = [
    {
        'id': '1',
        'title': 'video-1',
        'name': 'video-1.mp4',
        'duration': '2:47',
    },
    {
        'id': '2',
        'title': 'video-2',
        'name': 'video-2.mp4',
        'duration': '2:45',
    },
    {
        'id': '3',
        'title': 'video-3',
        'name': 'video-3.mp4',
        'duration': '24:49',
    },

    {
        'id': '4',
        'title': 'video-4',
        'name': 'video-4.mp4',
        'duration': '3:59',
    },
    {
        'id': '5',
        'title': 'video-5',
        'name': 'video-5.mp4',
        'duration': '4:25',
    },
    {
        'id': '6',
        'title': 'video-6',
        'name': 'video-6.mp4',
        'duration': '5:33',
    },
    {
        'id': '7',
        'title': 'video-7',
        'name': 'video-7.mp4',
        'duration': '0:29',
    },

    {
        'id': '8',
        'title': 'video-8',
        'name': 'video-8.mp4',
        'duration': '1:12',
    },
   

];
/* loop on videos */

data.forEach((video, ) => {
    let video_element = `

                    <li data-id="${video.id}"> 
                    <h3 class="title" >${video.title}</h3>
                    <span >
                    ${video.duration}</span>
                    </li>
                  
    `;
    video_playlist.innerHTML += video_element;
})



let videos = document.querySelectorAll('.videos .holder .list ul li');
videos[0].classList.add('active');
//videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            //all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        //selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});





// The End Of The Year Date

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();


let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);



let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/* js animation */
// let screenposition= window.innerHeight/1.7;
/* Start Articles */
let artcal =document.getElementById("articles")
let artboxs =document.querySelectorAll(".articles .box")

window.addEventListener("scroll",function(){
  if(window.scrollY>=artcal.offsetTop -100){
    artboxs.forEach(box=>{
      
      box.classList.add("active")
    })
  }
  else{
    artboxs.forEach(box=>{
      box.classList.remove("active")
    })
    
  }
}) 


// let artcalposition =artcal.getBoundingClientRect().top
// window.addEventListener("scroll",function(){

 
//     if(artcalposition >screenposition)
//     artcal.classList.add("active")
//     else{
//         artcal.classList.remove("active")
  
//     }
//   })
/* End Articles */

/* Start gallery */

let gallery =document.getElementById("gallery")
let galboxs =document.querySelectorAll(".gallery .box")


window.addEventListener("scroll",function(){
  if(window.scrollY>=gallery.offsetTop -100){
    galboxs.forEach(box=>{
      box.classList.add("active")
    })
  }
  else{
    galboxs.forEach(box=>{
      box.classList.remove("active")
    })
    
  }
}) 

/* End gallery */

/* Start features */

let features =document.getElementById("features")
let featboxs =document.querySelectorAll(".features .box")


window.addEventListener("scroll",function(){
  if(window.scrollY>=features.offsetTop -100 ){
    featboxs.forEach(box=>{
      box.classList.add("active")
    })
  }
  else{
    featboxs.forEach(box=>{
      box.classList.remove("active")
    })
    
  }
}) 


/* End features */


/* Start testimonials */

let testimonials =document.getElementById("testimonials")
let testimonialsboxs =document.querySelectorAll(".testimonials .box")


window.addEventListener("scroll",function(){
  let ch = 0.0
  if(window.scrollY>=testimonials.offsetTop -100 ){
    testimonialsboxs.forEach((box,)=>{
      box.style.transition="all 2s  ease-in-out";
      box.style.opacity=1
      box.style.transform="scale(1)"
      box.style.transitionDelay=`${ch}s `
      ch+=0.2
  
    })
  }
  else{
    testimonialsboxs.forEach(box=>{
      box.style.opacity=0
      box.style.transform="scale(0.1)"
      box.style.transitionDelay=`${ch}s `
      ch-=0.2
    })
    
  }
}) 


/* End testimonials */


/* Start team */

let team =document.getElementById("team")
let teamboxs =document.querySelectorAll(".team .box")


window.addEventListener("scroll",function(){
  if(window.scrollY>=team.offsetTop  ){
    teamboxs.forEach((box,)=>{
      box.style.transition="all 2s  ease-in-out";
      box.style.opacity=1
      box.style.transform="scale(1)"
    })
  }
  else{
    teamboxs.forEach(box=>{
      box.style.opacity=0
      box.style.transform="scale(0.1)"
    })
    
  }
}) 


/* End team */


/* Start Services */

let Services =document.getElementById("services")
let Servicessboxs =document.querySelectorAll(".services .box")


window.addEventListener("scroll",function(){
  let ch = 1
  if(window.scrollY>=Services.offsetTop-100){
    Servicessboxs.forEach((box,)=>{
      box.style.transition="all 2s  ease-in-out";
      box.style.transform="translateY(0)"
      box.style.opacity=1
      box.style.transform="scale(1)"
      box.style.transitionDelay=`${ch}s `
      ch-=0.3
    
    })
  }
  else{
    Servicessboxs.forEach(box=>{
      box.style.opacity=0
      box.style.transform="scale(0.1)"
      box.style.transform="translateY(-100%)"
      box.style.transitionDelay=`${ch}s `
      ch+=0.2
    })
    
  }
}) 


/* End Services */



/* Start  Work Steps */

let  Workinfo =document.getElementById("work-steps")
let  infoboxs =document.querySelectorAll(".work-steps .info .box")
let  workimg =document.getElementById("workimg")


window.addEventListener("scroll",function(){
  let ch = 0.0
  if(window.scrollY>=Workinfo.offsetTop-100){
    infoboxs.forEach((box,)=>{
      box.style.transition="all 2s  ease-in-out";
      box.style.transform="translatex(0)"
      box.style.opacity=1
      box.style.transform="scale(1)"
      box.style.transitionDelay=`${ch}s `
      ch+=0.3
    })
    workimg.style.transition="all 2s  ease-in-out";
    workimg.style.opacity=1
    workimg.style.transform="translatex(0)"
  }
  else{
    infoboxs.forEach(box=>{
      box.style.opacity=0
      box.style.transform="scale(0.1)"
      box.style.transform="translatex(100%)"
      box.style.transitionDelay=`${ch}s `
      ch-=0.2
    })
    workimg.style.opacity=0
    workimg.style.transform="translatex(-100%)"
    workimg.style.transition="all 2s  ease-in-out";
  }
}) 


/* End work-steps */



/* Start  Events */

let  events =document.getElementById("events")
let  eventsinfo =document.querySelectorAll(".events .info ")
let  dotsup =document.querySelector(".events  .dots-up ")
let  dotsdown =document.querySelector(".events  .dots-down")
let  subscribe =document.querySelector(".subscribe")
let  eventsimg =document.getElementById("eventsimg")

window.addEventListener("scroll",function(){
  let ch = 0.0
  if(window.scrollY>=events.offsetTop-100){
    eventsinfo.forEach((box,)=>{
      box.style.transition="all 2s  ease-in-out";
      box.style.transform="translatex(0)"
      box.style.opacity=1
      box.style.transform="scale(1)"
      box.style.transitionDelay=`${ch}s `
      ch+=0.3
    })
    eventsimg.style.transition="all 2s  ease-in-out";
    eventsimg.style.opacity=1
    eventsimg.style.transform="translatex(0)"
    dotsup.style.transition="all 3s  ease-in-out";
    dotsup.style.opacity=1
    dotsup.style.transform="scale(1)"
    dotsdown.style.transition="all 3s  ease-in-out";
    dotsdown.style.opacity=1
    dotsdown.style.transform="scale(1)";
    subscribe.style.transition="all 2s  ease-in-out";
    subscribe.style.opacity=1
    subscribe.style.transform="translateY(0)";
    
    
  }
  else{
    eventsinfo.forEach(box=>{
      box.style.opacity=0
      box.style.transform="scale(0.1)"
      box.style.transform="translatex(100%)"
      box.style.transitionDelay=`${ch}s `
      ch-=0.2
    })
    eventsimg.style.opacity=0
    eventsimg.style.transform="translatex(-100%)"
    eventsimg.style.transition="all 2s  ease-in-out";
    dotsup.style.transition="all 1s  ease-in-out";
    dotsup.style.opacity=0
    dotsup.style.transform="scale(.1)"
    dotsdown.style.transition="all 1s  ease-in-out";
    dotsdown.style.opacity=0
    dotsdown.style.transform="scale(.1)";
    subscribe.style.transition="all 2s  ease-in-out";
    subscribe.style.opacity=0
    subscribe.style.transform="translateY(100%)";

  }
}) 


/* End Events */



