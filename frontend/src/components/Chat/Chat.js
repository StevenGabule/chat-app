import React from 'react';
import {useSelector} from "react-redux";

const Chat = () => {
    const user = useSelector(state => state.authReducer.user);
    return (
       <>
           <h1>Chat Screen</h1>
           <p>Welcome Awesome! {user.firstName}</p>
       </>
    )
}

export default Chat;
