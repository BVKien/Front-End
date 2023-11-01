// layouts
import { HeaderOnly } from '~/components/Layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// publicRoutes
// phục vụ cho những Router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// privateRoutes
// bắt buộc phải đăng nhập ms xem đc, nếu ko thì lái sang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
