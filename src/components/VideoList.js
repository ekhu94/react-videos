import React from 'react';

const VideoList = props => {
    return (
        <div>
            Videos: {props.videos.length}
        </div>
    );
}

export default VideoList;