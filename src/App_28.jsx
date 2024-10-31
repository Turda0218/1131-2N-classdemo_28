import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogStaticPage_28 from "./pages/BlogStaticPage_28.jsx";
import BlogNodePage_28 from "./pages/BlogNodePage_28.jsx";
import BlogSupaPage_28 from './pages/BlogSupaPage_28.jsx';

const App_28 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/static_28" element={<BlogStaticPage_28 />} />
        <Route path="/node_28" element={<BlogNodePage_28 />} />
        <Route path="/supa_28" element={<BlogSupaPage_28 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_28;
