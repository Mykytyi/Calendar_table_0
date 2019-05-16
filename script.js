function createCalendar(id, year, month) {
  let week = ['пн','вт','ср','чт','пт','сб','вс'];

  let newDiv = document.createElement('div');
  let calend = document.body.insertBefore(newDiv, document.body.getElementsByTagName('script')[0]);

  calend.setAttribute('id', id);

  let mainTable = calend.appendChild(document.createElement('table'));
  let mainTBody = mainTable.appendChild(document.createElement('tbody'));

  let day = 1;

  let mon = month - 1;
  let d = new Date(year, mon);
  let daysInTheMonth = daysInMonth(month, year);
  let startWeek = d.getDay() - 1; // начало недели 0пн-6вс

  let row;
  for (let i = 0; i < 1; i++) {
    row = mainTBody.appendChild(document.createElement('tr'))
      for (let j = 0; j < 7; j++) {
        row.appendChild(document.createElement('th')).innerHTML = week[j];
      }
  }

  for (let i = 0; i < 5; i++) {
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
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

createCalendar("cal", 2012, 9);