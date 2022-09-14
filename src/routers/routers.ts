import { lazy, LazyExoticComponent } from 'react'

type JSXCoponent = () => JSX.Element;

interface Roter {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXCoponent> | JSXCoponent
}

const LazyLogin = lazy(() => import('../components/pages/public/Login/LoginPages'));

const LazyHome = lazy(() => import('../components/pages/private/Home/Home.component'));
const LazyFavorites = lazy(() => import('../components/pages/private/Favorites/Favorites.component'));

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