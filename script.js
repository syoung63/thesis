
// Get the current URL path
let path = window.location.pathname;

// Display the highlight over which page the user is on in the nav bar
let selected = document.getElementById("highlight");

// if (path == "/index.html") {
//     selected.style.display = "block";
// }else if(path == "/classroom.html"){
//     selected.style.top = "38%";
// }


// State 
let classroomName, savedClassroomName, classHeading;

let classTitleInput = document.getElementById('classTitleInput');
let introContainer = document.getElementById('intro');
let classHome = document.getElementById('classroomHome');
let cardsContainer = document.getElementById('cardsContainer');
let addClassBtn = document.querySelector('#js-add-class');

if (addClassBtn) {
    addClassBtn.addEventListener('click', function(){
      
        classroomName = classTitleInput.value;
        sessionStorage.setItem("savedClassroomName", classroomName);

        introContainer.style.display = 'none';
        classHome.style.display = 'flex';

        createClassCard(classroomName);

        $('#addClassModal').modal('hide')
    })
}

if(path == "/index.html"){
    classroomName = sessionStorage.getItem("savedClassroomName");
    
    if(classroomName !== null){
        introContainer.style.display = 'none';
        classHome.style.display = 'flex';

        createClassCard(classroomName);
    }
}

if(path == "/myclassrooms.html"){
    classroomName = sessionStorage.getItem("savedClassroomName");
    
    if(classroomName !== null){
        introContainer.style.display = 'none';
        classHome.style.display = 'flex';

        createClassCard(classroomName);
    }
}


let studentName = '';
let studentNameInput = document.getElementById('studentNameInput');
let addStudentBtn = document.querySelector('#js-add-student');
let classPage = document.getElementById('classroomPage');
let studentCardsContainer = document.getElementById('studentCardsContainer');
let studentGradeInput = document.getElementById('studentGradeInput');


if (addStudentBtn) {
    addStudentBtn.addEventListener('click', function(){
      
        studentName = studentNameInput.value;
        sessionStorage.setItem("savedStudentName", studentName);
        studentName = sessionStorage.getItem("savedStudentName");

        studentGrade = studentGradeInput.value;
        sessionStorage.setItem("savedStudentGrade", studentGrade);
        studentGrade = sessionStorage.getItem("savedStudentGrade");

        introContainer.style.display = 'none';
        classroomPage.style.display = 'flex';

        createStudentCard(studentName, studentGrade);

        $('#addStudentModal').modal('hide')
    })
}

if(path == "/classroom.html"){
    studentName = sessionStorage.getItem("savedStudentName");
    studentGrade = sessionStorage.getItem("savedStudentGrade");
    
    if(studentName !== null){
        introContainer.style.display = 'none';
        classroomPage.style.display = 'flex';

        createStudentCard(studentName, studentGrade);
    }
}



function createClassCard(classroomName) {
        // Create the link element and append it to the cardsContainer element
        let classLink = document.createElement("a");
        classLink.style.textDecoration = "none";
        classLink.href = "/classroom.html";
        cardsContainer.appendChild(classLink);
    
        // Create the class card div element and append it to the link element
        let classCard = document.createElement("div");
        classCard.setAttribute("class", "classCard");
        classLink.appendChild(classCard);
    
        // Create the image element for the card and append it to the classCard element
        let shapesImg = document.createElement("img");
        shapesImg.src = "assets/shapes1.svg";
        shapesImg.setAttribute("class", "cardImg");
        classCard.appendChild(shapesImg);
    
        // Create the div element with class "classTitle", set its text content to the classroomName variable, and append it to the classCard element
        let classTitle = document.createElement("div");
        classTitle.setAttribute("class", "classTitle");
        classTitle.textContent = classroomName;
        classCard.appendChild(classTitle);
  }

  //create a card for the student using the student's name
  function createStudentCard(studentName, studentGrade) {
        studentLink = document.createElement("a");
        studentLink.style.textDecoration = "none";
        studentLink.href="/studentProfile.html";
        studentCardsContainer.appendChild(studentLink);

        studentCard = document.createElement("div");
        studentCard.setAttribute("class", "studentCard");
        studentLink.appendChild(studentCard);

        studentInfo = document.createElement("div");
        studentInfo.setAttribute("class", "studentInfo");
        studentCard.appendChild(studentInfo);

        studentTitle = document.createElement("div");
        studentTitle.setAttribute("class", "studentName");
        studentTitle.textContent = studentName; 
        studentInfo.appendChild(studentTitle);

        if(studentGrade){
            studentGradeHeading = document.createElement("div");
            studentGradeHeading.setAttribute("class", "studentGrade");
            studentGradeHeading.textContent = "Grade " + studentGrade; 
            studentInfo.appendChild(studentGradeHeading);
        }

        let profileImg = document.createElement("img");
        profileImg.src = "assets/default_profile.svg";
        profileImg.setAttribute("class", "profileImg");
        studentCard.appendChild(profileImg);
  }

  
  
  
  
  

