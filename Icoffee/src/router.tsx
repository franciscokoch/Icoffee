import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Entrega } from "./pages/Entrega/index";
import { DefaultLayout } from "./layout/DefaultLayout";

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