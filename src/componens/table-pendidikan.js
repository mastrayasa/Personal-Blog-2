import React, { Component} from 'react'; 
export default class TablePendidikan extends Component{
    render(){
        return (
            <div>
                <table width="100%">
                    <thead>
                        <tr>
                            <th align="left">Tahun</th>
                            <th align="left">Nama Sekolah</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td>1995</td>
                            <td>SDN Inpress 3 Balinggi</td>
                        </tr>
                        <tr> 
                            <td>1998</td>
                            <td>SLTP 1 Sausu</td>
                        </tr>
                        <tr> 
                            <td>2004</td>
                            <td>SMAN 1 Sausu</td>
                        </tr>
                        <tr> 
                            <td>2008</td>
                            <td>LKP Saraswati Komputer</td>
                        </tr>
                        <tr> 
                            <td>2009</td>
                            <td>STMIK Amikom Yogyakarta</td>
                        </tr>
                    </tbody>						
                </table>			
            </div> 
        );
    }
}