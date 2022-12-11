import type { MenuProps } from 'antd';
import { Role } from 'api';
import {
  TeamOutlined,
  EditOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Routes } from 'router';
import { NavigateFunction } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

export const MenuItems = (
  currentRole: Role | undefined,
  navigate: NavigateFunction
) => {
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    roles?: Role[],
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    if (roles?.length) {
      if (!roles.includes(currentRole as Role)) return null;
    }

    return {
      key,
      icon,
      children,
      label,
      onClick: children ? undefined : () => navigate(key as string),
    } as MenuItem;
  };

  return [
    getItem('Kokpit', Routes.dashboard, [], <HomeOutlined />),
    getItem(
      'Kontent',
      Routes.content,
      [Role.SuperAdmin, Role.Admin],
      <EditOutlined />,
      [
        getItem('Strona główna', Routes.homePageContent),
        getItem('O nas', Routes.aboutUs),
        getItem('Usługi', Routes.services),
        getItem('Certyfikaty', Routes.certificates),
        getItem('Kontakt', Routes.contact),
        getItem('Stopka', Routes.contact),
        getItem('Kategorie produktów', Routes.contact),
        getItem('Produkty', Routes.contact),
      ]
    ),
    getItem(
      'Ustawienia',
      Routes.settings,
      [Role.SuperAdmin, Role.Admin],
      <SettingOutlined />,
      [
        getItem('Edytuj moje dane', Routes.editMyData),
        getItem('Zmiana hasła', Routes.editMyPass),
      ]
    ),
    getItem('Użytkownicy', Routes.users, [Role.SuperAdmin], <TeamOutlined />),
  ];
};
