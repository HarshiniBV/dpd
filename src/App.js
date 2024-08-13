import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import RootLayout from './components/rootLayout/RootLayout'
//import RootLayout1 from './componentf/rootLayout1/RootLayout1'

import './App.css';
import FileUpload from './componentf/fileUpload/FileUpload'
import ProjectTitles from './componentf/projectTitles/ProjectTitles'
//import EditDeletePublish from './componentf/editDeletePublish/EditDeletePublish'
import AddMember from './componentf/addMember/AddMember'

import Home from './components/home/Home'
//import Home1 from './componentf/home1/Home1'
import Register from './components/register/Register'
import Login from './components/login/Login'
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
      },
      {
        path:'register',
        element:<Register />
      },
      {
        path:'login',
        element:<Login />
      },{
        path:'fileUpload',
        element:< FileUpload/>
      }
      ,{
        path:'projectTitles',
        element:<ProjectTitles/>
      }
      ,{
        path:'addMember',
        element:<AddMember/>
      }
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
