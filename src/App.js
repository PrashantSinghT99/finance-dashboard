import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import Error from "./Components/Fallback/Error";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RevenueCost from "./Components/RevenueCost/RevenueCost";
import Content from "./Components/Content/Content";
import store from "./Utils/store";
import SpendingAnalytics from "./Components/SpendingAnalytics/SpendingAnalytics";
import Billings from "./Components/Billings/Billings";
import TopAssets from "./Components/TopAssets/TopAssets";
function App() {
  const AppLayout = () => (
    <>
      <Sidebar />
      <MainContent />
    </>
  );
  // <Content/>
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/Revenue Cost",
          element: <RevenueCost />,
          errorElement: <Error />,
        },
        {
          path: "/",
          element: <Content />,
          errorElement: <Error />,
        },
        {
          path: "/Spending Analytics",
          element: <SpendingAnalytics />,
          errorElement: <Error />,
        },
        {
          path: "/Billings",
          element: <Billings />,
          errorElement: <Error />,
        },
        {
          path: "/Top Assets",
          element: <TopAssets/>,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  
  return (
    <div className="app">
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Error />} />
      </Provider>
    </div>
  );
}

export default App;
