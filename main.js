

    
const audios = document.getElementsByTagName("audio");
    
    for (let i = 0; i < audios.length; i++) {
      audios[i].addEventListener("play", function() {
        stopOtherAudios(audios[i]);
      });
    }
    
    function stopOtherAudios(currentAudio) {
      for (let i = 0; i < audios.length; i++) {
        if (audios[i] !== currentAudio) {
          audios[i].pause();
          audios[i].currentTime = 0;
        }
      }
    } 
    
const videos = document.getElementsByTagName("video");
    
    for (let i = 0; i < videos.length; i++) {
      videos[i].addEventListener("play", function() {
        stopOtherVideos(videos[i]);
      });
    }
    
    function stopOtherVideos(currentVideo) {
      for (let i = 0; i < videos.length; i++) {
        if (videos[i] !== currentVideo) {
          videos[i].pause();
          videos[i].currentTime = 0;
        }
      }
    } 