import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoomPage from "./pages/RoomPage";
import ExperimentsPage from "./pages/ExperimentsPage";
import ExperimentDetails from "./pages/ExperimentDetails";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout/>,
    children: [
      {index: true, element: <HomePage/>},
      {element: <PrivateRoutes/>, children: [
        {path: 'room', element: <RoomPage/>},
        {path: 'experiments', children: [
          {index: true, element: <ExperimentsPage/>},
          {path: ':experimentId', element: <ExperimentDetails/>}
        ]}
      ]},
      {path: 'auth', element: <AuthPage/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
