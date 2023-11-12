import Header from "./views/header";
import Wrapper from "./views/wrapper";
import "./App.css";

function App() {
  return <Wrapper children={<Header />} />;
}

export default App;
