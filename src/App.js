import { Fragment,useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isShown,setIsShown] = useState(false);
  const displayCartHandler=()=>{
    setIsShown(true);
  }

  // For cart Close btn
  const closeCartHandler=()=>{
    setIsShown(false);
  }

  return (
    <Fragment>
      {isShown && <Cart  onclose={closeCartHandler} />}
      <Header onclk={displayCartHandler} />
      <main>
         {/* Render Meals here. */}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

