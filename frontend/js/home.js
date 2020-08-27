$(function(){
    
    $.ajax({
        type:"get",
        url:"api/loggeduser",
        success: function(da){
           ;
          $("#user").append(da.username);
        }
    })
})