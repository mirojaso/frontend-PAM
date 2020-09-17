import React, { Component } from 'react';
import FormRegisterTeam from './FormRegisterTeam';
import ConfirmRegister from './ConfirmRegister';
import $ from "jquery";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default class FormRegister extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            numero_participantes:'',
            nombre_proyecto: "",
            nombre:'',
            nombre_1:'',
            nombre_2:'',
            nombre_3:'',
            nombre_4:'',
            egresado:'',
            email:"",
            telefono: "",
            celular: "",
            domicilio:"",
            tipo_participacion: "participante",
            lectura_t_y_c:'',
            requisitos: '',
            otro_proyecto_vw_mex: '',
            apoyo_federal: '',
            biodiversidad: '',
            biodiversidad_details: "",
            sitio: "",
            aspecto_relevante: "",
            aviso_privacidad: '',
            transferencia_datos: '',
            respuesta: [],
            errors: {},
            respuestas: {},
            labels:['Responsable']

        };

        this.onChange = this.onChange.bind(this);
       
    }

   

    
    handleValidation() {
      let errors = {};
      let formIsValid = true;
      var nombre_proyecto=this.state.nombre_proyecto;
      $.trim(nombre_proyecto);
      var nombre=this.state.nombre;
      $.trim(nombre);
      var email=this.state.email;
      $.trim(email);
      const telefono=this.state.telefono;
      const celular= this.state.celular;
      var domicilio= this.state.domicilio;
      $.trim(domicilio);
      const lectura_t_y_c= this.state.lectura_t_y_c;
      const otro_proyecto_vw_mex= this.state.otro_proyecto_vw_mex;
      const apoyo_federal= this.state.apoyo_federal;
      const biodiversidad= this.state.biodiversidad;
      //aplicar trim
      var biodiversidad_details=this.state.biodiversidad_details;
      $.trim(biodiversidad_details);
       var sitio=this.state.sitio;
       $.trim(sitio);
       var aspecto_relevante= this.state.aspecto_relevante;
       $.trim(aspecto_relevante);
       const aviso_privacidad=this.state.aviso_privacidad;
       const transferencia_datos= this.state.transferencia_datos;
       const requisitos= this.state.requisitos;

      
       if((!$("#aviso_privacidad").is(':checked') )|| (!$("#transferencia_datos").is(':checked'))){
        formIsValid = false;
        errors["checkpoliticatyc"] = "Aceptar Política de Privacidad y que mis datos sean transferidos.";
     }

     if(!biodiversidad_details){
      formIsValid = false;
      errors["biodiversidad_details"] = "Agrega una descripción"; 
     }
      
     if(!sitio){
      formIsValid = false;
      errors["sitio"] = "Agrega una descripción"; 
     }


     if(!aspecto_relevante){
      formIsValid = false;
      errors["aspecto_relevante"] = "Agrega una descripción"; 
     }
      

     

      if (!nombre) {
          formIsValid = false;
          errors["nombre"] = "Ingresa tu nombre";
        }
        if (!nombre_proyecto) {
          formIsValid = false;
          errors["nombre_proyecto"] = "Ingresa nombre de proyecto";
        }
        if (!email) {
          formIsValid = false;
          errors["email"] = "Ingresa tu email";
        }

        if (typeof email !== "undefined") {
          let lastAtPos = email.lastIndexOf('@');
          let lastDotPos = email.lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email no válido";
          }
        }


        if (!telefono) {
          formIsValid = false;
          errors["telefono"] = "Ingresa tu teléfono";
        }
    
        if (telefono.length != 10) {
          formIsValid = false;
          errors["telefono"] = "Ingresa un número de 10 dígitos";
        }


        if (!celular) {
          formIsValid = false;
          errors["celular"] = "Ingresa tu número celular";
        }
    
        if (celular.length != 10) {
          formIsValid = false;
          errors["celular"] = "Ingresa un número de 10 dígitos";
      
        }
        
        if (!domicilio) {
          formIsValid = false;
          errors["domicilio"] = "Ingresa tu domicilio";
        }

        if(!lectura_t_y_c){
          formIsValid = false;
          errors["lectura_t_y_c"] = "Selecciona una opción";
        }


        if(!requisitos){
          formIsValid = false;
          errors["requisitos"] = "Selecciona una opción";
        }
        if(!otro_proyecto_vw_mex){
          formIsValid = false;
          errors["otro_proyecto_vw_mex"] = "Selecciona una opción";
        }
        if(!biodiversidad){
          formIsValid = false;
          errors["biodiversidad"] = "Selecciona una opción";
        }
        if(!apoyo_federal){
          formIsValid = false;
          errors["apoyo_federal"] = "Selecciona una opción";
        }
        
        var $inputs = $('.letras');
        $inputs.each(function(i) { 
          $.trim($(this).val());
          if($(this).val()===""){ 
              formIsValid = false;
              errors["nombre_"+i] = "Ingresa nombre";
             
              }else{ 
                if(!$(this).val().match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/)){
                
                  formIsValid = false;
                  errors["nombre_"+i] = "Solo letras";
                }
              }
           
            
         });


         var $inputs = $('.numeros');
         $inputs.each(function(i) { 
         
           if($(this).val()===""){ 
               formIsValid = false;
               errors["datos_participantes_"+i] = "Llena todos los campos solicitados.";
               }
          
          else{ 
          if(!$(this).val().match(/^[0-9]+$/)){
          formIsValid = false;
          errors["datos_participantes_"+i] = "Solo números en campo semestre y edad.";
         
        }}});

        

        var $inputs = $('.numeros-edad');
         $inputs.each(function(i) { 
         
           if($(this).val()===""){ 
               formIsValid = false;
               errors["numeros_edad_"+i] = "Ingresa edad";
               }
          
          else{ 
          if(!$(this).val().match(/^[0-9]+$/)){
          formIsValid = false;
          errors["numeros_edad_"+i] = "Solo números 0-9.";
         
        }}});


        var $inputs = $('.numeros-semestre');
         $inputs.each(function(i) { 
          var n=parseInt(i)+1;
          n=String(n);
          var name_campo="egresado_"+n;
          name_campo="input[name='"+name_campo+"']:checked";
          
           if($(name_campo).val()=="false"){
         
           if($(this).val()===""){ 
               formIsValid = false;
               errors["semestre_"+i] = "Ingresa semestre";
               }
          
          else{ 
          if(!$(this).val().match(/^[0-9]+$/)){
          formIsValid = false;
          errors["semestre_"+i] = "Solo números 0-9.";
         
        }}}
      });
       
        var $inputs_egreso= $('.numeros-egreso');
        $inputs_egreso.each(function(i) { 
          var n=parseInt(i)+1;
          n=String(n);
          var name_campo="egresado_"+n;
          name_campo="input[name='"+name_campo+"']:checked";
          
           if($(name_campo).val()=="true"){
           
          if($(this).val().length!=4 || $(this).val()===""){ 
              formIsValid = false;
              errors["egreso_anio_"+i] = "Año de egreso no válido YYYY";
              }
            
            else{
              if(!$(this).val().match(/^[0-9]+$/)){
              formIsValid = false;
              errors["egreso_anio_"+i] = "Solo números";
            }
          }
            }
         });
         var numero_participantes=parseInt(this.state.numero_participantes);
         numero_participantes=numero_participantes+1;

        
         for(let i=1; i < numero_participantes; i++){
             var name_campo="mexicano_"+i;
             name_campo="input[name='"+name_campo+"']";
         
           
          if(!$(name_campo).is(':checked')){
              formIsValid = false;
               errors["datos_participantes_"+(i-1)] = "Selecciona Nacionalidad";
             }

         }


         
            for(let j=1; j < numero_participantes; j++){ 
             var name_campo="egresado_"+j;
             name_campo="input[name='"+name_campo+"']";
         
          if(!$(name_campo).is(':checked')){
              formIsValid = false;
               errors["egresado_"+j] = "Selecciona una opción";
             }
             
             }

      


     

    var num_pregunta=7;

      for(let i=1; i < num_pregunta; i++){
          for(let j=1; j < numero_participantes; j++){ 
          var name_campo="relacion_empleado_"+i+"_"+j;
          name_campo="input[name='"+name_campo+"']";
      
       if(!$(name_campo).is(':checked')){
           formIsValid = false;
            errors["relacion_empleado"] = "Llena todos los campos solicitados.";
          }
          
          }
         }
        
         for(let i=1; i < num_pregunta; i++){
          for(let j=1; j < numero_participantes; j++){ 
          var name_campo="relacion_partner_"+i+"_"+j;
          name_campo="input[name='"+name_campo+"']";
      
       if(!$(name_campo).is(':checked')){
           formIsValid = false;
            errors["relacion_partner"] = "Llena todos los campos solicitados.";
          }
          
          }
         }




         for(let i=1; i < numero_participantes; i++){
         
          var funcionario_publico="funcionario_publico_"+i;
          funcionario_publico="input[name='"+funcionario_publico+"']";
      
       if(!$(funcionario_publico).is(':checked')){
           formIsValid = false;
            errors["cargo_publico"] = "Llena todos los campos solicitados.";
          }
      
          var cargo_publico="cargo_publico_"+i;
          cargo_publico="input[name='"+cargo_publico+"']";

          if(!$(cargo_publico).is(':checked')){
              formIsValid = false;
               errors["cargo_publico"] = "Llena todos los campos solicitados.";
             }

             var partido_politico="partido_politico_"+i;
             partido_politico="input[name='"+partido_politico+"']";
 
             if(!$(partido_politico).is(':checked')){
                 formIsValid = false;
                  errors["cargo_publico"] = "Llena todos los campos solicitados.";
                }
          
          
         }

        this.setState({ errors: errors });
        return formIsValid;
  }

