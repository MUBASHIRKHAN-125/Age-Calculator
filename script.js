function AgeSubmit() {
    let currentyear = document.getElementById("Agecurrent").value;
    let curyear = new Date(currentyear);
    let diffCurrent = curyear.getFullYear();

    let yearUs = document.getElementById("Ageuser").value;
    let useryear = new Date(yearUs);
    let userConvert = useryear.getFullYear();
    if (!currentyear || !yearUs) {
        alert("please fill input!");
        return;
    };
    let diffyearResult = diffCurrent - userConvert;
    ///month///
    let currentMonth = document.getElementById("Agecurrent").value;
    let monDate = new Date(currentMonth);
    let diffMonth = monDate.getMonth() + 1;

    let monthUs = document.getElementById("Ageuser").value;
    let monthDate = new Date(monthUs);
    let monthConvert = monthDate.getMonth() + 1;

    let diffMonResult = Math.abs(diffMonth - monthConvert);
    //days//
    let currDate = document.getElementById("Agecurrent").value;
    let currentDate = new Date(currDate);
    let diffDates = currentDate.getDate();

    let userDates = document.getElementById("Ageuser").value;
    let useDate = new Date(userDates);
    let difUsDate = useDate.getDate();
    let diffDate = Math.abs(diffDates - difUsDate);

    document.getElementById("Result").innerText = `Age: ${diffyearResult} years`;
    document.getElementById("ResultMo").innerText = `Month: ${diffMonResult} months`;
    document.getElementById("ResultDay").innerText = `Days: ${diffDate} days`;
}
// https://themewagon.github.io/gymlife/