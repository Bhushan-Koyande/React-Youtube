import React from 'react';
import { Paper,Typography,CircularProgress } from '@material-ui/core';

const VideoDetail = ({ video }) => {
    if(!video){
        return(
            <div>
                <CircularProgress style={{ width:"50%" }}/>
            </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${ video.id.videoId }`;
    return (
        <React.Fragment>
            <Paper elevation={ 6 } style={{ height:"80%",padding:"5px" }}>
                <Paper elevation={ 6 } style={{ padding:"15px",height:"80%",width:"95%" }}>
                    <iframe frameborder="0" height="100%" width="100%" title="Video Player" src={ videoSrc }/>
                </Paper>
                <Typography variant="h4" color="primary">{ video.snippet.title } - { video.snippet.channelTitle }</Typography>
                <Typography variant="subtitle1" color="secondary">{ video.snippet.channelTitle }</Typography>
                <Typography variant="subtitle2">{ video.snippet.description }</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;