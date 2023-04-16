// import React, {Component} from "react"
// import P from './P'

// const validate =values => {
//     const errors = {}
//     if(!values.name){
//         errors.name = "Este campo es obligatorio"
//     }
//     if(!values.email){
//         errors.email = "Este campo es obligatorio"
//     }
//     if(!values.edad){
//         errors.edad = "Este campo es obligatorio"
//     }
//     if(!values.contrasena){
//         errors.contrasena = "Este campo es obligatorio"
//     }
//     if(values.contrasena!== values.contrasena_confirmation){
//         errors.contrasena_confirmation = "Contraseñas no coinciden"
//     }
//     return errors
// }

// export default class form2 extends Component 
// {
//     state = {
//         errors: {// errors contendra los mensajes de errores
//             nombre: "Campo Obligatorio"
//         }, 
//     }

//     handleChange = ({target}) => {
//         const { name, value } = target
//         this.setState ({ [name]: value})
//     }
//     handleSubmit = e => {
//         e.preventDefault()
//         const { errors, ...sinErrors} = this.state
//         const result = validate (sinErrors)

//         if (Object.keys(result).length) {
//             console.log('formulario valido')
//         }
//     }


//     render() {
//         const { errors } = this.state
//         return (
//             //enviar formulario con handleSubmit
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" name="nombre" value={this.state.name} onChange={this.handleChange}/>
//                     {errors.nombre && <p>{errors.nombre}</p>}
//                     <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
//                     {errors.email && <p>{errors.email}</p>}
//                     <input type="numb" name="edad" value={this.state.edad} onChange={this.handleChange}/>
//                     {errors.numb && <p>{errors.numb}</p>}
//                     <input type="pasword" name="contrasena" value={this.state.contrasena} onChange={this.handleChange}/>
//                     {errors.contrasena && <p>{errors.contrasena}</p>}
//                     <input type="pasword" name="contrasena_confirmation" value={this.state.contrasena_confirmation} onChange={this.handleChange}/>
//                     {errors.contrasena_confirmation && <p>{errors.contrasena_confirmation}</p>}
//                     <input type="submit" value="Enviar"/>
//                 </form>
//         )
//     }










//}