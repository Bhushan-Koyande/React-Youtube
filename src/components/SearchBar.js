import React, { Component } from 'react';
import { Paper,TextField,FormControl } from '@material-ui/core';

class SearchBar extends Component {
    constructor(){
        super();
        this.state={
            searchTerm:''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            searchTerm:e.target.value
        })
    }
    handleSubmit=(e)=>{
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        e.preventDefault();
    }
    render() {
        return (
            <Paper elevation="6" style={{ padding:'25px',width:"100%" }}>
                <FormControl>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth variant="outlined" style={{ width:"100%" }} label="Search..." onChange={this.handleChange}/>
                    </form>
                </FormControl>
            </Paper>
        );
    }
}

export default SearchBar;