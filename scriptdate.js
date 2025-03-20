// Set the time correctly for the id "datetime"
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = now.toLocaleString();
}

//Update Weekday
function weekDayTime () {
    const weekday = ["Domingo", "Segunda-feira", "Ter&#199;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"];

    const d = new Date();
    let day = weekday[d.getDay()];

    return document.getElementById("weekday").innerHTML = day;
}


//Call function date and Update the date/time every second
setInterval(updateDateTime, 1000);

//Call function weekday
weekDayTime();