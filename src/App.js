import { Routes, Route, Link } from "react-router-dom";
import "./app.scss";
import Bloggers from "./component/bloggers/Bloggers";
import Blog from "./component/blogs/Blog";
import Comment from "./component/commets/Comment";


function App() {

  return (

    <div className="App">
      <div className="App-list">
        <Link to="/posts">Bloggers</Link><br/>
      </div>
      <Routes>
        <Route path="/posts" element={<Bloggers />} ></Route>
        <Route path="/posts/:id" element={<Blog />} ></Route>
        <Route path="/comments/:id" element={<Comment />}></Route>
          
        
      </Routes>


    </div>
  );  
}

export default App;
