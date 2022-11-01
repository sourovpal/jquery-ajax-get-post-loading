 $("#add_new_admin_form").submit(function(e){
        e.preventDefault();
        $.ajax({
            url:'{{route("admin.create")}}',
            type: "POST",
            data:$(this).serialize(),
            dataType: 'script',
            cache: false,
            contentType: false,
            processData: false,                        
            type: 'post',
            beforeSend:function(res){
                console.log('beforeSend', res);
            },
            success:function(res){
                console.log('success', res);
            },
            error:function(res){
                console.log('error', res);
            },
            complete:function(res){
                console.log('complete', res);
            }
        });
    });
});


$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success");
      $("#mypar").html(response.amount);
});



var request = $.ajax({
  url: "script.php",
  type: "POST",
  data: {id : menuId},
  dataType: "html"
});

request.done(function(msg) {
  $("#log").html( msg );
});

request.fail(function(jqXHR, textStatus) {
  alert( "Request failed: " + textStatus );
});


request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });



$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});
