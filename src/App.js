import "./App.css";
import { Search } from "./Components/Search";
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContext";
function App() {
  return (
    <BrowserRouter>
      <TodoContextProvider>
        <Search />
      </TodoContextProvider>
    </BrowserRouter>
  );
}

export default App;
