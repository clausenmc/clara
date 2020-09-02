import React from 'react';
import CardPhoto from './CardPhoto';
import {PhotoService} from '../service'

class CardList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photoList: [],
            isLoading: true
        }
    }

    componentDidMount(){
        PhotoService.getPhotoList().then(photoList => (
            this.state = {
                photoList: photoList, isLoading: false
            }
        )).catch(error => (console.log('error' + error)))

    }

    render () {
        return (
            <div className="card-list">
                {this.state.isLoading ? <p>Is Loading</p> : this.state.photoList.map(it => (<CardPhoto id={it.id} nombre={it.nombre} descripcion={it.descripcion}/>) )}
 
            </div>
        )
    }
    
}

export default CardList