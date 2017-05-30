$('.btn-complete').on('click', function(){
  var index = $(this).data('idx');
  $.post("/update", {index: index}, function(){
    window.location = "/";
  });
});
$('#removeComplete').on('click', function(){
  $.post("/removeComplete", function(){
    window.location = "/";
  });
});
$('#todoBtn').on('click', function(){
  $.post("/addTask", {task: $("#todoInput").val()}, function(){
    window.location = "/";
  });
});

