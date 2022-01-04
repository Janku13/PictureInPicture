const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");
const container = document.querySelector(".button-container");

//Select media

async function selectMediaStream() {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("MY BAD", error);
  }
}
button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();
