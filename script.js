(function() {
  let videoPlayer = document.getElementsByName("video")[0];
  videoPlayer.onpause(e => {
    alert(JSON.stringify(e));
  });
})();
