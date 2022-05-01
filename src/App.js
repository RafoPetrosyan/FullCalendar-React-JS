import React, { useEffect } from 'react';
import RouterView from './routes/routes';
import './App.css';



function App() {

  useEffect(() =>{
      localStorage.setItem('auth_key', '2YujYbhFZMfsIZNkNYubx-SLhQ9txCSu');
    
  }, []);

  return (
    <div className="app">
          <RouterView/>
    </div>
  );
}

export default App;
