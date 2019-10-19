(function() {
  let videoPlayer = document.getElementsByName("video")[0];
  videoPlayer.onpause(e => {
    alert("video paused");
    playVideo(videoPlayer);
  });
})();

function playVideo(instance) {
  if (!instance) return;
  instance.play();
}
