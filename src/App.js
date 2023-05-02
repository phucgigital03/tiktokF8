import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/layouts';
import { publicRoutes } from './routes';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, ind) => {
                        let Layout = DefaultLayout;
                        const Page = publicRoute.component;
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
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
