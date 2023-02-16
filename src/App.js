import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Body />
    </div>
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
