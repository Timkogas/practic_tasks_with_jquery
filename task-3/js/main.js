const now = new Date()
const getCurrentYearNumber = () => {
  const year = now.getFullYear()
  return year
}

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
const currentDayOfWeek = () => {
  const currentDayOfWeek = now.getDay()
  return currentDayOfWeek
}
const lastDayOfMonth = () => {
  const lastDayOfMonth = new Date(year, month + 1, 0)
  return lastDayOfMonth
}
const firstDayOfMonth = () => {
  const firstDayOfMonth = new Date(year, month, 1)
  return firstDayOfMonth
}

$('#datepicker_input').on('click', (e) => {
  $('.datepicker_block').toggle()
})

const datepickerGenerate = () => {
  $(`<p class="datepicker_header_date">
  ${getCurrentMonthString()}, 
  ${getCurrentYearNumber()}
  </p>`).appendTo(".datepicker_header")

  $('<button class="btn_datapicker next"> > </button>').appendTo(".datepicker_header")
  $('<button class="btn_datapicker prev"> < </button>').prependTo(".datepicker_header")
}


