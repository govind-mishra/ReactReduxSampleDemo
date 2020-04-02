import React from 'react';

function Contact(props) {
    setTimeout(()=>{
        props.history.push("/about")
    },2000);
    return (
        <div>
            <div className="container">
            <h1 className="center"> Hi i am Contact page</h1>
        </div>
        </div>
    )
}

export default Contact;
