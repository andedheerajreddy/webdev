

// var httpsreq= new XMLHttpRequest();
// httpsreq.onreadystatechange=function(){
//     if(this.readyState==4){
//                 data(this.responseText);
//     }
// }
// httpsreq.open("get","/api/data",true);
// httpsreq.send();

// function data(jsondata){
//     jsondata=JSON.parse(jsondata);
//     console.log( jsondata );
// }

$(function(){
    $.ajax({
        type:"get",
        url:"/api/data",
        success : function(data){
        display(data);
        },
        error:function(){
            console.error("error");
        } 
    })
})

function display(da){
   var  data=da;
       var txt="";
       txt="<table><tr><th>Name</th><th>AGE</th></tr>"
       for(var i=0;i<data.length;i++){
           txt+="<tr><td>"+data[i].name+"</td><td>"+data[i].age+"</td></tr>";
       }
       txt+="</table>";
       $("#dynamictable").html(txt);
}