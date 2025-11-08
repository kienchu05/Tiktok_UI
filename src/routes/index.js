import {HeaderOnly} from '../Layout';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

//khong can dang nhap cung xem duoc
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

//dang nhap moi xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
