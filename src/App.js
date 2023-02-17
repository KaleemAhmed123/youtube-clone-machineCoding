import { Provider } from "react-redux";
import store from "./utils/store";
import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

// nav and sidebar is same just MainConatiner changes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

// Nav
// Body
//   Sidebar
//     menuItem
//   MainContainer
//     ButtonList
//     VideoContainer
//       videoCard
