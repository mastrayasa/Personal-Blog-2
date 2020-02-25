import React, { Component} from 'react'; 
export default class About extends Component{
    render(){
        return (
            <div>
                <img class="img-profil" width="160" align="center" src={require('../img/saya.jpg')}  />
                <h1>Tentang Saya</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.</p>
            </div> 
        );
    }
}