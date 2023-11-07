var params = new URLSearchParams(window.location.search);
var name1 = params.get('name');
var nameDisplay = document.getElementById('nameDisplay');
nameDisplay.textContent = 'Hello, ' + name1 + '!';
const checkboxes = document.querySelectorAll('.video-container input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        showProgress();
        
    });
});
function showProgress() {
    let completedVideos = 0;
    const totalVideos = 4; 

    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completedVideos++;
        }
    });

   
    const totalProgress = (completedVideos / totalVideos) * 100;

    
    const progressIndicator = document.getElementById("progress-indicator");
    progressIndicator.style.width = totalProgress + "%";
    progressIndicator.innerHTML = totalProgress + "% Complete";
}



