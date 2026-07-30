import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

import Navigator from "@/src/navigation";
import initializeStore from "@/src/store";

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
      <Toast />
    </Provider>
  );
};

export default App;
