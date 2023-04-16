import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./form.css";
import ventas from "../../assets/ventas11.png";

import axios from "axios";
import { Component } from "react";
import _default from "react-hook-form/dist/utils/get";
import { render } from "react-dom";

//este es el formulario creado a partir del primer importe(hooks)

const Form = () => {
  
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const validate = values => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = "Este campo es obligatorio";
    }
    if (!values.edad) {
      errors.edad = "Este campo es obligatorio";
    }
    if (!values.email) {
      errors.email = "Este campo es obligatorio";
    }
    if (!values.contrasena) {
      errors.contrasena = "Este campo es obligatorio";
    }
    if (!values.contrasena_confirmation) {
      errors.contrasena_confirmation = "Este campo es obligatorio";
    }
    return errors;
  }

  
     state = {
         errors: {// errors contendra los mensajes de errores
             nombre: "Campo Obligatorio",
             edad: "Campo Obligatorio",
             email: "Campo Obligatorio",
             contrasena: "Campo Obligatorio",
             contrasena_confirmation: "Campo Obligatorio"
         }
     }

     handleChange = ({target}) => {
        const { name, value } = target
        this.setState ({ [name]: value})
    };
    // eslint-disable-next-line no-undef
    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...sinErrors} = this.state
        const result = validate (sinErrors)

        if (Object.keys(result).length) {
            console.log('formulario valido')
            return this.setState;{errors : result} 
                                    };

render() {
  const { errors } = this.state;
        }


  return (
    <div className="form">
      <form onSubmit={this(handleSubmit)}>
        <div className="pin__form-cuatro-group">
          <label>Nombre</label>
          <input type="text" className="nombre" id="nombre" />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        <div className="pin__form-dos">
          <label>Edad</label>
          <input type="numb" className="edad" id="edad" />
          {errors.edad && <p>{errors.edad.message}</p>}
        </div>
        <div className="pin__form-tres">
          <label>Email</label>
          <input type="text" className="email" id="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="pin__form-h">
          <label>Contraseña</label>
          <input type="pasword" className="pin__form-tres" id="contrasena" />
          {errors.contrasena && <p>{errors.contrasena.message}</p>}
        </div>
        <div className="pin__form-h">
          <label>Confirmar Contraseña</label>
          <input type="pasword" className="contrasena_confirmation" id="contrasena_confirmation" />
          {errors.contrasena_confirmation && <p>{errors.contrasena_confirmation.message}</p>}
        </div>
        <div className="utton">
           <input type="submit" value="Enviar" />{" "}
         </div>
         

         {formularioEnviado && !errors && (
          <div>
            <p>Información enviada exitosamente</p>
          </div>
        )}

        {errors && (
          <div>
            <p>{errors}</p>
          </div>
        )}
      </form>
    </div>
  
    
// 

  // return (
  //   <div>
  //     <h1>Para contactarnos </h1>
  //     <p> {watch("")}</p>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <div className="pin__form-img">
  //         <img src={ventas} alt="ventas" />
  //       </div>

  //       <div className="pin__form-h" id="contacto">
  //         <label> Confirmar Contraseña</label>
  //         <input
  //           type="password"
  //           {...register("contrasena_confirmation", {
  //             required: true,
  //             maxLength: 10,
  //           })}
  //         />
  //       </div>

  //       <div className="pin__form-h" id="contacto">
  //         <label> Contraseña</label>
  //         <input
  //           type="password"
  //           {...register("contrasena", {
  //             required: true,
  //             maxLength: 10,
  //           })}
  //         />
  //       </div>
  //       <div className="pin__form-dos">
  //         <label>Edad</label>
  //         <input
  //           type="number"
  //           {...register("edad", {
  //             required: true,
  //           })}
  //         />
  //       </div>
  //       <div className="pin__form-tres">
  //         <label>Email</label>
  //         <input type="text" {...register("email", {})} />
  //         {errors.email}
  //       </div>

  //       <div className="pin__form-cuatro">
  //         <label>Nombre</label>
  //         <input type="text" {...register("nombre", {})} />
  //       </div>

  //       <div className="buttom">
  //         <input type="submit" value="Enviar" />{" "}
  //       </div>

  //       {formularioEnviado && !error && (
  //         <div>
  //           <p>Información enviada exitosamente</p>
  //         </div>
  //       )}

  //       {error && (
  //         <div>
  //           <p>{error}</p>
  //         </div>
  //       )}
  //     </form>
  //   </div>
  // );
      
        )};
}
        export default Form
