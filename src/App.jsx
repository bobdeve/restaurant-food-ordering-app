import { Cart } from "./components/Cart";
import { CheckOut } from "./components/CheckOut";
import { Header } from "./components/Header";
import { CartContextProvider } from "./storage/CartContext";
import { UserProgressContextProvider } from "./storage/UserProgressContext";
import store from "./store";
import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store={store}>

    <UserProgressContextProvider>

    <CartContextProvider>
      <Header/>
      <Cart/>
      <CheckOut/>
    </CartContextProvider>
    </UserProgressContextProvider>
    </Provider>
  );
}

export default App;
