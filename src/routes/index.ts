import { renderRoutes } from './generate-routes'
import { IRoutes } from '../types/routes.types'

// Pages
import Login from '../pages/Login'
import Home from '../pages/Home'
import Dashboard from '../pages/Home'
import Category from '../pages/MenuLibrary/Category'
import Product from '../pages/MenuLibrary/Product'
import Default from '../layouts/Default'
import LoginLayout from '../layouts/Login'

// export const routes = [
// {
//     layout: PointOfSales,
//     routes: [
//       {
//         name: 'login',
//         title: 'Login page',
//         component: Login,
//         path: '/login',
//         isPublic: true,
//       }
//     ]
//   },
// {
//     layout: Default,
//     routes: [
//       {
//         name: 'home',
//         title: 'Home page',
//         component: Home,
//         path: '/home'
//       },
//       {
//         name: 'library',
//         title: 'Menu Libary',
//         hasSiderLink: true,
//         routes: [
//           {
//             name: 'category',
//             title: 'Menu Category',
//             hasSiderLink: true,
//             component: Category,
//             path: '/library/category'
//           },
//           {
//             name: 'product',
//             title: 'Product',
//             hasSiderLink: true,
//             component: Product,
//             path: '/users/product'
//           }
//         ]
//       }
//     ]
//   }
// ];

// const access = {
//   super_admin: [
//     'login',
//     'pos',
//     'dashboard',
//     'orders',
//     'library',
//     'category',
//     'product',
//     'stockOpname',
//     'customers',
//     'role',
//   ],
//   admin: [
//     'login',
//     'pos',
//     'orders',
//     'library',
//     'category',
//     'product',
//     'stockOpname',
//   ],
//   customer: ['login', 'pos'],
// }

export const routes: IRoutes[] = [
  {
    title: 'Login',
    name: 'login',
    url: '/login',
    component: Login,
    layout: LoginLayout,
    type: 'auth',
  },
  {
    title: 'Point Of Sales',
    name: 'pos',
    url: '/',
    layout: Default,
    component: Home,
  },
  {
    title: 'Dashboard',
    name: 'dashboard',
    url: '/dashboard',
    component: Dashboard,
    layout: Default,
  },
  // {
  //   title: 'Orders',
  //   name: 'orders',
  //   url: '/orders',
  //   icon: ShoppingCartOutlined,
  //   access: ['super_admin', 'admin'],
  // },
  {
    title: 'Menu Library',
    name: 'library',
    url: '/library',
    layout: Default,

    children: [
      {
        title: 'Category',
        name: 'category',
        url: '/library/category',
        component: Category,
        layout: Default,
      },
      {
        title: 'Product',
        name: 'product',
        url: '/library/product',
        component: Product,
        layout: Default,
      },
      // {
      //   title: 'Stock Opname',
      //   name: 'stockOpname',
      //   url: '/library/stockOpname',
      //   icon: '',
      //   access: ['super_admin', 'admin'],
      // },
    ],
  },
  // {
  //   title: 'Customers',
  //   name: 'customers',
  //   url: '/customers',
  //   icon: TeamOutlined,
  //   access: ['super_admin'],
  // },
  // {
  //   title: 'User Role Management',
  //   name: 'role',
  //   url: '/admin/role',
  //   icon: LockOutlined,
  //   access: ['super_admin'],
  // },
]

// export const Routes = renderRoutes(routes);
export const Routes = renderRoutes(routes)
