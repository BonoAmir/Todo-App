
var add=$("#todoText");


add.on("keypress",function(e){
    if(e.which==13){
        if  ($(this).val()!=""){
            var newTodo=$(this).val();
           $("ul").append("<li>" +" "+newTodo+" "+"<span class='remove'><i class='far fa-trash-alt'></i></span><span class='done'><i class='fas fa-check'></i></span></li>");
           add.val("");
            

        }
        else{
            alert("Please Enter A To-Do");
        }
        
    }


})

$("ul").on("click",".done",function (event){
    $(this).parent().toggleClass("checked");
    event.stopPropagation();

})

$("ul").on("click",".remove",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    
    event.stopPropagation();
})


$(".fa-pencil-alt").click(function(){
add.fadeToggle();
})
