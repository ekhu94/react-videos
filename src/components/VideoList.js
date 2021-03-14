import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map(vid => {
        return <VideoItem key={vid.id.videoId} video={vid} />
    });
    return (
        <div className="ui relaxed divided list">
            { renderedList }
        </div>
    );
}

export default VideoList;