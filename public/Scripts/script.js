$(document).ready(function(){
	
});


$('#sendMsg').click(()=> {
    
    console.log("submit btn clicked")
    
    var studentName = $("#studentName").val();
    var msgName = $("#studentMsg").val();
    
    l(`The student ${studentName} wrote ${msgName}`);
    
    var msg = `<p class='msg'>Your name: ${studentName} <br> Your message:   ${msgName} </p>`
    
    $("#messageBox").append(msg);
});




    

$('#changeClr').click(function() {
    l('inside')
    $('.msg').css('border-color', getColor())
});




let colorIndex = -1;

function getColor() {
    
    colorIndex++;
    
    if(colorIndex === 4) {
        colorIndex = 0;
    }
    
    const colors =["yellow","pink","red","green"];
    
    return colors[colorIndex];
    
}



var l = (mes) => {
    console.log(mes);
}