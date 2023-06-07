
import './App.css';
import Blog from './Component/Blog';
import Blog_details from './Component/Blog_details';
import {Routes, Route} from 'react-router-dom';


function App() {
return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Blog/>}></Route>
            <Route path='/readmore/:id' element={<Blog_details/>}></Route>
        </Routes>
    </div>
);
}

export default App;
