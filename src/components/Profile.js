import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../api';



//when given a token, render getUser as a "side effect" of the profile component. if the token is there, return a greeting (etc), otherwise, tell the user to login into their account
//extract the token into the profile and set the state of user inside of the profile
const Profile = ({token}) => {
    const [user, setUser] = useState([]);
    const [message, setMessage] = useState([])

    // const [messages, setMessages] = useState('');
    // const [userMessages, setUserMessages] = useState('');
    
   

    useEffect(async () => {
        if(token) {
       const userdata = await getUser(token, setUser);
       console.log('userdata.data', userdata.data)
       setUser(userdata.data)
       setMessage(userdata.data.messages)
    }
       
    }, [token])

  

  if(token) {
        return (
            <>
        
            <div className="centered">
                <h1> Welcome back, {user.username}!</h1>
                <h3>Inbox:</h3>
                

                {
                    message.map((message, index) => {
                        if (user.username !== message.fromUser.username) {
                        return (
                                <div key={index}>
                                    <ul >
                                        <ul><h4>Post: {message.post.title}</h4></ul>
                                        <ul>Sender: {message.fromUser.username}</ul>
                                        <ul>Message: {message.content}</ul>
                                    </ul>
                                </div> 
                                )}
                                
                              }
                            )
                }        
            </div>

            <div>
                <h3>Sent Messages: </h3>
                {
                    message.map((message, index) => {
                        if (user.username === message.fromUser.username) {
                        return (
                                <div key={index}>
                                    <ul >
                                        <ul><h4>Post: {message.post.title}</h4></ul>
                                        <ul>Sender: Me </ul>
                                        <ul>Message: {message.content}</ul>
                                    </ul>
                                </div> 
                                )}
                                
                              }
                            )
                }        
            </div>
            
            </>
            )} else {
                return(
                    <h3>Please <Link to='/login'>login </Link>to view your profile</h3>
                )
            }
            }
        

export default Profile;