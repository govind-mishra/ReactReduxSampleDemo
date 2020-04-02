import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../Actions/PostAction'

class SinglePost extends Component {
    handleClick = () =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {
        return (this.props.post ? 
            <div className="container">
             <h3> {this.props.post.title} </h3>
             <p>{this.props.post.body}</p>
             <div className="center">
                 <button className="btn grey" onClick={this.handleClick}>
                     Delete Post
                 </button>
             </div>
            </div> 
            : (
                <div className="center">Loading post...</div>
              )
        )
    }
}

//for mapstatetoprops we use state and ownprops as argument
const mapstatetoprops = (state,ownProps) =>{
    let id =  ownProps.match.params.post_id;
    console.log(typeof id);
    return {
        post : state.posts.find(x=>x.id==id)
    }
}

//for mapdispatchtoprops we use dispatch as argument and it also return object which 
//represent what function we are gonna map with props of this component

const mapDispatchtoProps = (dispatch) =>{
    return {
        deletePost : (id)=>{ //anonymous function to dispatch an action
            dispatch(deletePost(id))//dispatch always takes object as argument having type property and optional payload property
        }
    }
}

export default connect(mapstatetoprops,mapDispatchtoProps)(SinglePost);