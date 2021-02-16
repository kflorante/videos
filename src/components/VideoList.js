import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos  }) => {
  const renderVideoItems = videos.map(video => {
    return (
      <VideoItem video={video} />
    );
  });
  return (
    <div className="ui relaxed divided list">{renderVideoItems}</div>
  )
};

export default VideoList;
