$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formatData = new formatData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formatData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
  
});