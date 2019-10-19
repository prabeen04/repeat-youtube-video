(function() {
  alert("initialized");
  let videoPlayer = document.getElementsByTagName("video")[0];
  debugger;
  if (!videoPlayer) return;
  if (videoPlayer) {
    alert(JSON.stringify(videoPlayer));
  }
  videoPlayer.onpause(e){
    alert("video paused");
    playVideo(videoPlayer);
  });
})();

function playVideo(instance) {
  if (!instance) return;
  instance.play();
}
