import PointOfSales from "../layouts/PointOfSales";
import Default from "../layouts/Default";

// Pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import Category from "../pages/MenuLibrary/Category";
import Product from "../pages/MenuLibrary/Product";
import { renderRoutes } from "./generate-routes";

export const routes = [
{
    layout: PointOfSales,
    routes: [
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/login',
        isPublic: true,
      }
    ]
  },
{
    layout: Default,
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: Home,
        path: '/home'
      },
      {
        name: 'library',
        title: 'Menu Libary',
        hasSiderLink: true,
        routes: [
          {
            name: 'category',
            title: 'Menu Category',
            hasSiderLink: true,
            component: Category,
            path: '/library/category'
          },
          {
            name: 'product',
            title: 'Product',
            hasSiderLink: true,
            component: Product,
            path: '/users/product'
          }
        ]
      }
    ]
  }
];

export const Routes = renderRoutes(routes);