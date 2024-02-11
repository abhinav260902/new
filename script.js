var tl = gsap.timeline()
tl.from(".line h1",{
    y:100,
    stagger:0.25,
    duration: 0.6,
    delay:0.5

})
tl.from("#line1-part1, .line h2",{
    opacity:0,
    onStart: function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow =0
        setInterval(function(){
        if(grow<100){
            h5timer.innerHTML = grow++
        }else{
           h5timer.innerHTML = grow
        }

        },25) ;
      },
    });
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay: 4,

});
tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    duration:0.5,
    ease:Power4
})    
tl.to("#loader",{
    display:"none"
})





const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

// Create spikes
for(let s = 0; s < 60 ; s++){
  let mSpikeEl = document.createElement('i');
  let sSpikeEl = document.createElement('i');
  mSpikeEl.className = 'spike'
  sSpikeEl.className = 'spike'
  mSpikeEl.style = `--rotate:${6 * s}deg`;
  sSpikeEl.style = `--rotate:${6 * s}deg`;
  mSpikeEl.setAttribute('data-i', s);
  sSpikeEl.setAttribute('data-i', s);

  seconds.append(sSpikeEl);
  minutes.append(mSpikeEl);
}

function getTime() {
		let date = new Date(),
    s  = date.getSeconds() ,
    m  = date.getMinutes();
  
  	hour.textContent = date.getHours();
  	minute.textContent = m;
  

  	minutes.style = `--dRotate:${6 * m}deg`;

    if(s == 0){
			seconds.classList.add('stop-anim')
    } else{
      seconds.classList.remove('stop-anim')
    }
    if(m == 0){
			minutes.classList.add('stop-anim')
    } else{
      minutes.classList.remove('stop-anim')
    }
  	
  		seconds.style = `--dRotate:${6 * s}deg`;
}




let startButton= document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");

let IntervalID;

startButton.addEventListener('click',function(){
    IntervalID = setInterval(getTime, 1000);
    getTime();
})
stopButton.addEventListener('click',function(){
    clearInterval(IntervalID);
})









