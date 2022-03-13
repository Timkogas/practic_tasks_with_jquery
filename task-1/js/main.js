const addContentToModalAlert = (title, htmlText) => {
  $('#modal_header_title').text(title)
  $(`${htmlText}`).appendTo("#modal_html_text")
}

$('.btn_alert').click( (e) => {
  $('#modal').toggle()
  $('#overlay').toggle()
})

$("#modal_btn").click( (e) => {
  $('#modal').toggle()
  $('#overlay').toggle()
})
$("#overlay").click( (e) => {
  $('#modal').toggle()
  $('#overlay').toggle()
})