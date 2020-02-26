import React, { Component} from 'react'; 
import TablePendidikan from '../componens/table-pendidikan'
export default class Home extends Component{
    render(){
        return (
            <div>
                <img src={require('../img/baner.jpg')}  alt="..." data-aos="fade-up" data-aos-delay="100" />
                <h2>Selamat datang di website pribadi saya</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.</p>

                <h3>Timeline Pendidikan</h3>
				<TablePendidikan />
            </div> 
        );
    }
}