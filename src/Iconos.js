import React, { Component } from "react";

const imgrs = ["/imagenes/facebook.jpg", "/imagenes/instagram.jpg", "/imagenes/twitter.jpg"];

class Iconos extends Component {
  render() {
    const rs = imgrs.map((origen, zoom) => (
      <img class={zoom} className="prs" src={origen}  />
    ));

    return (
     <div>
        {rs}
      </div>
    );
  }
}

export default Iconos;