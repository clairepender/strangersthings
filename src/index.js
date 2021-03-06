
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Login, Profile, Posts, MakePost, SinglePost } from './components';
import { logout, isLoggedIn } from './api';



const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token')); //we need to put token state here because it will be used throughout the entire app//
    const [user, setUser] = useState("");
    const [posts, setPosts] = useState([]);
    const [onePost, setOnePost] = useState({});
    const [loggedIn, setLoggedIn] = useState(isLoggedIn(token));


    useEffect(() => {
        setLoggedIn(isLoggedIn(token));
    }, [token])
    
    
    

    //*** checks to see if there is token in local storage ***//
    useEffect(() => {
        console.log("Mounted")
        //now we need to get the token from local storage and use it to log in
        if (token) {
            setPosts(posts);
        }    
    }, [token])

   



return ( 
<BrowserRouter>
    <div id="container">
        <div id="title">
        <Link to="/profile">STRANGERS' THINGS</Link>
        </div>

    

        <div id="navbar">
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <span 
            id="logoutbutton"
            onClick={() => {
                alert('See you next time!')
                logout(setToken);

            }} > Logout </span>
                <p>
                    <Link to="/profile"> Profile </Link>
                    <Link to="/posts"> Listings   </Link>
                    <Link to="/makepost"> Create New </Link>
                </p>

                


      



                    
        </div>  
            <Route path="/posts" render={(routeProps) => <Posts {...routeProps} loggedIn={loggedIn} token={token} setToken={setToken} setPosts={setPosts} posts={posts} />}/>
            <Route path="/makepost" render={(routeProps) => <MakePost {...routeProps} token={token} setToken={setToken} setPosts={setPosts} posts={posts} />}/>
            <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} setUser={setUser} />}/> 
            <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} setUser={setUser} />} />
            <Route path="/profile" render={(routeProps) => <Profile {...routeProps} token={token} setUser={setUser} user={user} />} />
            <Route path="/singlepost/:postID" render={(routeProps) => <SinglePost {...routeProps} token={token} setToken={setToken} onePost={onePost} setOnePost={setOnePost} />} />
            <Route exact path="/" render={(routeProps) => token ? <Profile {...routeProps} token={token} setToken={setToken} user={user} /> : <Login {...routeProps} setToken={setToken} />} />
        

    </div>
</BrowserRouter>
)
   
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);









