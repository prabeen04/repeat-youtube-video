(function() {
  function playVideo(instance) {
    if (!instance) return;
    instance.play();
  }

  // startBtn.onclick = () => {
  //   startBtn.innerText = "Stop";
  // };
  let videoPlayer = document.getElementsByTagName("video")[0];
  if (!videoPlayer) return;
  debugger;
  if (videoPlayer.onended) {
    alert("ended");
  }
  if (videoPlayer.readyState === 0) {
    alert("stopped");
  }
  videoPlayer.onpause = () => {
    playVideo(videoPlayer);
  };
})();
