import Home from './views/admin/Home';
import Categories from './views/admin/categories/List';
export const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/categories',
        component: Categories,
    }

];