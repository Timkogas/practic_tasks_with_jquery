$('.content-item').first().show()
$('.item').first().addClass("active")
$('.item').on('click', function() {
  $('.item').removeClass("active")
  $(this).addClass('active')
  const contentID = $(this).attr('href')
  $('.content-item').hide()
  $(`${contentID}`).show()
})