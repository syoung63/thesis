
// Get the current URL path
let path = window.location.pathname;

// Display the highlight over which page the user is on in the nav bar
let selected = document.getElementById("highlight");

if (path == "/index.html") {
    if(selected){
        selected.style.display = "block";
    }
}


// State 
let classroomName = '';
let classTitleInput = document.getElementById('classTitleInput');
let classTitle = document.getElementById('classTitle');
let introContainer = document.getElementById('intro');
let classHome = document.getElementById('classroomHome');
let addClassBtn = document.querySelector('#js-add-class');

if (addClassBtn) {
    addClassBtn.addEventListener('click', function(){
      
        classroomName = classTitleInput.value;
        console.log(classroomName);

        introContainer.style.display = 'none';
        classHome.style.display = 'flex';

        classTitle.textContent = classroomName; 

        $('#addClassModal').modal('hide')
    })
}