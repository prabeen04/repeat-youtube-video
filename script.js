(function() {
  let videoPlayer = document.getElementsByName("video")[0];
  videoPlayer.onpause(e => videoPlayer.play());
})();
