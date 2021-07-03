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

        $('#triplist').append( $('#visits').val() + '<br>')

    }

})


function tripdatefunction() {


    tripdate = document.getElementById("tripdate").value;
    if(visits.length===0){
        localStorage.clear();
        localStorage.setItem("tripdate", tripdate);
    document.getElementById("date").innerHTML = "";
    $('#date').append(tripdate)
    }

    else {localStorage.setItem("tripdate", tripdate);
    document.getElementById("date").innerHTML = "";
    $('#date').append(tripdate)}

}


function addtrip() {

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

var rides = [];
$('#addride').click(function () {

    document.getElementById('ride').innerHTML = ""
    rides = [];
    $('#ride').append($('#ridetype').val() );
    riding = document.getElementById("ridetype").value;
    localStorage.setItem("ridetype", riding);
    rides.push($('#ridetype').val());
})



var persons = [];
$('#addpersons').click(function () {

    document.getElementById('divpersons').innerHTML = ""
    persons = [];

    $('#divpersons').append($('#nbrperson').val() );

    occupants = document.getElementById("nbrperson").value;
    localStorage.setItem("nbrperson", occupants);

    persons.push($('#nbrperson').val());
})

$('#submittrip').click(function () {

    if ((visits.length === 0) || (($('#tripdate').val() === undefined)) || (rides.length === 0) || (persons.length === 0)) {
        alert('please fill all field')
    }
    else window.open("file:///C:/Users/Dream%20Team/Desktop/project1/hotel-alpha-1stproject/Trip/tripresume.html");

})