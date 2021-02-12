import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos  }) => {
  const renderVideoItems = videos.map(video => {
    return (
      <VideoItem video={video} />
    );
  });
  return (
    <div>{renderVideoItems}</div>
  )
};

export default VideoList;
