$('.btn-complete').on('click', function(){
  var index = $(this).data('idx');
  $.post("/update", {index: index}, function(){
    window.location = "/";
  });
});

