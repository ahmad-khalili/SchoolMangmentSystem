var students = [];

document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault()
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gpaInputEl = document.getElementById('gpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gpaInputEl.value);

	// Show success message
	showMessage('success');

    
});

function inputValidation(name, id, gpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student`s name');
	}

	if (id == '') {
		alert('Please insert the student`s id number');
	}

	if (gpa == '') {
		alert('Please insert the student`s gpa');
	}
}

function insertStudent(name, id, gpa) {
	let student = {
		name: name,
		id: id,
		gpa: gpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Student added!')
    }else{
        alert('Failed to add student')
    }
}
document.getElementById('Display').addEventListener('click', (e) => {
	e.preventDefault()

	var html = "<table border='1'>";

	    for (var i = 0; i < students.length; i++) {
		html+="<tr>";
		html+="<td>"+students[i].name+"</td>";
		html+="<td>"+students[i].id+"</td>";
		html+="<td>"+students[i].gpa+"</td>";
		html+="</tr>";
	}
	html+="</table>";
	document.getElementById("students").innerHTML = html;
});
document.getElementById('Delete').addEventListener('click', (e) => {
	e.preventDefault()
	let idInput = document.getElementById('DelID');
	var i;
	for (i = 0; i < students.length; i++) {
		if(students[i].id==idInput.value){
			delete students[i].name;
			delete students[i].gpa;
			delete students[i].id;
			alert("Student Deleted!");
			break;
		}
	}
	if (i == students.length)
	alert("Student not found");
	});