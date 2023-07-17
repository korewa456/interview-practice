import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import "./App.css";
import MultiSelect from "./components/MultiSelect";
import IPLookUp from "./components/IPLookUp";
import Pokemon from "./components/Pokemon";
import JobSearch from "./components/JobSearch";
import Cat from "./components/Cat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="multi-select" element={<MultiSelect />} />
          <Route path="IPLookUp" element={<IPLookUp />} />
          <Route path="Pokemon" element={<Pokemon />} />
          <Route path="JobSearch" element={<JobSearch />} />
          <Route path="cat" element={<Cat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
