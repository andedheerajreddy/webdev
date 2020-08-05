$(function(){
    var prev;
    var visitied=[];
    var count=0;
    var rand;
    $("button").click(function(){
        prev=rand;
         rand=Math.floor(Math.random()*90);
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
            if(count>1)
            $(".previous").html(prev);
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
    
    
        $(".number").hide().slideUp().slideDown("slow");
        // $(".number").animate({zoom:"200%"},1000);
        // $(".number").animate({zoom:"100%"},1000);
    }
    })
  

})