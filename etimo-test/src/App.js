import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharactersList } from "./components/CharactersList";
import { DetailView } from "./components/DetailView";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/characters/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
