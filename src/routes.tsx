import { RootLayout } from './app/root';
import { HomePage } from './app/routes/home/route';
import { SettingsPage } from './app/routes/settings/route';
import { RoutePath } from './config/RoutePath';
import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePath.Home,
        element: <HomePage />,
      },
      {
        path: RoutePath.Settings,
        element: <SettingsPage />,
      },
    ],
  },
];
