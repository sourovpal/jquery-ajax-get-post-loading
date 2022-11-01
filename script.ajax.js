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

$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});
