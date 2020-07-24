import React, { Component } from 'react';
import './App.css';
import Youtube from './api/Youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import { Grid,AppBar,Toolbar,IconButton,Typography,Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

 class App extends Component {
   constructor(){
     super();
     this.state={
       videos:[],
       selectedVideo:null
     }
   }
   componentDidMount(){
     this.submit('react js');
   }
   onVideoSelect=(video)=>{
    this.setState({
      selectedVideo:video
    })
   }
  submit=async(search)=>{
    const response = await Youtube.get('search',{params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyAhQepwrdkCWlLj7cvofPBeMEhMkHKZejg',
        q:search
      }
    });
    console.log(response.data);
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    });
  } 
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                ViewTube
              </Typography>
            <Button color="inherit" style={{ marginLeft:'1200px' }}>Watch</Button>
          </Toolbar>
        </AppBar>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.submit}/>
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={ this.state.selectedVideo }/>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={ this.state.videos } onSelectVideo={ this.onVideoSelect }/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;