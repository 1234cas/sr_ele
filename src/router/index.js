import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Product from '../views/Products/Product.vue'
import All from '../views/Products/All.vue'
import About from '../views/About/About.vue'
import Matsutake from '../views/Products/Matsutake.vue'
import Redrice from '../views/Products/Redrice.vue'
import Facemask from '../views/Products/Facemask.vue'
import Redricewine from '../views/Products/Other/Redricewine.vue'
import Snacks from '../views/Products/Other/Snacks.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', name: 'Home', component: Home},
  {
    path: '/products',
    component: All ,
    children: [
      // { path: '', redirect: {name: 'product'}  },
      { path: '', redirect: 'product' },
      { path: 'product', name:'Product', component: Product },
      { path: 'matsutake', name:'Matsutake', component: Matsutake },
      { path: 'redrice', name:'Redrice', component: Redrice },
      { path: 'facemask', name:'Facemask', component: Facemask },
      {
        path: 'other',
        redirect: 'other/redricewine',
        children: [
          { path: 'redricewine', name:'Redricewine', component: Redricewine },
          { path: 'snacks', name:'Snacks', component: Snacks }
        ]
      }
    ]
  },
  {
    path: '/about',
    name:'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{

//   next()
//    ScrollTrigger.refresh();
// })

export default router
