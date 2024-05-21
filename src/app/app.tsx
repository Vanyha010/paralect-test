import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './services/router';
import theme from './services/theme';
import { store } from './services/store/store';

function App() {
    return (
        <Provider store={store()}>
            <MantineProvider theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </Provider>
    );
}

export default App;
