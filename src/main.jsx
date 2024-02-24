import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './components/App.jsx';
import NewProject from './components/New-Project.jsx';
import { appLoader, newTaskLoader, editTaskLoader, getTodaysTasks } from './loaders/app-loader';
import './index.css';
import NewTask from './components/New-Task.jsx';
import FilteredTasks from './components/Filtered-Tasks.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} loader={appLoader}>
        <Route path="projects/:projectId" element={<NewTask />} loader={newTaskLoader}></Route>
        <Route
          path="projects/:projectId/:taskId"
          element={<NewTask />}
          loader={editTaskLoader}
        ></Route>
      </Route>
      <Route path="/tasks/today" element={<FilteredTasks />} loader={getTodaysTasks}></Route>
      <Route path="new-project" element={<NewProject />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
