import Routing from './Routing';

function App() {
  window.onscroll = function () {

    // if (window.pageYOffset > 50) {
    //     document.querySelector(".header-nav").classList.add('fixed-header');
    //     document.querySelector("main").classList.add("pt-152")

    // }
    // else {
    //   document.querySelector(".header-nav").classList.remove('fixed-header');
    //   document.querySelector("main").classList.remove("pt-152");

    // }
  }
  return (
    <Routing />
  )
}

export default App;
