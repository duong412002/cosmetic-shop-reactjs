import {SidebarOnly} from '~/Layouts';

import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import Contact from '~/pages/Contact';
import ShopDetails from '~/pages/ShopDetails';
import Checkout from '~/pages/Checkout';
import ShoppingCart from '~/pages/ShoppingCart';
import Blog from '~/pages/Blog';
import BlogDetails from '~/pages/BlogDetails';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop/:pageShop', component: Shop, layout: SidebarOnly},
    { path: '/contact', component: Contact },
    { path: '/shopDetails', component: ShopDetails },
    { path: '/checkout', component: Checkout },
    { path: '/shoppingCart', component: ShoppingCart },
    { path: '/blog', component: Blog },
    { path: '/blogDetails', component: BlogDetails },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
