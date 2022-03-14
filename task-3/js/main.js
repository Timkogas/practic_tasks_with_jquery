let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let currentDayOfWeek = now.getDay()
let lastDayOfMonth = new Date(year, month + 1, 0)
let firstDayOfMonth = new Date(year, month, 1)

const getCurrentMonthString = () => {
  const month = now.getMonth()
  switch (month) {
    case 0:
      return "Январь";
      break;
    case 1:
      return "Февраль";
      break;
    case 2:
      return "Март";
      break;
    case 3:
      return "Апрель";
      break;
    case 4:
      return "Май";
      break;
    case 5:
      return "Июнь";
      break; 
    case 6: 
      return "Июль";
      break;
    case 7:
      return "Август";
      break; 
    case 8:
      return "Сентябрь";
      break;
    case 9:
      return "Октябрь";
      break; 
    case 10:
      return "Ноябрь";
      break; 
    case 11:
      return "Декабрь";
      break;    
  }
}

const renderNamesDaysOfWeekForDatapicker = () => {
  const days = $(`<div class="datapicker_content_week">
  <span class='week_names'>ПН</span>
  <span class='week_names'>ВТ</span>
  <span class='week_names'>СР</span>
  <span class='week_names'>ЧТ</span>
  <span class='week_names'>ПТ</span>
  <span class='week_names'>СБ</span>
  <span class='week_names'>ВС</span>
  </div>`)
  days.appendTo('.datepicker_content')
}

const renderDaysOfMonthForDatapicker = () => {
  let dayMonth = 1
  let firstWeekDays = 0
  let countEmptyDays = firstDayOfMonth.getDay()-1
  if (firstDayOfMonth.getDay() === 0) {  /* Если месяц начинается на воскресенье */
    countEmptyDays = 6
  }
  for(let i = 0; i < 42; i++) {
    if (firstWeekDays < countEmptyDays) {
      const divWeekSpanEmpty = $('<span></span>')
      divWeekSpanEmpty.appendTo('.datapicker_content_week')
      firstWeekDays++ 
      } else if (dayMonth <= lastDayOfMonth.getDate()) {
        const divWeekSpanFull = $(`<span class='week_day'>${dayMonth}</span>`)
        divWeekSpanFull.appendTo('.datapicker_content_week')
        dayMonth++
      } else {
        const divWeekSpanEmpty = $('<span></span>')
        divWeekSpanEmpty.appendTo('.datapicker_content_week')
      }
    }

}

$('#datepicker_input').on('click', (e) => {
  $('.datepicker_block').toggle()
})
const datepickerGenerate = () => {
  $(`<p class="datepicker_header_date">
  ${getCurrentMonthString()}, 
  ${year}
  </p>`).appendTo(".datepicker_header_date")

  renderNamesDaysOfWeekForDatapicker()
  renderDaysOfMonthForDatapicker()
}

