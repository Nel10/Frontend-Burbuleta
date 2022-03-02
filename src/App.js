import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} >
          <Route path=":idProdut" element={<ModalProdut />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sing_up" element={<SingUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
