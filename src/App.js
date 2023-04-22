import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import { publicRoutes } from './routes';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((publicRoute, ind) => {
                    let Layout = DefaultLayout;
                    const App = publicRoute.component;
                    if (publicRoute.layout) {
                        Layout = publicRoute.layout;
                    } else if (publicRoute.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={ind}
                            path={publicRoute.path}
                            element={
                                <Layout>
                                    <App />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
