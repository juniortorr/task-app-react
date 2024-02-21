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
import { appLoader } from './loaders/app-loader';
import './index.css';
import { formAction } from './components/New-Project.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} loader={appLoader}></Route>
      <Route path="/new-project" element={<NewProject />} action={formAction}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
