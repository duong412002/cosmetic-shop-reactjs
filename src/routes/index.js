import {SidebarOnly} from '~/Layouts';

import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop, layout: SidebarOnly},
    { path: '/Contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
