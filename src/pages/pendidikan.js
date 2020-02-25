import React, { Component} from 'react'; 
import TablePendidikan from '../componens/table-pendidikan'
export default class Pendidikan extends Component{
    render(){
        return (
            <div>
                <h1>Pendidikan</h1>
				<p>Saya bersyukur dapat menikmati pendidikan. berikut adalah beberapa pendidikan yang pernah saya tempuh</p>
                <TablePendidikan />

                 	
            </div> 
        );
    }
}