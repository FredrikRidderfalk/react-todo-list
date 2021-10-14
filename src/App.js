import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

// function-based component

// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// class-based component

class App extends React.Component {
  // a method (a function inside an object) can be placed here, before the render function, and then be called on using this.myMethodHere(). But perhaps .this is only needed when dealing with props?
  // myMethodHere() {
  //   console.log("hello habibi");
  // }

  // then there's this thing called constructor method. Props is immutable, meaning it's a way to pass information between components, but with props the information can't be changed by the receiving component. That's when we use State. State needs the constructor method. State only works with class-based components. Constructor is a specific method built into JavaScript, that initializes parts of this class that it's in. We also need super(). What super() does is it goes to the parent class (also called super class), and brings information from it so that our component can use those goodies.

  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }

  render() {
    // the method would then be called here, inside the render function, before the return function.
    // const style = this.myMethodHere();
    return (
      <div>
        <Header />
        <h1>Is state important to know? {this.state.answer}</h1>
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
