import { Cart } from "./components/Cart";
import { CheckOut } from "./components/CheckOut";
import { Header } from "./components/Header";
import { CartContextProvider } from "./storage/CartContext";
import { UserProgressContextProvider } from "./storage/UserProgressContext";



function App() {


  return (
   

    <UserProgressContextProvider>

    <CartContextProvider>
      <Header/>
      <Cart/>
      <CheckOut/>
    </CartContextProvider>
    </UserProgressContextProvider>
  
  );
}

export default App;
