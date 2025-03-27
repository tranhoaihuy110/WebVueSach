import { createWebHistory,createRouter } from "vue-router";
import Home from '@/components/ComHome.vue'
import ThucDon from '@/components/ComThucDon.vue'
import GioiThieu from '@/components/ComGioiThieu.vue'
import LienHe from '@/components/ComLienHe.vue'
import TinTuc from '@/components/ComTinTuc.vue'
import ProductDetail from '@/components/ComProductDetail.vue'
import Cart from '@/components/ComCart.vue'
import Login from '@/components/ComLogin.vue'
import Regis from '@/components/ComRegister.vue'
const routes =[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/thucdon",
        name:"ThucDon",
        component:ThucDon
    },
    {
        path:"/gioithieu",
        name:"GioiThieu",
        component:GioiThieu
    },
    {
        path:"/lienhe",
        name:"LienHe",
        component:LienHe
    },
    {
        path:"/tintuc",
        name:"TinTuc",
        component:TinTuc
    },
    {
        path:"/product/:id",
        name:"ProductDetail",
        component:ProductDetail
    },
    {
        path:"/cart",
        name:"Cart",
        component:Cart
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path:"/dangky",
        name:"Register",
        component:Regis
    },

]
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router