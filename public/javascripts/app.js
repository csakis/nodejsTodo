$('.btn-complete').on('click', function(){
  var index = $(this).data('idx');
  var complete = $(this).data('complete');
  console.log(index);
  $.post("/update", {index: index, complete:complete}, function(){
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

