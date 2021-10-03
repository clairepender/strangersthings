
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Login } from './components';






const App = () => {

return (
<BrowserRouter>
    <div id="container">

        <div id="navbar">
             <Link to="/login"> Login </Link>
             <Link to="/register"> Register </Link>
        </div>

        <div id="routepaths">
            <Route path="/login" render={(routeProps) => <Login {...routeProps} />}/>
               
            <Route path="/register" render={(routeProps) => <Login {...routeProps} />} />
                
        </div>

    </div>
</BrowserRouter>
)
    // useState pairs here//
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// const App = () => {
//     const [posts, setPosts] = useState([]);
//     console.log('posts: ', posts);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts');
//             const data = await response.json();
//             setPosts(data.data.posts);
//             console.log('data: ', data.data.posts);
//         }
//         fetchPosts();
//     }, [])

//     return <>
//     <div>
//         Hello World
//     </div>

//     {
//         posts.map((post, idx) => <div key={idx}>
//             <h3>{post.title}</h3>
//             <p>Description: {post.description}</p>
//             <li>Price: {post.price}</li>
//             <li>Seller: {post.author.username}</li>
//         </div>)
//     }
//     </>
// }







