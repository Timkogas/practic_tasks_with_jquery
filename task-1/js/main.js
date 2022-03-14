const modalAlert = (title, htmlText, callBack) => {
  $('#modal_header_title').text(title)
  $(`${htmlText}`).appendTo("#modal_html_text")
  if (callBack === undefined) {
    $("#modal_btn").click( (e) => {
      $('#modal').toggle()
      $('#overlay').toggle()
    })
  } else if (callBack !== undefined) {
    $("#modal_btn").click( (e) => {
      callBack()
    })
  }
}

$('.btn_alert').click( (e) => {
  $('#modal').toggle()
  $('#overlay').toggle()
})

$("#overlay").click( (e) => {
  $('#modal').toggle()
  $('#overlay').toggle()
})

const callBack = () => {
  console.log("Кнопка не закроет алерт")
}