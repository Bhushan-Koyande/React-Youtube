import { createMuiTheme } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        primary:red,
        secondary:grey,
    },
    status:{
        danger:'orange',
    },
});

export default theme;