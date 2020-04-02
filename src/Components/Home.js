import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {connect } from 'react-redux'//use to connect component with redux store

class Home extends Component {
  render() {
      const {posts} = this.props;
    return (
        posts.length &&
        posts.map((item)=>{
            return (<div className="post card" key={item.id}>
                <div className="card-content">
                    <Link to={"/" + item.id}><span className="card-title">{item.title}</span></Link>
                    <p>{item.body}</p>
                </div>
            </div>)
        })
    );
  }
}

//we have to provide below function as an argument in our connect method
const mapStatetoProps = (state) =>{
    return {
        posts:state.posts
    }
}
//connect is the funtion that will give us HOC which wrap our component with the state we want
export default connect(mapStatetoProps)(Home);
