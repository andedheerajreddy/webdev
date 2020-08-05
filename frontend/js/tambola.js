$(function(){
  
    var visitied=[];
    var count=0;
    $("button").click(function(){
        
        var rand=Math.floor(Math.random()*90);
        rand++;
        if(count==90){

            alert("DONE WITH ALL THE NUMBERS!!!");

        }
        else{
        while(visitied[rand]=="true"){
            rand=Math.floor(Math.random()*90);rand++;
        }
            visitied[rand]="true";
            count++;
        $(".number").html(rand);
        var a=$("td");
        var c=0;
      a.each(function(){
         if(c==rand){
             rand= rand.toString();
             console.log(typeof(rand));
             
             $(this).html("<span>"+rand.toString()+"</span>");    
         }
         c++;
      })
    
    
      //   $(".number").hide(1000).show(1000).fadeOut().fadeIn();
        $(".number").animate({zoom:"200%"},1000);
        $(".number").animate({zoom:"100%"},1000);
    }
    })
  

})