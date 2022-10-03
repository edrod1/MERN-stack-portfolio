import { createTheme, colors } from '@mui/material';

//css in js MUST be in camelCASE!
const theme = createTheme({
    palette: {
        primary: {
            main: "#11999E",
            main2: "#30E3CA",
            light: "#E4F9F5",
            light2: "#CDF0EA"
        },
        secondary: {
            main: "#40514E",
            two: "#40514E"
        },
        third: {
            main: colors.green[600],
        }

    },
    typography: {
        fontFamily: [
            'Chilanka',
            'cursive',
        ].join(","),
    },
});


export default theme;
