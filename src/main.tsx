import { routes } from './routes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './styles/theme.css';
import './styles/reset.css';
import './styles/base.css';
import './styles/utilities.css';
import './styles/global.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
