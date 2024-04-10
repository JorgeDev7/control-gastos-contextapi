import React from 'react';
import ReactDOM from 'react-dom/client';

import { BudgetProvider } from './context/BudgetContext.tsx';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>,
);
