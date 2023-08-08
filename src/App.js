import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
         {/* Render Meals here. */}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

