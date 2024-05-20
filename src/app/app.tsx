import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './services/router';
import theme from './services/theme';

function App() {
    return (
        <MantineProvider theme={theme}>
            <RouterProvider router={router} />
        </MantineProvider>
    );
}

export default App;
