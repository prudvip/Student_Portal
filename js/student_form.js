'use strict';

var form = document.getElementById('student-input');
var table = document.getElementById('student_table');
var areas = document.getElementById('areas').value;
var headEl = document.getElementById("header");
var pEl = document.getElementById("list_header");
var collegeData = [];
var resultArray = [];

class AddCollege {
    constructor(collegeName, website, placement, cutoff, collegeRank) {
        this.collegeName = collegeName;
        this.website = website;
        this.placement = placement;
        this.cutoff = cutoff;
        this.collegeRank = collegeRank;
    }
}

var iitM = new AddCollege('IIT Bombay', 'http://www.iitb.ac.in', '98%', 15, '3');
var iitK = new AddCollege('IIT Kharagpur', 'http://www.iitkgp.ac.in', '90%', 300, '4');
var dtuD = new AddCollege('Delhi Technological University', 'http://www.dtu.ac.in/', '85%', 345, '7');
var nitA = new AddCollege('National Institute of Technology  Allahabad', 'http://www.mnnit.ac.in', '82%', 400, '12');
var nitB = new AddCollege('National Institute of Technology Bhopal', 'http://www.manit.ac.in', '78%', 745, '15');
var nitW = new AddCollege('National Institute of Technology  Warangal', 'http://www.nitw.ac.in', '93%', 500, '21');
var jntuH = new AddCollege('JNTU Hyderabad', 'http://jntuh.ac.in', '79%', 1023, '34');
var juC = new AddCollege('Jadhavpur University, Calcutta', 'http://www.jaduniv.edu.in/', '68%', '99999', '50');

collegeData = [iitM, iitK, dtuD, nitA, nitB, nitW, jntuH, juC];

function evaluateData(event) {
    event.preventDefault();
    var student_name = event.target.student_name.value;
    var rank = event.target.rank.value;
    var areas = event.target.areas.value;
    

    for (var j = 0; j < collegeData.length; j++) {
        if (rank <= collegeData[j].cutoff && rank > 0) {
            resultArray.push(collegeData[j]);
        }    
    } 
    if (rank <= 0){
        alert("Please enter Valid Rank between 1 and 99999") }
    createCollegeList(resultArray);    
}


function createCollegeList(resultArray) {
    var row;
    if (resultArray.length > 0) {
        headEl.innerHTML = '<th>College Name</th><th>College Rank</th><th>Placement Percentage</th><th>Cutoff Rank</th><th>Website</th>';
        for (var i = 0; i < resultArray.length; i++) {
            row = document.createElement('tr');
            row.innerHTML = '<td>' + resultArray[i].collegeName + '</td><td>' + resultArray[i].collegeRank + '</td><td>' + resultArray[i].placement + 
                '</td><td>' + resultArray[i].cutoff + '</td><td><a href="' + resultArray[i].website + '" target="_blank">' + resultArray[i].website + '</a></td>';
            table.appendChild(row);
        }
        pEl.textContent = "Here is the list of colleges in which you can apply - ";
        document.getElementById('submit').disabled = true;
    }
}


function resetForm(event) {
    console.log('resetting form');
    headEl.innerHTML = '';
    table.innerHTML = '';
    pEl.textContent = '';
    resultArray = [];
    document.getElementById('submit').disabled = false;
}

function goToHomepage() {
    window.location.href="index.html";
}

  

form.addEventListener('submit', evaluateData);
form.addEventListener('reset', resetForm);