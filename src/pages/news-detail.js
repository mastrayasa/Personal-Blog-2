import React, { Component} from 'react';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import nl2br from 'react-nl2br';
export default class NewsDetail extends Component{
    constructor(props) {
        super(props);
        document.title = "News Detail"; 

        this.state = {
        error: null,
        isLoaded: false,
        item:{}
        };
    }


    componentDidMount() {
        fetch("/news-detail.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                item: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){ 

        const { error, isLoaded, item } = this.state;

        return (
            <div> 
                <h2>{item.title}</h2>
                <small>27 Februari 2020 / {item.like} liked</small> 
                <p>{nl2br(item.des)}</p>
                
                   
               
              
            </div> 
        );
    }
}