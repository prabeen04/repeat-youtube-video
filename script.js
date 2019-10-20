(function() {
  let videoPlayer = document.getElementsByTagName("video")[0];
  if (!videoPlayer) return;
  
  videoPlayer.onpause(e){
    alert("video paused");
    playVideo(videoPlayer);
  });
})();

function playVideo(instance) {
  if (!instance) return;
  instance.play();
}
