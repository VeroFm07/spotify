import { lazy, LazyExoticComponent } from 'react'

type JSXCoponent = () => JSX.Element;

interface Roter {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXCoponent> | JSXCoponent
}

const LazyLogin = lazy(() => import('../pages/public/Login/Login'));
const LazyHome = lazy(() => import('../pages/private/Home/Home'));
const LazyFavorites = lazy(() => import('../pages/private/Favorites/Favorites'));

export const routesPublic: Roter[] = [
    {
        path: '',
        to: '/',
        Component: LazyLogin
    },
    {
        path: 'login',
        to: '/login',
        Component: LazyLogin
    }
];


export const routesPrivate: Roter[] = [
    {
        path: '',
        to: '/',
        Component: LazyHome
    },
    {
        path: 'home',
        to: '/home',
        Component: LazyHome
    },
    {
        path: 'favorites',
        to: '/favorites',
        Component: LazyFavorites
    }
];