(function() {
  function playVideo(instance) {
    if (!instance) return;
    instance.play();
  }
  console.log("initialized");
  let startBtn = document.getElementById("startBtn");
  console.log(startBtn);
  let videoPlayer = document.getElementsByTagName("video")[0];
  if (!videoPlayer) return;

  videoPlayer.onpause = () => {
    if (videoPlayer.ended) {
      playVideo(videoPlayer);
    }
  };
})();
