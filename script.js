var studentsArray = [] 
function submit() {
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var emailPhone = document.getElementById("emailPhone").value
    var password =  document.getElementById("password").value

    if (firstName === '' || lastName ===  '' || emailPhone === '' || password === '') {
        alert("Input fields mustn't be left empty")
    } else {
        var inputObj = {firstName,lastName,emailPhone,password}
        studentsArray.push(inputObj)
        console.log(studentsArray);

        document.getElementById("firstName").value =''
        document.getElementById("lastName").value =''
        document.getElementById("emailPhone").value = ''
        document.getElementById("password").value =''
    }
}

function updateDateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();

    document.getElementById('dateTimeId').innerText = '📆: ' + date  + ' ⌚: ' + time;
    
}

setInterval(updateDateTime, 1000);