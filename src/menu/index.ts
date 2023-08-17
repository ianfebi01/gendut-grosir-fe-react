import { IMenus } from '../types/menu.types'

import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  FolderOutlined,
  TeamOutlined,
  LockOutlined
} from '@ant-design/icons'

import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Home";
import Category from "../pages/MenuLibrary/Category";
import Product from "../pages/MenuLibrary/Product";


export default <IMenus[]>[
  {
    title: 'Login',
    name: 'login',
    url: '/login',
    icon: ShoppingOutlined,
    component: Login,
    access: ['public'],
  },
  {
    title: 'Point Of Sales',
    name: 'pos',
    url: '/',
    icon: ShoppingOutlined,
    component: Home,
    access: ['super_admin', 'admin', 'customer'],
  },
  {
    title: 'Dashboard',
    name: 'dashboard',
    url: '/dashboard',
    icon: BarChartOutlined,
    component: Dashboard,
    access: ['super_admin'],
  },
  {
    title: 'Orders',
    name: 'orders',
    url: '/orders',
    icon: ShoppingCartOutlined,
    access: ['super_admin', 'admin'],
  },
  {
    title: 'Menu Library',
    name: 'library',
    url: '/library',
    icon: FolderOutlined,
    access: ['super_admin', 'admin'],
    children: [
      {
        title: 'Category',
        name: 'category',
        url: '/library/category',
        icon: '',
        component: Category,
        access: ['super_admin', 'admin'],
      },
      {
        title: 'Product',
        name: 'product',
        url: '/library/product',
        icon: '',
        component: Product,
        access: ['super_admin', 'admin'],
      },
      {
        title: 'Stock Opname',
        name: 'stockOpname',
        url: '/library/stockOpname',
        icon: '',
        access: ['super_admin', 'admin'],
      },
    ],
  },
  {
    title: 'Customers',
    name: 'customers',
    url: '/customers',
    icon: TeamOutlined,
    access: ['super_admin'],
  },
  {
    title: 'User Role Management',
    name: 'role',
    url: '/admin/role',
    icon: LockOutlined,
    access: ['super_admin'],
  },
]
