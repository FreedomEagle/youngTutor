function hideHeading(button){
        var hidebox = document.getElementById(button)
        hidebox.addEventListener("click",function(){
            $("#questionHeader").addClass("displaynone")
            $(hidebox).addClass("displaynone")
            $("#showQuestionarrow").css("display","inline")
            
    })    
}
function showHeading(button){
    var showbox = document.getElementById(button)
    showbox.addEventListener("click",function(){
       $("#questionHeader").removeClass("displaynone")
       $("#hideQuestionArrow").removeClass("displaynone")
       $("#showQuestionarrow").css("display","none")
})    
}
hideHeading("hideQuestionArrow")
showHeading("showQuestionarrow")

