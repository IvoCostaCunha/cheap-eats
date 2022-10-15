import React from 'react';
import ReactPlayer from 'react-player'
import "./video.css"

const Video = () => {


    const externalSource = "https://www.youtube.com/watch?v=wzDftMoUvWw"

    const internalSource = "../../assets/crypto.mp4"



    return (
        <div>

            <ReactPlayer
                url={externalSource}
                controls
                playin
                width="100%"
                height="100%"
                className="player-video"

            />

        </div>
    );
};

export default Video;