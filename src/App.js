import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:postId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
