var day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function Calculator() {
  var result = 0;
  for (var i = 0; i < 7; i++) {
    var startTime = TimeCalculate(
      `startHours${day[i]}`,
      `startMinutes${day[i]}`
    );

    var endingTime = TimeCalculate(
      `endingHours${day[i]}`,
      `endingMinutes${day[i]}`
    );

    var breakTime = TimeCalculate(
      `breakHours${day[i]}`,
      `breakMinutes${day[i]}`
    );

    var totalWorkTimeInMinutes = endingTime + 720 - startTime - breakTime;

    result = result + totalWorkTimeInMinutes;
    const hours = Math.floor(totalWorkTimeInMinutes / 60);
    const minutes = totalWorkTimeInMinutes % 60;

    var select1 = document.getElementById(`${day[i]}TotalWork`);
    select1.innerText = hours + "." + minutes;
  }
  var selectTotalWorkingTime = document.getElementById("totalWorkingTime");
  console.log(selectTotalWorkingTime);
  selectTotalWorkingTime.innerText =
    Math.floor(result / 60) + "." + (result % 60);
}

function TimeCalculate(str1, str2) {
  return (
    parseInt(document.getElementById(str1).value) * 60 +
    parseInt(document.getElementById(str2).value)
  );
}

function ClearAll() {
  for (var i = 0; i < 7; i++) {
    clear(`startHours${day[i]}`, `startMinutes${day[i]}`);

    clear(`endingHours${day[i]}`, `endingMinutes${day[i]}`);

    clear(`breakHours${day[i]}`, `breakMinutes${day[i]}`);
  }
}

function clear(str1, str2) {
  document.getElementById(str1).value = 8;
  document.getElementById(str2).value = "00";
}
