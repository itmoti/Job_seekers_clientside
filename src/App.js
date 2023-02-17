import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Router from './Routes/PublicRouter';

function App() {
  return (
    <div className="max-w-[1440px] px-3 mx-auto">
   <RouterProvider router={Router}>
   
      </RouterProvider>
    
    </div>
  );
}

export default App;
