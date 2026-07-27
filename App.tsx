import Navigator from "@/src/navigation";
import initializeStore from "@/src/store";
import { Provider } from "react-redux";

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
