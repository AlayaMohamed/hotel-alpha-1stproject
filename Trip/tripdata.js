var visits = []
$('#add').click(function () {
    var result = false
    for (var i = 0; i < visits.length; i++) {
        if (visits[i] === ($('#visits').val())) {
            result = true;
        }
    }

    if (($('#visits').val()) === '') {
        alert('select a trip')

    };
    if ((result === false) && (($('#visits').val()) !== '')) {
        visits.push($('#visits').val())

        $('#triplist').append('<li>' + $('#visits').val() + '</li>')

    }

})

  
  function tripdatefunction() {
    

    tripdate=document.getElementById("tripdate").value;
    localStorage.setItem("tripdate", tripdate);
    document.getElementById("date").innerHTML = "";
    $('#date').append(tripdate)
    
  }


function handletsubmit() {

    i = document.getElementById('visits').value;

    localStorage.setItem(i, i);

}

function removetrip() {
    localStorage.clear();
    tripdate = document.getElementById("tripdate").value;
    localStorage.setItem("tripdate", tripdate);
    $('#triplist').empty()

    visits = [];
}

$('#submittrip').click(function(){
 
    if((visits.length=== 0)||(($('#tripdate').val()===undefined))||(($('#ridetype').val())===undefined)||(($('#nbrperson').val())===undefined)){
alert('please fill all field')
    }
else window.open("file:///C:/Users/Dream%20Team/Desktop/project1/hotel-alpha-1stproject/Trip/tripresume.html");
})

