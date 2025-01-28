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
  <label for="textuser">Usuario:</label>
  <input id="textuser"type="text" placeholder="Usuario" required/>
</div>
<div>
  <label for="passwor">Contraseña:</label>
  <input id="passwor"type="password" placeholder="ingrese la clave" required/>
</div>
<div>

  <label >Tipo de Documento:</label>
  <select >
  
    <option >Dni</option>
    <option >Ce</option>
    <option>Pasaporte</option>
  </select>
  <div>
    <label for="textdocumento">N° de Documento:</label>
        <input id="textdocumento" type="text"  placeholder="Ingrese 9 dígitos" required/>
  </div>
</div>
<div>
  <label  id="textname">Nombre:</label>
  <input  for="textname" type="text" required/>
</div>
<div>
  <label for="textapellido">Apellidos:</label>
  <input type="text"  id="textapellido" required/>
</div>
<div>
  <label for="teltelefono"> Teléfono:</label>
  <input id="teltelefono"type="tel" pattern="[0-9]{9}"required/>
</div>

<div>
  <label for="emailmail">Correo:</label>
  <input id="emailmail" type="email" required/>
</div>
<center>
  <br></br>

  <div className="button">
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