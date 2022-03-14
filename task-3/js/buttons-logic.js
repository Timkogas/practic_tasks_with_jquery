
  $('#next').on('click', (e) => {
    $('.datepicker_header_date').empty()
    $('.datepicker_content').empty()
    now.setMonth(now.getMonth() + 1)
    year = now.getFullYear()
    month = now.getMonth()
    lastDayOfMonth = new Date(year, month + 1, 0)
    firstDayOfMonth = new Date(year, month, 1)
    datepickerGenerate()
  })

  $('#prev').on('click', (e) => {
    $('.datepicker_header_date').empty()
    $('.datepicker_content').empty()
    now.setMonth(now.getMonth() - 1)
    year = now.getFullYear()
    month = now.getMonth()
    lastDayOfMonth = new Date(year, month + 1, 0)
    firstDayOfMonth = new Date(year, month, 1)
    datepickerGenerate()
  })

  $('.week_day').on('click', function() {
    $('.week_day').removeClass("active")
    $(this).addClass('active')
  })