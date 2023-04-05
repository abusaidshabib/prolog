import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/routes/routes';
import ApiContext from './Context/ApiContext/ApiContext';

function App() {
  return (
    <div className="App">
      <ApiContext>
        <RouterProvider router={router}></RouterProvider>
      </ApiContext>
    </div>
  );
}

export default App;
