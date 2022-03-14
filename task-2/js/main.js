const activeTabs = (container) => {
$('.content-item').first().show()
$(`${container}`).find('.item').eq(0).addClass("active")
$(`${container}`).first().on('click', '.item', function() {
  $('.item').removeClass("active")
  $(this).addClass('active')
  const contentID = $(this).attr('href')
  $('.content-item').hide()
  $(`${contentID}`).show()
})
}