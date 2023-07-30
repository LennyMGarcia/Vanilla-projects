const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");

 

  const futureDate = new Date(2023, 7, 50, 14, 0, 0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();

  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  const futureTime = futureDate.getTime();


  function getRemaindingTime(){//se trabaja todo en milisegundos
     const today = new Date().getTime();

     const missingTime = futureTime - today;
    //en milisegundos
     const oneDay = 24 * 60 * 60 * 1000;
     const oneHour = 60 * 60 * 1000;
     const oneMinute = 60 * 1000;

     let days = missingTime / oneDay;
     days = Math.floor(days);
     let hours = Math.floor((missingTime % oneDay) / oneHour);
     let minutes = Math.floor((missingTime % oneHour) / oneMinute);
     let seconds = Math.floor((missingTime % oneMinute) / 1000);

     const values = [days, hours, minutes, seconds];
   
     function format(item){
        if (item < 10){
            return (item = `0${item}`);
        }
        return item;
     }

     items.forEach(function (item, index){
        item.innerHTML = format(values[index]);
     });

     if(missingTime < 0){
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`;
     } 
  }

  let countDown = setInterval(getRemaindingTime, 1000);

getRemaindingTime();