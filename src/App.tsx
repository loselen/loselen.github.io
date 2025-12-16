import type { JSX } from "react";
import { Hero } from "./components/hero";
import { Route, Routes } from "react-router-dom";
import { ProjectList } from "./components/project-list";

const App = (): JSX.Element => {
  return (
    <div className="bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects/" element={<ProjectList />} />
      </Routes>
    </div>
  );
};

export default App;