onChangeLetras = e => {

  let regexap = new RegExp("^[a-zA-ZnÑ ]+$");

  if (regexap.test(e.target.value) || (e.target.value === "")) {
   
    $("#"+e.target.name).val(e.target.value);
    
    }

}

  onChange = e => {
       let regexdo = new RegExp("^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$");
      let regex = new RegExp("^[a-zA-ZñÑ]+$");
      let regexap = new RegExp("^[a-zA-ZnÑ ]+$");
      let regexp = new RegExp("^[0-9\b]+$");
     
    

      if ((e.target.name === "nombre")||(e.target.name === "nombre_proyecto")  ) {
       
          if (regexap.test(e.target.value) || (e.target.value === "")) {
            this.setState({
              [e.target.name]: e.target.value
            });
         
            if(e.target.name === "nombre"){
              $("#nombre_1").val($("#nombre").val());
          }
          }
        }

        else if((e.target.name === "biodiversidad_details")||(e.target.name === "domicilio") || (e.target.name === "aspecto_relevante") || (e.target.name === "sitio")){
          if (regexdo.test(e.target.value) || (e.target.value === "")) {
            this.setState({
              [e.target.name]: e.target.value
            });
        }
      }
      
     

      
     
        
      else if ((e.target.name === "telefono") || (e.target.name === "celular") ) {
          if (regexp.test(e.target.value) || (e.target.value === "")) {
            this.setState({
              [e.target.name]: e.target.value
            });
          }
      }
        else{
          this.setState({
              [e.target.name]: e.target.value
            });

        }
  }

  getParticipantes = (e) => {
      this.setState({
          [e.target.name]: e.target.value
        })
    let labels=['Responsable'];
    for(var i=2; i<= e.target.value; i++){
        labels.push('Integrante'+ i);
    }
    this.setState({
      labels: labels
    })

  }


  handleOptionChange = e => {
      
  this.setState({
    [e.target.name]: e.target.value
  });
  }

  handleOptionEgreso= e => {

     var val = e.target.name;
     var myString = val.substr(val.indexOf("_") + 1);
    

     if(e.target.value=="true"){
       $("#egreso_universidad_"+myString).show();
       $("#egreso_etiqueta_"+myString).show();
       $("#egreso_universidad_"+myString).removeAttr("readonly");
       $("#egreso_universidad_"+myString).val('');
       $("#semestre_"+myString).hide();
       $("#semestre_"+myString).val('0');


     }
     else{
      $("#egreso_universidad_"+myString).hide();
       $("#egreso_etiqueta_"+myString).hide();
      $("#egreso_universidad_"+myString).val('0000');
      $("#semestre_"+myString).show();
      $("#semestre_"+myString).removeAttr("readonly");
      $("#semestre_"+myString).val('');
     }
      
  
  }

 
 

  getParticipanFields = id => {
     

     let nombre = document.getElementById("nombre_" + id).value;
     let email = (typeof (document.getElementById("email_" + id) != "undefined") && document.getElementById("email_" + id) != null) ? document.getElementById("email_" + id).value : "";
     let telefono = (typeof (document.getElementById("telefono_" + id) != "undefined") && document.getElementById("telefono_" + id) != null) ? document.getElementById("telefono_" + id).value : "";
     let celular = (typeof (document.getElementById("celular_" + id) != "undefined") && document.getElementById("celular_" + id) != null) ? document.getElementById("celular_" + id).value : "";
     let domicilio = (typeof (document.getElementById("domicilio_" + id) != "undefined") && document.getElementById("domicilio_" + id) != null) ? document.getElementById("domicilio_" + id).value : "";
     let edad = parseInt(document.getElementById("edad_" + id).value);
     let semestre = (document.getElementById("semestre_" + id).value == "") ? 0 : parseInt(document.getElementById("semestre_" + id).value);
     let egreso_universidad = (document.getElementById("egreso_universidad_" + id).value == "") ? 0 : parseInt(document.getElementById("egreso_universidad_" + id).value);
     let mexicano = $("input[name='mexicano_" + id + "']:checked").val();
     let relacion_empleado_1 = $("input[name='relacion_empleado_1_" + id + "']:checked").val();
     let relacion_empleado_2 = $("input[name='relacion_empleado_2_" + id + "']:checked").val();
     let relacion_empleado_3 = $("input[name='relacion_empleado_3_" + id + "']:checked").val();
     let relacion_empleado_4 = $("input[name='relacion_empleado_4_" + id + "']:checked").val();
     let relacion_empleado_5 = $("input[name='relacion_empleado_5_" + id + "']:checked").val();
     let relacion_empleado_6 = $("input[name='relacion_empleado_6_" + id + "']:checked").val();
     let relacion_partner_1 = $("input[name='relacion_partner_1_" + id + "']:checked").val();
     let relacion_partner_2 = $("input[name='relacion_partner_2_" + id + "']:checked").val();
     let relacion_partner_3 = $("input[name='relacion_partner_3_" + id + "']:checked").val();
     let relacion_partner_4 = $("input[name='relacion_partner_4_" + id + "']:checked").val();
     let relacion_partner_5 = $("input[name='relacion_partner_5_" + id + "']:checked").val();
     let relacion_partner_6 = $("input[name='relacion_partner_6_" + id + "']:checked").val();
     let funcionario_publico = $("input[name='funcionario_publico_" + id + "']:checked").val();
     let cargo_publico = $("input[name='cargo_publico_" + id + "']:checked").val();
     let partido_politico = $("input[name='partido_politico_" + id + "']:checked").val();
     let representante = (typeof (document.getElementById("representante_" + id) != "undefined") && document.getElementById("representante_" + id) != null) ? document.getElementById("representante_" + id).value : false;

     return { 'nombre': nombre, 'email': email, 'telefono': telefono, 'celular': celular, 'domicilio': domicilio, 'edad': edad, 'semestre': semestre, 'egreso_universidad': egreso_universidad, 'mexicano': mexicano, 'relacion_empleado_1': relacion_empleado_1, 'relacion_empleado_2': relacion_empleado_2, 'relacion_empleado_3': relacion_empleado_3, 'relacion_empleado_4': relacion_empleado_4, 'relacion_empleado_5': relacion_empleado_5, 'relacion_empleado_6': relacion_empleado_6, 'relacion_partner_1': relacion_partner_1, 'relacion_partner_2': relacion_partner_2, 'relacion_partner_3': relacion_partner_3, 'relacion_partner_4': relacion_partner_4, 'relacion_partner_5': relacion_partner_5, 'relacion_partner_6': relacion_partner_6, 'funcionario_publico': funcionario_publico, 'cargo_publico': cargo_publico, 'representante': representante, 'partido_politico': partido_politico }

 }
   
  
   

  onSubmit = e => {
      e.preventDefault();

      
      //let participantes = getAllParticipanData(countParticipantes);
     
     
      let respuestas = {};

      if(this.handleValidation()){
        respuestas["respuesta"] = "Espera un momento, estamos registrando tus datos.";
        this.setState({ respuestas: respuestas });
          
          $('#registrar_proyecto').attr("disabled", true);
          $("#registrar_proyecto").removeClass("vw-button");
          $("#registrar_proyecto").addClass("vw-button-desactive");
          let countParticipantes = this.state.numero_participantes;
    
       
          let arrParticipantes = [];
          console.log('fuera');
          for(let i = 1; i <= countParticipantes; i++) {
              console.log('adentro');
             
              let objecto_fields=this.getParticipanFields(i);
              arrParticipantes.push(objecto_fields);
          }

          let participantes = arrParticipantes;
          
          let proyecto = {
              nombre_proyecto: this.state.nombre_proyecto,
              tipo_participacion: this.state.tipo_participacion,
              numero_participantes: this.state.numero_participantes,
              lectura_t_y_c: this.state.lectura_t_y_c,
              requisitos:this.state.requisitos,
              otro_proyecto_vw_mex: this.state.otro_proyecto_vw_mex,
              apoyo_federal: this.state.apoyo_federal,
              biodiversidad: this.state.biodiversidad,
              biodiversidad_details: this.state.biodiversidad_details,
              sitio: this.state.sitio,
              aspecto_relevante: this.state.aspecto_relevante,
              aviso_privacidad_t_y_c: this.state.aviso_privacidad,
              transferencia_datos:this.state.transferencia_datos,
          };
  
         
          
  
          var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
  
          headers.append('Access-Control-Allow-Origin', 'https://www.pruebastype1.com/pam/');
          headers.append('Access-Control-Allow-Credentials', 'true');
  
          headers.append('GET', 'POST', 'OPTIONS');
          var raw = JSON.stringify({ proyecto, participantes });
  
          var requestOptions = {
              method: "POST",
              headers: headers,
              body: raw,
              redirect: "follow",
          };
  
          fetch("https://api-vwpam.alexsob.net/projects", requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
                
             
              if (result.code=='success') {
                  this.setState({ respuesta: result });

                  this.setState({ show: !this.state.show });
              }
              else{

                $('#registrar_proyecto').attr("disabled", false);
                $("#registrar_proyecto").removeClass("vw-button-desactive");
                $("#registrar_proyecto").addClass("vw-button");
                  
                  respuestas["respuesta"] = "Ocurrio un error, intentalo más tarde.";
                  
                  this.setState({ respuestas: respuestas });
              }
            },
            (error) => {

              $('#registrar_proyecto').attr("disabled", false);
              $("#registrar_proyecto").removeClass("vw-button-desactive");
              $("#registrar_proyecto").addClass("vw-button");
              respuestas["respuesta"] = "Ocurrio un error, intentalo más tarde.";
                  
                  this.setState({ respuestas: respuestas });
              console.log(error);
              
            }
          )


      }
      else{
        respuestas["respuesta"] = "Por favor llena todos los campos solicitados del formulario.";
        this.setState({ respuestas: respuestas });
          console.log("El formulario tiene errores");
      }

     
  }


  prueba(e){
    var tecla = e.keyCode || e.which;
    if(tecla>64 && tecla<91 || tecla==32 || tecla== 8 || tecla==192){
       
    }
    else{
      e.preventDefault();
    }
}


