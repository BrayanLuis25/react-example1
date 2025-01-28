import React, {Component} from "react";


const imag= ["/imagenes/banner1.jpg","/imagenes/banner2.jpg","/imagenes/banner3.jpg","/imagenes/banner4.jpg"]

class Header extends Component{



    constructor(props){

        super(props);
        this.state={
            i:0,
        };

    };
    state= {i:0};


render(){
    
setTimeout(() => this.setState({
    i:Math.floor(Math.random()*imag.length)
}),1500);

 return (

 <div >
   <div className="prs" >
    <a className="rs"href="#"> <img src="/imagenes/facebook.jpg"></img></a>
    <a className="rs"href="#"> <img src="/imagenes/instagram.jpg"></img></a>
    <a className="rs"href="#"> <img src="/imagenes/twitter.jpg"></img></a>
    
    </div>
    <h1 className="tit"> Veterinaria Huellitas</h1>
    <img className="imagcab"src= {imag[this.state.i]}  />
 </div>
 ) };

}
export default Header;



