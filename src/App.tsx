import { Link, Route, Routes } from "react-router-dom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <h1>Vite + React+ Typescript+ TailwindCSS</h1>
          <div className="my-10 flex gap-3">
            <Link
              to={"/form1"}
              className="text-rose-500 px-2 py-1 hover:underline"
            >
              Form1
            </Link>
            <Link
              to={"/form2"}
              className="text-rose-500 px-2 py-1 hover:underline"
            >
              Form22
            </Link>
          </div>
          <Routes>
            <Route path="/form1" element={<Form1 />} />
            <Route path="/form2" element={<Form2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
