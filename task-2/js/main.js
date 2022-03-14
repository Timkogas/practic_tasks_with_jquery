$('.content-item').first().show()
$('.item').on('click', function() {
  const contentID = $(this).attr('href')
  $('.content-item').hide()
  $(`${contentID}`).show()
})