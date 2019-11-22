(function() {
  function playVideo(instance) {
    if (!instance) return;
    instance.play();
  }
  let videoPlayer = document.getElementsByTagName("video")[0];
  if (!videoPlayer) return;
  debugger;
  videoPlayer.onpause = () => {
    playVideo(videoPlayer);
  };
})();