numerospress(event){ 
  if(event.charCode < 48 || event.charCode > 57 ){
    event.preventDefault();
 } 
}


numberMobile(e){
  e.target.value = e.target.value.replace(/[^\d]/g,'');
  return false;
}

letrasMobile(e){
  e.target.value = e.target.value.replace(/[^a-zA-ZnÑ ]/g, "")
  return false;
  
}



  async componentDidMount() {
   

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    $(".elements-desktop").remove();
  } else {
    $(".accordions-mobile").remove();
  }
     this.setState({
     numero_participantes: 1
    })
     

    

   
 

  }


 
    render() {
        if(this.state.show){
            if (this.state.tipo_participacion==='participante') {
        return (
          
            <section className="register">
                <div className="container-fluid form-register-content ">
                <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1 className="vw-header" >Por Amor a México, Chav@s. </h1>
          <h2 className="vw-header-h2">Edición especial, 2020.</h2>
          <p className="vw-text-parrafo-title" >¡Gracias por interesarte en la convocatoria Por Amor a México! </p>
            <p className="vw-text-parrafo-title">Por favor completa tu pre-registro respondiendo las siguientes preguntas.</p>
       
          </div>
        </div>
                <form id="register-form" method="post" onSubmit={this.onSubmit}>
                <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label className="vw-texto-legales">Para conocer las bases del concurso <u><strong><a style={{cursor:'pointer'}} data-toggle="modal" data-target="#modal-legales">haz clic aquí.</a></strong></u></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label className="vw-title-section">Inscribe aquí tu proyecto.</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input
                                className="border-input"
                                type="text"
                                placeholder="Nombre del proyecto"
                                name="nombre_proyecto"
                                id="nombre_proyecto"
                                value={this.state.nombre_proyecto}
                                onChange={this.onChange}
                                 /><br/>
                            <span style={{ color: "red" }}>{this.state.errors["nombre_proyecto"]}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            
                                <label className="radio-inline">
                                    <input type="radio" 
                                    name="tipo_participacion" 
                                    value="participante"
                                    onChange={this.handleOptionChange}
                                    checked={this.state.tipo_participacion === 'participante'} />Participación individual</label> 
                                 
                                <label className="radio-inline">
                                    <input 
                                    type="radio" 
                                    name="tipo_participacion"
                                    value="equipo"
                                    onChange={this.handleOptionChange}
                                    checked={this.state.tipo_participacion === 'equipo'} 
                                    />Participación en equipo</label>
                           

                        </div>   
                    </div>

                   
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                               <label>EL PARTICIPANTE Y/O el representante de EL EQUIPO (la persona que registra el proyecto, será el representante del proyecto).</label> <br/>
                               
                        
                        </div>   
                    </div>

                   
                     <div className="row" key="1">
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input type="hidden"  value="true" id="representante_1" />
                            <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            className="border-input"
                            value={this.state.nombre}
                            onChange={this.onChange}
                            placeholder="Nombre completo"
                            /><br/>
                            <span style={{ color: "red" }}>{this.state.errors["nombre"]}</span>
                     </div>   
                    </div>
                     <div className="row" key="2">
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <input
                            type="text"
                            className="border-input"
                            placeholder="Correo*"
                            name="email"
                            id="email_1"
                            value={this.state.email}
                            onChange={this.onChange}

                            />
                            <br/>
                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                     </div>   
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <input
                            type="text"
                            className="border-input"
                            placeholder="Télefono*"
                            maxLength="10"
                            name="telefono"
                            id="telefono_1"
                            value={this.state.telefono}
                            onChange={this.onChange}

                            /><br/>
                            <span style={{ color: "red" }}>{this.state.errors["telefono"]}</span>
                     </div> 
                 </div>
                
                   
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                               <input
                               type="text"
                               className="border-input"
                               placeholder="Celular*"
                               maxLength="10"
                               name="celular"
                               id="celular_1"
                               value={this.state.celular}
                              onChange={this.onChange}
                               /><br/>
                               <span style={{ color: "red" }}>{this.state.errors["celular"]}</span>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                               <input
                               type="text"
                               className="border-input"
                               placeholder="Domicilio"
                               name="domicilio"
                               
                               id="domicilio_1"
                               value={this.state.domicilio}
                               onChange={this.onChange}

                               /><br/>
                               <span style={{ color: "red" }}>{this.state.errors["domicilio"]}</span>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-title-section" >Preguntas pre-registro</label>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">1- ¿El participante y/o los integrantes del equipo revisaron y leyeron de manera completa y exhaustiva los términos y condiciones para participar en el premio POR AMOR A MÉXICO, CHAV@S. EDICIÓN ESPECIAL, 2020?</label><br/>
                        <label className="radio-inline"><input name="lectura_t_y_c"  id="lectura_t_y_c" value="true"   onChange={this.handleOptionChange}  type="radio"/> Sí</label>
                        <label className="radio-inline"><input name="lectura_t_y_c"  id="lectura_t_y_c" value="false"  onChange={this.handleOptionChange} type="radio" /> No</label><br/>
                        <span style={{ color: "red" }}>{this.state.errors["lectura_t_y_c"]}</span>
                        </div>   
                    </div>

          

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">2- ¿El participante y/o los integrantes del equipo cumplen con los requisitos establecidos en los Términos y Condiciones para participar en el concurso?</label><br/>
                        <label className="radio-inline"><input name="requisitos"  id="requisitos" value="true"   onChange={this.handleOptionChange}  type="radio"/> Sí</label>
                        <label className="radio-inline"><input name="requisitos"  id="requisitos" value="false"  onChange={this.handleOptionChange} type="radio" /> No</label><br/>
                        <span style={{ color: "red" }}>{this.state.errors["requisitos"]}</span><br/>
                        
                       </div>   
                    </div>
                    
                    {Array.apply(null, {
                  length: this.state.numero_participantes,
                }).map((e, i) => (
                  <span>
                    <div  className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       <label className="label-integrante"> {this.state.labels[i]}</label>
                         </div>
                      </div>
                      <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input
                          name={"nombre_" + (i + 1)}
                          id={"nombre_" + (i + 1)}
                          type="text" 
                          placeholder="Nombre completo"
                          className="border-input letras"
                           onKeyDown={this.prueba}
                           onKeyUp={this.letrasMobile}
                        /> <br/>
                        <span style={{ color: "red" }}>{this.state.errors["nombre_"+i]}</span><br/>

                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input
                          id={"edad_" + (i + 1)}
                          name={"edad_" + (i + 1)}
                          className="border-input numeros-edad"
                          onKeyUp={this.numberMobile}
                          maxLength="2"
                          placeholder="Edad"
                          type="text"
                          onKeyPress={this.numerospress}
                         
                        />  <br/>
                        <span style={{ color: "red" }}>{this.state.errors["numeros_edad_"+i]}</span><br/>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">¿Eres egresado?</label>
                        <label className="radio-inline">
                          <input
                            name={"egresado_" + (i + 1)}
                            id={"egresado_" + (i + 1)}
                            value="true"
                            onChange={this.handleOptionEgreso}
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            name={"egresado_" + (i + 1)}
                            id={"egresado_" + (i + 1)}
                            value="false"
                            onChange={this.handleOptionEgreso}
                            type="radio"
                          />{" "}
                          No
                        </label>
                        <br />
                        <span style={{ color: "red" }}>
                          {this.state.errors["egresado_"+(i+1)]}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input
                          name={"semestre" + (i + 1)}
                          id={"semestre_" + (i + 1)}
                          className="border-input numeros-semestre"
                          type="text"
                          regexp="[0-9]{0,2}"
                          onKeyPress={this.numerospress}
                          onKeyUp={this.numberMobile}
                          placeholder="Semestre que cursa (1,2,3,4….8)"
                          maxLength="2"
                          readOnly
                         
                        /><br/>
                         <span id={"semestre_etiqueta_"+(i+1)} style={{ color: "red" }}>{this.state.errors["semestre_"+i]}</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       
                        <input
                          id={"egreso_universidad_" + (i + 1)}
                          name={"egreso_universidad" + (i + 1)}
                          type="text"
                          onKeyPress={this.numerospress}
                          onKeyUp={this.numberMobile}
                          className="border-input numeros-egreso"
                          maxLength="4"
                          readOnly
                          placeholder="Año de egreso YYYY"
                        />
                        <br/>
                        <span id={"egreso_etiqueta_"+(i+1)} style={{ color: "red" }}>{this.state.errors["egreso_anio_"+i]}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        id="mexicano-radio"
                        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "
                      >
                        <label>Nacionalidad mexicana</label>
                        <label className="radio-inline mexicano">
                          <input
                            name={"mexicano_" + (i + 1)}
                            id={"mexicano_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline mexicano">
                          <input
                            name={"mexicano_" + (i + 1)}
                            id={"mexicano_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </div>
                    </div>

                    <div  className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <span style={{ color: "red" }}>{this.state.errors["datos_participantes_"+i]}</span><br/>
                      
                         </div>
                      </div>
                  </span>
                ))}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="vw-question">
                      3- El participante y/o alguno de los integrantes del
                      equipo es familiar, pariente por afinidad o consanguinidad
                      hasta en segundo grado o cónyuge de algún empleado de:
                    </label>
                    <br />
                    <span style={{ color: "red" }}>
                      {this.state.errors["relacion_empleado"]}
                    </span>
                    <br />
                  </div>
                </div>
                <div className="row vw-etiquetas">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label></label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {this.state.labels.map((etiqueta) => (
                      <span>
                        <label className="label-radio">
                          <strong>{etiqueta} </strong>
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen de México, S.A. de C.V. (VW).
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_1_" + (i + 1)}
                                      name={"relacion_empleado_1_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_1_" + (i + 1)}
                                      name={"relacion_empleado_1_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen de México, S.A. de C.V. (VW).</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_1_" + (i + 1)}
                            name={"relacion_empleado_1_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_1_" + (i + 1)}
                            name={"relacion_empleado_1_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Servicios de Administración de Personal,
                            S.A. de C.V.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_2_" + (i + 1)}
                                      name={"relacion_empleado_2_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_2_" + (i + 1)}
                                      name={"relacion_empleado_2_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>
                      Volkswagen Servicios de Administración de Personal, S.A.
                      de C.V.
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_2_" + (i + 1)}
                            name={"relacion_empleado_2_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_2_" + (i + 1)}
                            name={"relacion_empleado_2_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Leasing, S.A. de C.V.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_3_" + (i + 1)}
                                      name={"relacion_empleado_3_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_3_" + (i + 1)}
                                      name={"relacion_empleado_3_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  </div>
                  <div className="row elements-desktop">
                    <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                      <label>Volkswagen Leasing, S.A. de C.V.</label>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                      {Array.apply(null, {
                        length: this.state.numero_participantes,
                      }).map((e, i) => (
                        <span>
                          <label className="radio-inline">
                            <input
                              id={"relacion_empleado_3_" + (i + 1)}
                              name={"relacion_empleado_3_" + (i + 1)}
                              value="true"
                              type="radio"
                            />{" "}
                            Sí
                          </label>
                          <label className="radio-inline">
                            <input
                              id={"relacion_empleado_3_" + (i + 1)}
                              name={"relacion_empleado_3_" + (i + 1)}
                              value="false"
                              type="radio"
                            />{" "}
                            No
                          </label>
                        </span>
                      ))}
                    </div>
                  </div>
                
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Instituto para Formación y Desarrollo Volkswagen,
                            S.C.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_4_" + (i + 1)}
                                      name={"relacion_empleado_4_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_4_" + (i + 1)}
                                      name={"relacion_empleado_4_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>
                      Instituto para Formación y Desarrollo Volkswagen, S.C.
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_4_" + (i + 1)}
                            name={"relacion_empleado_4_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_4_" + (i + 1)}
                            name={"relacion_empleado_4_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Servicios, S.A. de C.V.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_5_" + (i + 1)}
                                      name={"relacion_empleado_5_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_5_" + (i + 1)}
                                      name={"relacion_empleado_5_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen Servicios, S.A. de C.V.</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_5_" + (i + 1)}
                            name={"relacion_empleado_5_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_5_" + (i + 1)}
                            name={"relacion_empleado_5_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Bank.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_6_" + (i + 1)}
                                      name={"relacion_empleado_6_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_empleado_6_" + (i + 1)}
                                      name={"relacion_empleado_6_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen Bank</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_6_" + (i + 1)}
                            name={"relacion_empleado_6_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_empleado_6_" + (i + 1)}
                            name={"relacion_empleado_6_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="vw-question">
                      4- El participante y/o alguno de los integrantes del
                      equipo es familiar, pariente por afinidad o consanguinidad
                      hasta en segundo grado o cónyuge de algún empleado o
                      asociado de proveedores, empresas afiliadas y/o
                      subcontratadas que proporcionen servicios, insumos y
                      productos a:
                    </label>
                    <br />
                    <span style={{ color: "red" }}>
                      {this.state.errors["relacion_partner"]}
                    </span>
                    <br />
                  </div>
                </div>
                <div className="row vw-etiquetas">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label></label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {this.state.labels.map((etiqueta) => (
                      <span>
                        <label className="label-radio">
                          {" "}
                          <stron>{etiqueta} </stron>
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen de México, S.A. de C.V. (VW).
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrantea " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_1_" + (i + 1)}
                                      name={"relacion_partner_1_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_1_" + (i + 1)}
                                      name={"relacion_partner_1_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen de México, S.A. de C.V. (VW).</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_1_" + (i + 1)}
                            name={"relacion_partner_1_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_1_" + (i + 1)}
                            name={"relacion_partner_1_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Servicios de Administración de Personal,
                            S.A. de C.V.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_2_" + (i + 1)}
                                      name={"relacion_partner_2_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_2_" + (i + 1)}
                                      name={"relacion_partner_2_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>
                      Volkswagen Servicios de Administración de Personal, S.A.
                      de C.V.
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_2_" + (i + 1)}
                            name={"relacion_partner_2_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_2_" + (i + 1)}
                            name={"relacion_partner_2_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row  accordions-mobile">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Leasing, S.A. de C.V.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_3_" + (i + 1)}
                                      name={"relacion_partner_3_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_3_" + (i + 1)}
                                      name={"relacion_partner_3_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen Leasing, S.A. de C.V.</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_3_" + (i + 1)}
                            name={"relacion_partner_3_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_3_" + (i + 1)}
                            name={"relacion_partner_3_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Instituto para Formación y Desarrollo Volkswagen,
                            S.C.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_4_" + (i + 1)}
                                      name={"relacion_partner_4_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_4_" + (i + 1)}
                                      name={"relacion_partner_4_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>
                      Instituto para Formación y Desarrollo Volkswagen, S.C.
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_4_" + (i + 1)}
                            name={"relacion_partner_4_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_4_" + (i + 1)}
                            name={"relacion_partner_4_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Servicios, S.A. de C.V.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_5_" + (i + 1)}
                                      name={"relacion_partner_5_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_5_" + (i + 1)}
                                      name={"relacion_partner_5_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen Servicios, S.A. de C.V.</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_5_" + (i + 1)}
                            name={"relacion_partner_5_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_5_" + (i + 1)}
                            name={"relacion_partner_5_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Volkswagen Bank.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_6_" + (i + 1)}
                                      name={"relacion_partner_6_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"relacion_partner_6_" + (i + 1)}
                                      name={"relacion_partner_6_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Volkswagen Bank</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_6_" + (i + 1)}
                            name={"relacion_partner_6_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"relacion_partner_6_" + (i + 1)}
                            name={"relacion_partner_6_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="vw-question">
                      5- ¿El participante y/o alguno de los integrantes del
                      equipo es funcionario público en activo o persona que
                      ocupa algún cargo público o un cargo activo en algún
                      partido político?
                    </label>
                    <br />

                    <span style={{ color: "red" }}>
                      {this.state.errors["cargo_publico"]}
                    </span>
                    <br />
                  </div>
                </div>
                <div className="row vw-etiquetas">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label></label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {this.state.labels.map((etiqueta) => (
                      <span>
                        <label className="label-radio">
                          {" "}
                          <stron>{etiqueta} </stron>
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Funcionario público
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"funcionario_publico_" + (i + 1)}
                                      name={"funcionario_publico_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"funcionario_publico_" + (i + 1)}
                                      name={"funcionario_publico_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Funcionario público</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"funcionario_publico_" + (i + 1)}
                            name={"funcionario_publico_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"funcionario_publico_" + (i + 1)}
                            name={"funcionario_publico_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Tiene un cargo público.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"cargo_publico_" + (i + 1)}
                                      name={"cargo_publico_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"cargo_publico_" + (i + 1)}
                                      name={"cargo_publico_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Tiene un cargo público.</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"cargo_publico_" + (i + 1)}
                            name={"cargo_publico_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"cargo_publico_" + (i + 1)}
                            name={"cargo_publico_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row accordions-mobile py-2">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Tiene un cargo en algún partido político.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                              {Array.apply(null, {
                                length: this.state.numero_participantes,
                              }).map((e, i) => (
                                <span>
                                  <label className="label-radio">
                                    <stron>
                                      {i === 0
                                        ? "Responsable"
                                        : "Integrante " + (i + 1)}{" "}
                                    </stron>
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"partido_politico_" + (i + 1)}
                                      name={"partido_politico_" + (i + 1)}
                                      value="true"
                                      type="radio"
                                    />{" "}
                                    Sí
                                  </label>
                                  <label className="radio-inline">
                                    <input
                                      id={"partido_politico_" + (i + 1)}
                                      name={"partido_politico_" + (i + 1)}
                                      value="false"
                                      type="radio"
                                    />{" "}
                                    No
                                  </label>
                                </span>
                              ))}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="row elements-desktop">
                  <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <label>Tiene un cargo en algún partido político.</label>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    {Array.apply(null, {
                      length: this.state.numero_participantes,
                    }).map((e, i) => (
                      <span>
                        <label className="radio-inline">
                          <input
                            id={"partido_politico_" + (i + 1)}
                            name={"partido_politico_" + (i + 1)}
                            value="true"
                            type="radio"
                          />{" "}
                          Sí
                        </label>
                        <label className="radio-inline">
                          <input
                            id={"partido_politico_" + (i + 1)}
                            name={"partido_politico_" + (i + 1)}
                            value="false"
                            type="radio"
                          />{" "}
                          No
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                   
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">6- ¿El participante y/o alguno de los integrantes del equipo está participando en otro proyecto de Volkswagen de México?</label><br/>
                        <label className="radio-inline"><input id="otro_proyecto_vw_mex" name="otro_proyecto_vw_mex"  value="true" type="radio" onChange={this.handleOptionChange} /> Sí</label>
                        <label className="radio-inline"><input  id="otro_proyecto_vw_mex" name="otro_proyecto_vw_mex" value="false" type="radio"  onChange={this.handleOptionChange}  /> No</label>
                        <br/>
                        <span style={{ color: "red" }}>{this.state.errors["otro_proyecto_vw_mex"]}</span>
                        </div>   
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">7- ¿El proyecto que se inscribirá en el concurso ha recibido algún apoyo económico federal, estatal o municipal, de alguna secretaría, dependencia o institución pública, de algún programa fideicomiso, fondo o similar de naturaleza pública?</label><br/>
                        <label className="radio-inline"><input id="apoyo_federal" name="apoyo_federal" value="true" type="radio" onChange={this.handleOptionChange} /> Sí</label>
                        <label className="radio-inline"><input id="apoyo_federal" name="apoyo_federal" value="false" type="radio" onChange={this.handleOptionChange}  /> No</label>
                        <br/>
                        <span style={{ color: "red" }}>{this.state.errors["apoyo_federal"]}</span>
                        </div>   
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">8-¿El proyecto que se inscribe al concurso busca y/o procura la protección, conservación, aprovechamiento y/o restauración de la biodiversidad en nuestro país?</label><br/>
                        <label className="radio-inline"><input  id="biodiversidad" name="biodiversidad" value="true" type="radio" onChange={this.handleOptionChange} /> Sí</label>
                        <label className="radio-inline"><input id="biodiversidad" name="biodiversidad" value="false" type="radio"  onChange={this.handleOptionChange} /> No</label>
                        <br/>
                        <span style={{ color: "red" }}>{this.state.errors["biodiversidad"]}</span>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">¿Por qué?</label>
                        <textarea id="biodiversidad_details"   name="biodiversidad_details"  onChange={this.onChange} class="form-control textarea" value={this.state.biodiversidad_details}   rows="5"></textarea>
                        <br/>
                        <span style={{ color: "red" }}>{this.state.errors["biodiversidad_details"]}</span>
                        
                        </div>   
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">9- ¿El proyecto que se inscribe al concurso se ejecutará en sitio (bosque, parque, mar, río, playa, etc.), y/o en alguna plataforma alternativa?</label>
                        <textarea class="form-control"  id="sitio" name="sitio" rows="5" value={this.state.sitio}  onChange={this.onChange} ></textarea>
                        <br/>
                        <span style={{ color: "red" }}>{this.state.errors["sitio"]}</span>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="vw-question">10-¿Cuál es el aspecto más relevante del proyecto, y por el cual, considera que debe participar en el concurso?</label>
                        <textarea class="form-control "  onChange={this.onChange} id="aspecto_relevante" name="aspecto_relevante" value={this.state.aspecto_relevante} rows="5"></textarea>
                        <br/>
                        <span style={{ color: "red" }}>{this.state.errors["aspecto_relevante"]}</span>
                        </div>   
                    </div>


                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        <label><input id="aviso_privacidad" name="aviso_privacidad"  onChange={this.handleOptionChange} type="checkbox" value="true"/>{" "}He leído y acepto los términos y condiciones contenidos en el <a style={{color:"black", textDecoration:"none", fontWeight:"bolder",cursor:'pointer'}} className="avisoprivacidad" data-toggle="modal" data-target="#exampleModal" >Aviso de privacidad*</a></label>
                    
                        </div>   
                    </div>
                    <div className="row">
                        <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       
                    <label><input id="transferencia_datos" name="transferencia_datos" onChange={this.handleOptionChange} type="checkbox" value="true"/>{" "}Acepto que mis datos personales aquí proporcionados sean  transferidos a Volkswagen de México, S.A de C.V para los fines establecidos en el Aviso de Privacidad</label>
                        
                        </div>   
                    </div>
                    

                    <div className="row">
                        <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <span style={{ color: "red" }}>{this.state.errors["checkpoliticatyc"]}</span>
                        </div>   
                    </div>

                    <div className="row">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<span style={{ color: "red" }}>{this.state.respuestas["respuesta"]}</span>
											</div>
					</div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 vw-content-button ">
                        <button className="vw-button" id="registrar_proyecto" type="submit">Registrar proyecto</button>
                       
                        </div>   
                    </div>
                     
                   
           </form>




                   
                   
                </div>
               
            </section>
        )
        }
        else{
            return(
              <FormRegisterTeam/>  
            )
        }
    } else{
        return(
        <ConfirmRegister
        respuesta={this.state.respuesta}
        />
        )
        
    }
    }
    

}

