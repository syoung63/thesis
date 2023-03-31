
// Get the current URL path
let path = window.location.pathname;

// Check if the current URL path is the About page
if (path == "/index.html") {
    console.log("yes");
    let myElement = document.getElementById("highlight");
    if(myElement){
        myElement.style.display = "block";
    }
}


// State 
let classroomName = '';

let addClassBtn = document.querySelector('#js-add-class');

if (addClassBtn) {
    addClassBtn.addEventListener('click', function(){

        


        $('#addClassModal').modal('hide')
    })
}