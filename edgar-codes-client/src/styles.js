import { createTheme, colors } from '@mui/material';
const theme = createTheme({
    palette: {
        primary: {
            main: "#1791e8",
            main2: colors.blue[200],
            light: colors.blue[50]
        },
        secondary: {
            main: colors.purple[500],
            main2: colors.purple[200]
        },
        third: {
            main: "#91E817",
        }
    }
})

export default theme