var visits=[]
$('#add').click(function (){
    var result=false
for(var i=0;i<visits.length;i++){
    if (visits[i]===($('#visits').val())){
     result=true;
    }
}
if (result===false){
visits.push($('#visits').val())
}
else
alert("this destination is already selected")
})

