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

  render() {
    // the method would then be called here, inside the render function, before the return function.
    // const style = this.myMethodHere();
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
