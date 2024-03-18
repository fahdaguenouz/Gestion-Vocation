// App.jsx

import React from 'react';
import './App.css';
import DynamicRouter from './Router/index.jsx'; // Ensure the path is correct
import { AuthProvider } from './context/AuthProvider.jsx';

function App() {
  return (
    <AuthProvider>
      <DynamicRouter />
    </AuthProvider>
  );
}

export default App;
