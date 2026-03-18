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
<<<<<<< HEAD
  <label for="user">Usuario:</label>
  <input id="user"type="text" placeholder="Ingrese su usuario" name="usuario" required  />
</div>
<div>
  <label for="passord ">Contraseña:</label>
  <input id ="passowrd "type="password" placeholder="ingrese la clave" name="password"required />
</div>
<div>

  <label>Tipo de Documento:</label>
=======
  <label for="textuser">Usuario:</label>
  <input id="textuser"type="text" placeholder="Usuario" required/>
</div>
<div>
  <label for="passwor">Contraseña:</label>
  <input id="passwor"type="password" placeholder="ingrese la clave" required/>
</div>
<div>

  <label >Tipo de Documento:</label>
>>>>>>> 08e1780b7d52298b05a94a313a530ea3e1d06083
  <select >
  
    <option >Dni</option>
    <option >Ce</option>
    <option>Pasaporte</option>
  </select>
  <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 08e1780b7d52298b05a94a313a530ea3e1d06083
<button className="move" type="submit">Registrar </button>
<button type="reset">Cancelar</button>

</div>
<<<<<<< HEAD

=======
>>>>>>> 08e1780b7d52298b05a94a313a530ea3e1d06083
</center>
</form>
</div>
</center>

<<<<<<< HEAD

);
};
 }
=======
);
};
}
>>>>>>> 08e1780b7d52298b05a94a313a530ea3e1d06083
export default Formulario;