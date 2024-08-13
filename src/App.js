import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/rootLayout/RootLayout';
import './App.css';
import FileUpload from './componentf/fileUpload/FileUpload';
import ProjectTitles from './componentf/projectTitles/ProjectTitles';
import AddMember from './componentf/addMember/AddMember';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Projects from './components/projects/Projects';
import Duplicator from './components/duplicator/Duplicator';
import Filters from './components/filters/Filters';
import Catalog from './components/catalog/Catalog'; // Correct import

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'duplicator',
          element: <Duplicator />,
        },
        {
          path: 'filtered',
          element: <Filters />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'fileUpload',
          element: <FileUpload />,
        },
        {
          path: 'projectTitles',
          element: <ProjectTitles />,
        },
        {
          path: 'addMember',
          element: <AddMember />,
        },
        {
          path: 'catalog', // Ensure correct path
          element: <Catalog />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
