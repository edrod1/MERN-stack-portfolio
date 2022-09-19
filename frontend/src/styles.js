import { createTheme, colors } from '@mui/material';

//css in js MUST be in camelCASE!
const theme = createTheme({
    palette: {
        primary: {
            main: "#1791e8",
            main2: colors.blue[200],
            light: colors.blue[50]
        },
        secondary: {
            main: colors.purple[500],
            two: colors.purple[200]
        },
        third: {
            main: colors.green[600],
        }

    },
});


export default theme;
