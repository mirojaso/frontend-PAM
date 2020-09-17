import React, { Component } from 'react';
import logo_vwpam from '../images/volkswagen-por-amor-a-mexico.png';
import $ from "jquery";




export default class ConfirmRegister extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            selectedOption:'participante',
            nombre: '',
            middlename: '',
            appaterno: '',
            apmaterno: '',
            email: '',
            dateN: null,
            edad: '',
            codigopostal: '',
            telefono: '',
            estado: '',
            concesionario_id: '9998',
            concesionario: '',
            deviceid: '',
            user_record: '',
            estados: [],
            concesionarios: [],
            checkpolitaprivacidad: false,
            checktyc: false,
            fields: {},
            errors: {},
            checktermycond: false,
            respuestas: {},
            configurator_fs_data: {},
            respuesta: [],

        };


    }

    



   

    render() {
       
        return (
            <section className="register">
                <div className="container-fluid form-register-content ">
                    <div className="row">
                        <div  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 img-center">
                            <img  src={logo_vwpam}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        <p className="vw-text-parrafo" >Tu proyecto se registró exitosamente.</p> <br/>
        <h2 className="vw-header-h2">No. de participante {this.props.respuesta.message_app.id}</h2> <br/>
                        <p className="vw-header">¡Gracias por registrar tu proyecto en la convocatoria Por Amor a México!</p>
                        </div>
                    </div>
                   

                </div>
            </section>
        )
        
        

    }

}
