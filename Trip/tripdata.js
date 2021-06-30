var visits = []
$('#add').click(function () {
    var result = false
    for (var i = 0; i < visits.length; i++) {
        if (visits[i] === ($('#visits').val())) {
            result = true;
        }
    }
    if (result === false) {
        visits.push($('#visits').val())
        x=$('#visits').val();
        console.log(x)

    }
    else
        alert("this destination is already selected")
})


function handletsubmit(){

      i = document.getElementById('visits').value;

    localStorage.setItem(i, i)

   return 
}

