import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './components/rootLayout/RootLayout'
import './App.css';
import Home from './components/home/Home'
//import Register from './components/register/Register'
//import Login from './components/login/Login'
import Projects from './components/projects/Projects'
import Duplicator from './components/duplicator/Duplicator'
//import PercentageChart from './components/PercentageChart/PercentageChart';
import Filters from '../src/components/filters/Filters'
function App() {
 
  let browserRouter=createBrowserRouter([{
    path:'',
    element:<RootLayout />,
    children:[
      {
        path:'',
        element:<Home />,
      },
      {
        path:'projects',
        element:<Projects />
      },
      {
        path:'duplicator',
        element:<Duplicator />
      },
      {
        path:'filtered',
        element:<Filters/>
      }
      // {
      //   path:'register',
      //   element:<Register />
      // },
      // {
      //   path:'login',
      //   element:<Login />
      // }
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
