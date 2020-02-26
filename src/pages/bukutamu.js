import React, { Component} from 'react'; 
export default class BukuTamu extends Component{

    constructor(props) {
    super(props);
        this.state = {
            nama: 'Indah',
            pekerjaan: 'Programmer',
            pesan: 'Ini adalah pesan saya',
            kelamin: 'P',
        };

        this.handleChangeNama = this.handleChangeNama.bind(this);
        this.handleChangePekerjaan = this.handleChangePekerjaan.bind(this);
        this.handleChangePesan = this.handleChangePesan.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        document.title = "Buku Tamu"; 
    }

    
    handleOptionChange(event) {
    this.setState({
        kelamin: event.target.value
    });
  }
  
  

    handleChangeNama(event) {
        this.setState({nama: event.target.value});
    }

    handleChangePekerjaan(event) {
        this.setState({pekerjaan: event.target.value});
    }
    handleChangePesan(event) {
        this.setState({pesan: event.target.value});
    }


    handleFormSubmit(event) {
        event.preventDefault();
        
        alert(this.state.nama + "\n"+ this.state.pekerjaan + "\n"+ this.state.pesan + "\n"+ this.state.kelamin )

        this.setState({
            nama: '',
            pekerjaan: '',
            pesan: '',
            kelamin: '',
        });
    }
  
  


    render(){
        return (
            <div>
                <h1>Buku Tamu</h1>
                <form onSubmit={this.handleFormSubmit}>
                    Nama<br />
                    <input value={this.state.nama} onChange={this.handleChangeNama} type="text" size="32" />
                    
                    <br /><br />
                    
                    Pekerjaan<br />
                    <select value={this.state.pekerjaan} onChange={this.handleChangePekerjaan}>
                        <option value="">-Pilih-</option> 
                        <option>Pegawai</option> 
                        <option>Montir</option> 
                        <option>Guru</option> 
                        <option>Programmer</option> 
                        <option>PNS</option> 
                        <option>Lainnya</option> 
                    </select>
                    
                    <br /><br />
                    
                    Pesan<br />
                    <textarea rows="4" value={this.state.pesan} onChange={this.handleChangePesan}></textarea>
                    <br /><br />
                    
                    Jenis Kelamin<br />
                    <label><input type="radio" value="L"  checked={this.state.kelamin === 'L'} 
                      onChange={this.handleOptionChange} /> Laki-laki</label>
                    
                    <label><input type="radio" value="P"  checked={this.state.kelamin === 'P'} 
                      onChange={this.handleOptionChange} /> Wanita</label>
                    <br /><br />
                    
                    <br />
                    <input name="nama" type="submit" value="Kirim" /> 		
                </form>
            </div> 
        );
    }
}