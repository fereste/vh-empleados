import { Container, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';
import { OrderList } from './OrderList';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const theme = createTheme();

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Paper elevation={0}>
                    <Container maxWidth="sm" sx={{ margin: '100px auto 50px' }}>
                        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
                            Cafetería UNLaM
                        </Typography>
                        <OrderList />
                    </Container>
                </Paper>
            </ThemeProvider>
        </>
    )
}

export default App
