import React, {Suspense, lazy} from "react";
import "./App.css";
import Context from "./Global/Context";
const Navbar = lazy(() => import('./components/Navbar'));
const Model = lazy(() => import('./components/Model'));
const Stories = lazy(() => import('./components/Stories'));
const Create = lazy(() => import('./components/Create'));
const Posts = lazy(() => import('./components/Posts'));
const Sidebar = lazy(() => import('./components/Sidebar'));

function App() {
  return (
    <Suspense fallback="loading..." >    
    <Context>
      <Navbar />
      <div className="container">
        <Stories />
        <Create />
        <Posts />
        <Sidebar />
      </div>
      <Model />
    </Context>
    </Suspense>

  );
}

export default App;