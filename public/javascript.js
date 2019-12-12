document.getElementById('satModal').style.display = "none"
document.getElementById('schoolModal').style.display = "none"



function showSATModal(){
document.getElementById('satModal').style.display="block"
}
function showSchoolModal(){
    document.getElementById('schoolModal').style.display="block"
    }
function hideModal(){
    document.getElementById('satModal').style.display="none"
    document.getElementById('schoolModal').style.display="none"
}

if(newLeft>200){
$("#satModal").css("left", newLeft);
$("#schoolModal").css("left", newLeft);

}