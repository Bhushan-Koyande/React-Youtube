import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
    const list = videos.map((video, id) => <VideoItem onVideoSelect={ onSelectVideo } key={ id } video={ video }/> );
    return (
        <Grid container spacin={10}>
            { list }
        </Grid>
    )
}

export default VideoList;