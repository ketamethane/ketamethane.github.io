function switchLevel(levelName, element) {
    const videoPlayer = document.getElementById('audio-gameplay-video');
    
    // 1. Assign the correct source file using a clean switch case
    switch (levelName) {
        case 'menu':
            videoPlayer.src = 'assets/menu.mp4';
            break;
        case 'shelf':
            videoPlayer.src = 'assets/shelf.mp4';
            break;
        case 'cupboard':
            videoPlayer.src = 'assets/cupboard.mp4';
            break;
        case 'level3':
            videoPlayer.src = 'assets/level3-gameplay.mp4';
            break;
        default:
            videoPlayer.src = 'assets/menu-demo.mp4';
    }
    
    // 2. Refresh and reload the player to load the new video stream
    videoPlayer.load();

    // 3. UI Treatment: Swap active button highlights
    const buttons = document.querySelectorAll('.audio-tab');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}