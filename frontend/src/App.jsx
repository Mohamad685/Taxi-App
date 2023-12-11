import NavBar from './Components/NavBar/NavBar';
import "./Components/styles/base.css";
import "./Components/styles/index.css";


const App = () => {
  return (
    <div className="App flex column">
      <BrowserRouter>
        <NavBar />
        {/* <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myProducts" element={<MyProducts />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
