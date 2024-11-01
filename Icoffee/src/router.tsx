import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Entrega } from "./pages/Entrega";

export function Router() {
  return (
    <Routes>
      <Route  path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/entrega" element={<Entrega />} />
      </Route>
    </Routes>
  );
}