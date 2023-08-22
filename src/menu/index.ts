import { IMenus } from '../types/menu.types'

import {
  ShoppingOutlined,
  BarChartOutlined,
  FolderOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  LockOutlined,
} from '@ant-design/icons'

export default <IMenus[]>[
  {
    title : 'Point Of Sales',
    name  : 'pos',
    url   : '/',
    icon  : ShoppingOutlined,
    access: ['super_admin', 'admin', 'customer'],
  },
  {
    title : 'Dashboard',
    name  : 'dashboard',
    url   : '/dashboard',
    icon  : BarChartOutlined,
    access: ['super_admin'],
  },
  {
    title : 'Orders',
    name  : 'orders',
    url   : '/orders',
    icon  : ShoppingCartOutlined,
    access: ['super_admin', 'admin'],
  },
  {
    title   : 'Menu Library',
    name    : 'library',
    url     : '/library',
    icon    : FolderOutlined,
    access  : ['super_admin', 'admin'],
    children: [
      {
        title : 'Category',
        name  : 'category',
        url   : '/library/category',
        icon  : '',
        access: ['super_admin', 'admin'],
      },
      {
        title : 'Product',
        name  : 'product',
        url   : '/library/product',
        icon  : '',
        access: ['super_admin', 'admin'],
      },
      {
        title : 'Stock Opname',
        name  : 'stockOpname',
        url   : '/library/stockOpname',
        icon  : '',
        access: ['super_admin', 'admin'],
      },
    ],
  },
  {
    title : 'Customers',
    name  : 'customers',
    url   : '/customers',
    icon  : TeamOutlined,
    access: ['super_admin'],
  },
  {
    title : 'User Role Management',
    name  : 'role',
    url   : '/admin/role',
    icon  : LockOutlined,
    access: ['super_admin'],
  },
]
