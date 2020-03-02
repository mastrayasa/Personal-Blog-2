import React, { Component} from 'react';  
import { 
    Link 
  } from "react-router-dom";
 
export default class News extends Component{
    constructor(props) {
        super(props);
        document.title = "News"; 

        this.state = {
       // error: null,
       // isLoaded: false,
        items: []
        };
    }


    componentDidMount() {
        fetch("/news.json")
          .then(res => res.json())
          .then(
            (result) => {
               this.setState({
              //   isLoaded: true,
                 items: result.items
               });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              // this.setState({
              //   isLoaded: true,
              //   error
              // });
            }
          )
      }

    render(){ 

        const {   items } = this.state;

        return (
            <div>

                <ul className="news">
                {items.map(item => (
                    <li key={item.id}>
                        <h2><Link to={`/news/${item.id}`}>
                        {item.title}
          </Link>
                            </h2>
                        <p>{item.des}</p>
                        <small>{item.like} liked</small>
                    </li>
                ))}
                </ul> 
            </div> 
        );
    }
}