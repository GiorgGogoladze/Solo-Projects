document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const videoFile = document.getElementById('videoFile').files[0];
    const videoTitle = document.getElementById('videoTitle').value;
    const videoDescription = document.getElementById('videoDescription').value;

    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);
        displayVideo(videoTitle, videoDescription, videoURL);
        clearForm();
    }
});

function displayVideo(title, description, url) {
    const videoList = document.getElementById('videoList');

    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const videoElement = document.createElement('video');
    videoElement.src = url;
    videoElement.controls = true;

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = title;

    const videoDescription = document.createElement('p');
    videoDescription.textContent = description;

    videoItem.appendChild(videoTitle);
    videoItem.appendChild(videoElement);
    videoItem.appendChild(videoDescription);

    videoList.appendChild(videoItem);
}

function clearForm() {
    document.getElementById('videoFile').value = '';
    document.getElementById('videoTitle').value = '';
    document.getElementById('videoDescription').value = '';
}
