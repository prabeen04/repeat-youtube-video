(function() {
  function playVideo(instance) {
    if (!instance) return;
    instance.play();
  }
  let videoPlayer = document.getElementsByTagName("video")[0];
  if (!videoPlayer) return;

  videoPlayer.onpause = () => {
    if (videoPlayer.ended) {
      playVideo(videoPlayer);
    }
  };
})();
