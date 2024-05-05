import { Provider } from "react-redux";
import "./App.css";
import JobsPage from "./Componants/JobsPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobsPage />
      </div>
    </Provider>
  );
}

export default App;
