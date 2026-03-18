import React, { Component } from "react";

class Formulario extends Component {
  render() {
    return (


<center>
  <br></br>
  <div className="div-usua">
  
<form className="marco" >

<h1 className="tit">Registro de Empleado</h1>

<div >
  <label for="user">Usuario:</label>
  <input id="user"type="text" placeholder="Ingrese su usuario" name="usuario" required  />
</div>
<div>
  <label for="passord ">Contraseña:</label>
  <input id ="passowrd "type="password" placeholder="ingrese la clave" name="password"required />
</div>
<div>

  <label>Tipo de Documento:</label>
  <select >
  
    <option >Dni</option>
    <option >Ce</option>
    <option>Pasaporte</option>
  </select>
  <div>
     <label>N° de Documento:</label>
        <input type="text" name="tipoDocumento" placeholder="Ingrese 9 dígitos" required />
   </div>
</div>
<div>
  <label for ="name">Nombre:</label>
  <input type="text" id= "name" name="name" required />
</div>
<div>
  <label>Apellidos:</label>
  <input type="text" name="apellidos"required/>
</div>
<div>
  <label for="telefono">Teléfono:</label>
  <input type="tel" id="telefono" name="telefono" required />
</div>

<div>
  <label for="correo">Correo:</label>
  <input type="email" id ="correo" name ="correo" required />
</div>

<center>
  <br></br>

  <div className="sbutton">
<button className="move" type="submit">Registrar </button>
<button type="reset">Cancelar</button>

</div>

</center>
</form>
</div>
</center>


);
};
 }
export default Formulario;