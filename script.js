function AgeSubmit(){
    let currentyear = document.getElementById("Agecurrent").value;
    let cuyear = new Date(currentyear);
    let diffCurrent = cuyear.getFullYear();

    let yearUs = document.getElementById("Ageuser").value;
    let useryear = new Date(yearUs);
    let userConvert = useryear.getFullYear();

    let diffyearResult = diffCurrent -  userConvert ;
    ///month///
    let currentMonth = document.getElementById("Agecurrent").value;
    let moDate = new Date(currentMonth);
    let diffMonth = moDate.getMonth();

    let monthUs = document.getElementById("Ageuser").value;
    let monthDate = new Date(monthUs);
    let monthConvert = monthDate.getMonth();

    let diffMonResult = diffMonth -  monthConvert ;
   //days//
   let currDay = document.getElementById("Agecurrent").value;
   let currentDay = new Date(currDay);
   let diffDays = currentDay.getTime();

   let userDay = document.getElementById("Agecurrent").value;
   let useDay = new Date(userDay);
   let difUsDays = useDay.getTime();
  
        let diffDay = diffDays - difUsDays;

        let second = diffDay / 1000;
        let minute = second / 60;
        let hour = minute / 60;
        let day = hour / 24;


    document.getElementById("Result").innerText = `Age: ${diffyearResult} `;

    document.getElementById("ResultMo").innerText = `Month: ${diffMonResult} `;

    document.getElementById("ResultDay").innerText = `Days: ${day} `;
}