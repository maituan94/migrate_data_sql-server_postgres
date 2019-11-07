import React from "react";
import { Router, Route } from "react-router-dom";
import { Layout } from 'antd'
import Siderbar from '../containers/layout/Sidebar'
import Header from '../containers/layout/Header'
// import Footer from '../containers/layout/Footer'

import RawMaterial from '../containers/RawMaterial'

const createBrowserHistory = require('history').createBrowserHistory
const history = createBrowserHistory()

history.listen((location, action) => { })

// const PUBLIC_URL = process.env.PUBLIC_URL;

const routes = [
    {
        path: "/",
        component: RawMaterial
    }
]

const RouteConfig = () => (
    <div>
        <Router history={history}>
            <Layout style={{ minHeight: "100vh" }}>
                <Siderbar />
                <Layout className="right-side" >
                    <Header />
                    {routes.map((route, i) =>
                        <RouteWithSubRoutes key={i} {...route} />
                    )}
                    {/* <Footer /> */}
                </Layout>
            </Layout>
        </Router>
    </div>
)

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <div className="content">
                    <route.component {...props} routes={route.routes} />
                </div>
            )}
        />
    )
};

export default RouteConfig;