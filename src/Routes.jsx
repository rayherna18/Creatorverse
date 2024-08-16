import React from 'react'
import { useRoutes } from 'react-router-dom'

import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import NotFound from './pages/NotFound'

const Routes = () => {

    const routes = [
    { path: '/', element: <ShowCreators /> },
    { path: '/addCreator', element: <AddCreator /> },
    { path: '/editCreator/:id', element: <EditCreator /> },
    { path: '/viewCreator/:id', element: <ViewCreator /> },
    { path: '*', element: <NotFound /> }
    ];

    return useRoutes(routes);
};

export default Routes