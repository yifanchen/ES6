(function() {
  $('.btn').on('click', function() {
    let id = $(this).attr('id');
    $(`.${id}`).fadeToggle();
  })
})();
