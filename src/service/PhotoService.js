import {UtilService} from '../service';

const BASE_URL_API = 'https://api-test.clara.cc';

export const PhotoService = {
    getPhotoList,
    createPhoto,
};

export function getPhotoList(){
    const requestOptions = {
            method: 'GET',
            headers: UtilService.authHeader()
        };


    return fetch(`${BASE_URL_API}/photos`, requestOptions)
            .then(UtilService.handleResponse)
            .then(photoList => {
                if (!photoList){
                    return [
                        {
                            "id": 1,
                            "nombre": "atardecer",
                            "descripcion": "una foto del atardecer",
                            "photoURL": "https://fotos/fotos.jpg"
                        },
                        {
                            "id": 2,
                            "nombre": "bosque",
                            "descripcion": "un bosque bonito",
                            "photoURL": "https://fotos/fotos.jpg"
                        },
                        {
                            "id": 3,
                            "nombre": "estrellas",
                            "descripcion": "noche estrellada",
                            "photoURL": "https://fotos/fotos.jpg"
                        }
                    ]
                }
                return photoList
            }).catch(error => {
                return error
            });
}

export function createPhoto(){
    const requestOptions = {
            method: 'POST',
            headers: UtilService.authHeader()
        };

    return fetch(`${BASE_URL_API}/photos`, requestOptions)
            .then(UtilService.handleResponse)
            .then(response => {
                console.log(response)
                return response
                
            }).catch(error => {
                return error
            });
}