var studentsArray = [] 
function submit() {
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var emailPhone = document.getElementById("emailPhone").value
    var password =  document.getElementById("password").value

    if (firstName === '' || lastName ===  '' || emailPhone === '' || password === '') {
        emptyField.style.display =  "block"
        // alert("Input fields mustn't be left empty")
    } else {
        var confirmation = confirm('Are you sure you want to submit the provided information?')
            if (confirmation) {
                var inputObj = {firstName,lastName,emailPhone,password}
                studentsArray.push(inputObj)
                show.innerHTML = ""
                showInfo(
                )
                document.getElementById("firstName").value =''
                document.getElementById("lastName").value =''
                document.getElementById("emailPhone").value = ''
                document.getElementById("password").value =''
            }   else {
                alert("Failed to submit, retry again...")
                document.getElementById("firstName").value
                document.getElementById("lastName").value 
                document.getElementById("emailPhone").value
                document.getElementById("password").value
            }            
        }
    }

    function showInfo() {
        var table = `<table>`
        table += `<th>S/N</th>`
        table += `<th>First Name</th>` 
        table += `<th>Last Name</th>` 
        table += `<th>Email/Phone Number</th>`
        table += `<th colspan="2">Actions</th>` 
        for (let i = 0; i < studentsArray.length; i++) {
            console.log(studentsArray);
            table += `<tr>`
            table += `<td>${i+1}</td>`
            table += `<td>${studentsArray[i].firstName}</td>`
            table += `<td>${studentsArray[i].lastName}</td>`
            table += `<td>${studentsArray[i].emailPhone}</td>`
            table += `<td><button class="btn btn-outline-danger px-2 fw-bold" onclick="del(${i})"><i class="fa-solid fa-trash-can"></i></button></td>`
            table += `<td><button class="btn btn-outline-warning px-2 fw-bold" onclick="edit(${i+1})"><i class="fa-regular fa-pen-to-square fw-bold"></i></button></td>`
            table += `</tr>`                                        
        }
        table += `</table>`
        show.innerHTML = table
    }

    function del(i) {
        studentsArray.splice(i, 1)
        showInfo()
        
    }
    
    function updateDateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();

    document.getElementById('dateTimeId').innerText = '📆: ' + date  + ' ⌚: ' + time;
    
}

setInterval(updateDateTime, 1000);