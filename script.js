function createCalendar(id, year, month) {
  const week = ['пн','вт','ср','чт','пт','сб','вс'];

  let newDiv = document.createElement('div');
  let calend = document.body.insertBefore(newDiv, document.body.getElementsByTagName('script')[0]);

  calend.setAttribute('id', id);

  let mainTable = calend.appendChild(document.createElement('table'));
  let mainTHead = mainTable.appendChild(document.createElement('thead'));
  let mainTBody = mainTable.appendChild(document.createElement('tbody'));

  let day = 1;

  let choosenDate = new Date(year, month - 1);
  let daysInTheMonth = daysInMonth(month, year);
  console.log(daysInTheMonth);
  let startWeek = choosenDate.getDay() - 1;
  if (startWeek === -1) startWeek = 6; // начало недели 0пн-6вс
  console.log(startWeek);

  let amountOfRows;
  let row;
  row = mainTHead.appendChild(document.createElement('tr'))
  for (let j = 0; j < 7; j++) {
    row.appendChild(document.createElement('th')).innerHTML = week[j];
  }

  for (let i = 0; i < 6; i++) {
    row = mainTBody.appendChild(document.createElement('tr'))
    for (let j = 0; j < 7; j++) {
      if(i === 0 && j < startWeek || day > daysInTheMonth) {
        row.appendChild(document.createElement('td'));
      } else {
        row.appendChild(document.createElement('td')).innerHTML = day;
        day++;
      }
    }
  }
  if (row.children[0].innerHTML === '') {
    mainTBody.lastElementChild.remove();
  }
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

createCalendar("cal", 2019, 5);


function NewCode() {

}