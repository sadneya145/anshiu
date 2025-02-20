class Person {
    constructor(name, contactNo, course) {
        this.name = name;
        this.contactNo = contactNo;
        this.course = course;
    }

    printDetails() {
        return `Name: ${this.name}<br>Contact Number: ${this.contactNo}<br>Course: ${this.course}<br>`;
    }
}

class Student extends Person {
    constructor(name, contactNo, course) {
        super(name, contactNo, course);
    }

    printDetails() {
        return `Student Details - <br>Name: ${this.name}<br>Contact Number: ${this.contactNo}<br>Course: ${this.course}<br>`;
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const contactNo = document.getElementById('contactNo').value;
    const course = document.getElementById('course').value;

    if (name === '' || course === '' || contactNo === '') {
        alert('All fields must be filled out.');
        return false;
    }

    // Ensure contact number has exactly 10 digits
    if (contactNo.length !== 10 || isNaN(contactNo)) {
        alert('Contact Number must have exactly 10 digits.');
        return false;
    }

    return true;
}

document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); 
    if (!validateForm()) {
        return; 
    }

    const name = document.getElementById('name').value;
    const contactNo = document.getElementById('contactNo').value;
    const course = document.getElementById('course').value;

    const student = new Student(name, contactNo, course);

    const receiptDate = new Date();
    const receiptContent = `
        Registration Successful!<br>
        Date: ${receiptDate.toLocaleDateString()}<br>
        ${student.printDetails()}
    `;

    document.getElementById('receiptContent').innerHTML = receiptContent;
    document.getElementById('receipt').style.display = 'block';
};

function closeReceipt() {
    document.getElementById('receipt').style.display = 'none';
}
