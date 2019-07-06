import Home from './components/Home'
import Detail from './components/Detail'

export const routes = [
    {path:'/', component: Home},
    {path:'/detail/:id', component: Detail}
] 