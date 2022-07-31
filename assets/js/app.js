
const displayTime = document.querySelector('#MyClockDisplay');

const showTime = () => {

      const time = new Date();
      
      const h = time.getHours();
      const m = time.getMinutes();
      const s = time.getSeconds();

      const amPm = h > 12 ? "PM" : "AM";

      let hour = 0;

      if(h > 12){
        hour = h - 12;
      }else if(h == 0){
        hour = 12;
      }else{
        hour = h
      }

      displayTime.innerHTML = `${zeroTime(hour)} : ${zeroTime(m)} : ${zeroTime(s)} ${amPm}`;
}

showTime();

setInterval(()=>{
    showTime();
},1000);
