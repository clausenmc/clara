import React from 'react';
import {PhotoService} from '../service'

class NewPhoto extends React.Component{
    constructor (props){
        super(props)
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.state = {
            data: {nombre:'', descripcion:'', imagen:''}
        }
    }

    handleChange(e) {
        const {id, value} = e.target;
        let{data}  = this.state;
        data[id] = value;
        this.setState({data: data})
    }

    handleSubmit() {
        const {data} = this.state;
        if (data.nombre && data.descripcion && data.imagen) {
            PhotoService.createPhoto(this.state.data)
            .then(response =>(console.log(response)))
            .catch(error =>(console.error(error)))

        } else {
            console.error('todos los parámetros son requeridos')
        }
    }

    render () {
        const {data} = this.state;
        return (
            <div className="new-photo">
    
                <h1>Add a new photo</h1>
    
                <div className="form">
                    <div className="input-group">
                        <label className="label" htmlFor="nombre">Name</label>
                        <input type="text" id="nombre" name="nombre" onChange={this.handleChange} value={data.nombre} />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="descripcion">Description</label>
                        <input type="text" id="descripcion" name="descripcion" onChange={this.handleChange} value={data.descripcion}  />
                    </div>
    
                    <div className="input-group">
                        <input className="inputfile" type="file" id="imagen" accept="image/png, image/jpeg" onChange={this.handleChange} value={data.imagen} />
                    </div>
                    <div className="input-group">
                        <button className="button" onClick={this.handleSubmit} >Enviar</button>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default NewPhoto