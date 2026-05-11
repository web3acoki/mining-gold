import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {bootstrapTokenFromQuery} from './utils/auth';

// 与 H5 主站共享登录态：?token=xxx → localStorage[`${VITE_APP_ENV}_TOKEN`]，并清地址栏
bootstrapTokenFromQuery();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
