
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

  $('.datepicker_content').on('click', ".week_day",  function() {
    $('.week_day').removeClass("active")
    $(this).addClass('active')
    const day = $(this).text()
    const dayNumber = parseInt(day)+1
    const choiseDate = now.setDate(dayNumber)
    const DateString = new Date(choiseDate)
    const DateToShowInInput = DateString.toISOString().split('T')[0]
    $('input').val(DateToShowInInput)
   })

  