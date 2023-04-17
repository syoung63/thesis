
// Get the current URL path
let path = window.location.pathname;

// Display the highlight over which page the user is on in the nav bar
let selected = document.getElementById("highlight");

// State 
let classroomName, savedClassroomName, classHeading;

//Creates an array for classroom names
let classroomNames = [];

let classTitleInput = document.getElementById('classTitleInput');
let introContainer = document.getElementById('intro');
let classHome = document.getElementById('classroomHome');
let cardsContainer = document.getElementById('cardsContainer');
let addClassBtn = document.querySelector('#js-add-class');

//save inputted class information and creates a card when button is clicked
if (addClassBtn) {
    addClassBtn.addEventListener('click', function(){
      
        classroomName = classTitleInput.value;
        sessionStorage.setItem("savedClassroomName", classroomName);

        introContainer.style.display = 'none';
        classHome.style.display = 'flex';

        classroomNames.push(classroomName);
        sessionStorage.setItem('classroomsList', JSON.stringify(classroomNames));

        createClassCard(classroomName);

        $('#addClassModal').modal('hide')
    })
}

//displays classes on home page or my classrooms page if the user has created them already
if(path == "/index.html" || path == "/myclassrooms.html"){
    classroomName = sessionStorage.getItem("savedClassroomName");
    classroomNames = JSON.parse(sessionStorage.getItem('classroomsList'));
    
    if(classroomName !== null){
        introContainer.style.display = 'none';
        classHome.style.display = 'flex';

        //runs create class card for each class that has been created
        classroomNames.forEach(createClassCard);

    }
}


let studentName = '';
let studentNameInput = document.getElementById('studentNameInput');
let addStudentBtn = document.querySelector('#js-add-student');
let classPage = document.getElementById('classroomPage');
let studentCardsContainer = document.getElementById('studentCardsContainer');
let studentGradeInput = document.getElementById('studentGradeInput');

//save inputted student information and creates a card when button is clicked
if (addStudentBtn) {
    addStudentBtn.addEventListener('click', function(){
      
        studentName = studentNameInput.value;
        sessionStorage.setItem("savedStudentName", studentName);

        studentGrade = studentGradeInput.value;
        sessionStorage.setItem("savedStudentGrade", studentGrade);

        introContainer.style.display = 'none';
        classroomPage.style.display = 'flex';

        createStudentCard(studentName, studentGrade);

        $('#addStudentModal').modal('hide')
    })
}

//displays students on classroom page if the user has created them already
//couldn't find a way to put them in array as well without getting an error
if(path == "/classroom.html"){
    studentName = sessionStorage.getItem("savedStudentName");
    studentGrade = sessionStorage.getItem("savedStudentGrade");
    
    if(studentName !== null){
        introContainer.style.display = 'none';
        classroomPage.style.display = 'flex';
        
        //creates a card with the student name and grade that has been saved
        createStudentCard(studentName, studentGrade);
    }
}

    //grabs classroom name and creates a card for it
    function createClassCard(classroomName) {
        // Create the link element and append it to the cardsContainer element
        let classLink = document.createElement("a");
        classLink.style.textDecoration = "none";
        classLink.href = "https://syoung63.github.io/thesis/myclassrooms.html";
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


  //creates a card for the student using the student's name
  function createStudentCard(studentName, studentGrade) {
        
    // Create the link element and append it to the cardsContainer element
        studentLink = document.createElement("a");
        studentLink.style.textDecoration = "none";
        studentLink.href="/studentProfile.html";
        studentLink.setAttribute("onclick", "return false;");
        studentCardsContainer.appendChild(studentLink);

        // Create the class card div element and append it to the link element
        studentCard = document.createElement("div");
        studentCard.setAttribute("class", "studentCard");
        studentLink.appendChild(studentCard);

        //create container for student info
        studentInfo = document.createElement("div");
        studentInfo.setAttribute("class", "studentInfo");
        studentCard.appendChild(studentInfo);

        //displays student name and appends it to the student info container
        studentTitle = document.createElement("div");
        studentTitle.setAttribute("class", "studentName");
        studentTitle.textContent = studentName; 
        studentInfo.appendChild(studentTitle);

        //displays the student grade if a grade was inputted
        if(studentGrade){
            studentGradeHeading = document.createElement("div");
            studentGradeHeading.setAttribute("class", "studentGrade");
            studentGradeHeading.textContent = "Grade " + studentGrade; 
            studentInfo.appendChild(studentGradeHeading);
        }

        // Create the profile image element for the card and append it to the studentCard element
        let profileImg = document.createElement("img");
        profileImg.src = "assets/default_profile.svg";
        profileImg.setAttribute("class", "profileImg");
        studentCard.appendChild(profileImg);
  }

  
  
  
  
  

