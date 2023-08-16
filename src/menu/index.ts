import { IMenus } from '../types/menu.types'

import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  FolderOutlined,
  TeamOutlined,
  LockOutlined
} from '@ant-design/icons'

export default <IMenus[]>[
  {
    name: 'Point Of Sales',
    url: '/',
    icon: ShoppingOutlined,
    access: ['super_admin', 'admin', 'customer'],
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: BarChartOutlined,
    access: ['super_admin'],
  },
  {
    name: 'Orders',
    url: '/orders',
    icon: ShoppingCartOutlined,
    access: ['super_admin', 'admin'],
  },
  {
    name: 'Menu Library',
    url: '/library',
    icon: FolderOutlined,
    access: ['super_admin', 'admin'],
    children: [
      {
        name: 'Category',
        url: '/library/category',
        icon: '',
        access: ['super_admin', 'admin'],
      },
      {
        name: 'Product',
        url: '/library/product',
        icon: '',
        access: ['super_admin', 'admin'],
      },
      {
        name: 'Stock Opname',
        url: '/library/stockOpname',
        icon: '',
        access: ['super_admin', 'admin'],
      },
    ],
  },
  {
    name: 'Customers',
    url: '/customers',
    icon: TeamOutlined,
    access: ['super_admin'],
  },
  {
    name: 'User Role Management',
    url: '/admin/role',
    icon: LockOutlined,
    access: ['super_admin'],
  },
]
