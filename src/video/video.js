import React from "react";
import './video.css'

function Video() {
    
    let videoSrc = null

    const startCamera = async () => {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        // if (navigator.getUserMedia) {
        let stream = navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);

        videoSrc = stream
        console.log(videoSrc)
        // }
    }

    // const handleVid = (stream) => {
    //     this.setState({ videoSrc: window.URL.createObjectURL(stream) });
    // }

    // const clickButton = async () => {
    //     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    //     let image_data_url = canvas.toDataURL('image/jpeg');

    //     // data url of the image
    //     console.log(image_data_url);
    // }

    // camera_button.addEventListener('click', async function() {
    //     let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    //     video.srcObject = stream;
    // });

    // click_button.addEventListener('click', function() {
    //     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    //     let image_data_url = canvas.toDataURL('image/jpeg');

    //     // data url of the image
    //     console.log(image_data_url);
    // });

    
    return (
        
        <div className="Video-header">

            <button onClick={startCamera}>Start Stream</button>
            <video src={videoSrc} autoPlay={true} controls />

        </div>

    );
}

export default Video;