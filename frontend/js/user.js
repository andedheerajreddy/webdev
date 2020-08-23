$(function(){
    $("#submit").on("click",()=>{
        var jsondata={
            id:$("#_id").val(),
            name:$("#name").val(),
            age:$("#age").val(),
            mobile:$("#mobile").val()
          }
          $.ajax({
              type:"post",
              url:"/api/users/create",
              data: jsondata,
              success: function(da){
                    if(da.errmssg==null){
                   $("h5").html("SUCCESSFULLY ADDED!!!").show(()=>{
                          setTimeout(() => {
                            $("h5").html("")
                        }, 3000);
                   })
                   var txt="<tr><td>"+da.id+"</td><td>"+da.name+"</td><td>"+da.age+"</td><td>"+da.mobile+"</td"+"</tr>";
                   $("#table").append(txt);
                }
                 else{
                    if(da.duplicatekey==true){
                    $("h5").html("USER ID ALREADY EXISTS!").show(()=>{
                        setTimeout(() => {
                        $("h5").html("")
                        }, 3000);
                 })}
                    else{
                    $("h5").html(da.errmssg).show(()=>{
                        setTimeout(() => {
                            $("h5").html("")
                        }, 3000);
                 })
                }
                 }
                 $("#_id").val("");
                 $("#name").val("");
                 $("#age").val("");
                 $("#mobile").val("");
                   
              } ,
              error:(err)=>{
                $("h5").html(err).show(()=>{
                    setTimeout(() => {
                        $("h5").html("")
                    }, 3000);
             })
                $("#_id").val("");
                $("#name").val("");
                $("#age").val("");
                $("#mobile").val("");

              }
          })
    })
  
   
    $.ajax({
        type:"get",
        url:"/api/users",
        success:function(data){
                display(data);
        },
        error: (err)=>{
            console.log("ERROR");
        }
    })

function display(data){
    var txt="<tr><th>ID</th><th>NAME</th><th>AGE</th><th>MOBILE</th></tr>";
     for(var i=0;i<data.length;i++){
         txt+="<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].age+"</td><td>"+data[i].mobile+"</td"+"</tr>";
     }
   
     $("#table").html(txt);
}

})