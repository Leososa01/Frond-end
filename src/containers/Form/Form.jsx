import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import "./form.css";
import ventas from "../../assets/ventas11.png";

import axios from "axios";

//este es el formulario creado a partir del primer importe(hooks)

const Form = () => {
  const formulario = useRef ();
  const [error, setError] = useState(null);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const {
    
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("data", data);

    try {
      await axios.post(
        "https://api-production-e6e6.up.railway.app/api/guardar",
        data
      );
      cambiarFormularioEnviado(true);
    } catch (err) {
      console.log("Error", err.message);
      setError("Informacion enviada correctamente");
      formulario.current.rest();
    }
  };

  return (
    <div>
      <h1>Para contactarnos </h1>
      <p> {watch("")}</p>
      <form ref={formulario} onSubmit={handleSubmit(onSubmit)}>
        <div className="pin__form-img">
          <img src={ventas} alt="ventas" />
        </div>

        <div className="pin__form-h" id="contacto">
          <label> Confirmar Contraseña</label>
          <input
            type="password"
            {...register("contrasena_confirmation", {
              required: true,
              maxLength: [4,8],
            })} />
          {errors.contrasena_confirmation?.type === 'password'&& <p>El campo Nombre es requerido</p>}
          {errors.contrasena_confirmation?.type === 'maxLength'&& <p>Superaste el maximo de caracteres</p>}
        </div>

        <div className="pin__form-h" id="contacto">
          <label> Contraseña</label>
          <input
            type="password"
            {...register("contrasena", {
              required: true,
              maxLength: [4,8],
            })}
          />
          {errors.contrasena?.type === 'pasword'&& <p>El campo Nombre es requerido</p>}
          {errors.contrasena?.type === 'maxLength'&& <p>Superaste el maximo de caracteres</p>}
        </div>
        <div className="pin__form-dos">
          <label>Edad</label>
          <input
            type="number"
            {...register("edad", {
              required: true,
              maxLength: [1,2],
            })}
          />
          {errors.edad?.type === 'maxLength'&& <p>Superaste el maximo de caracteres</p>}
        </div>
        <div className="pin__form-tres">
          <label>Email</label>
          <input type="text" {...register("email", {
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          })} />
          {errors.email?.type === 'pattern'&& <p>El formato es incorrecto</p>}
        </div>

        <div className="pin__form-cuatro">
          <label>Nombre</label>
          <input type="text" {...register("nombre", {})} />
          {errors.nombre?.type === 'required'&& <p>El campo Nombre es requerido</p>}
          {errors.nombre?.type === 'maxLength'&& <p>Superaste el maximo de caracteres</p>}
        </div>

        <div className="buttom">
          <input type="submit" value="Enviar" />
        </div>

        {formularioEnviado && !error && (
                <div className="exito_div">
                  <p className="exito">Información enviada exitosamente</p>
                </div>
        )}

        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}

      </form>
    </div>
  );
};
export default Form;