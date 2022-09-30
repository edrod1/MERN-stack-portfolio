import { createTheme, colors } from '@mui/material';

//css in js MUST be in camelCASE!
const theme = createTheme({
    palette: {
        primary: {
            main: "#1791e8",
            main2: "#30E3CA",
            light: "#E4F9F5"
        },
        secondary: {
            main: "#FFEEAF",
            two: colors.purple[200]
        },
        third: {
            main: colors.green[600],
        }

    },
});


export default theme;
