import React, {Component} from "react";



const imag= [   process.env.PUBLIC_URL + "/imagenes/banner1.jpg",
     process.env.PUBLIC_URL +"/imagenes/banner2.jpg",
    process.env.PUBLIC_URL + "/imagenes/banner3.jpg",
        process.env.PUBLIC_URL +"/imagenes/banner4.jpg"]

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
    <a className="rs"href="./"> <img src={ process.env.PUBLIC_URL +"/imagenes/facebook.jpg"} alt="facebook"></img></a>
    <a className="rs"href="./"> <img src= {process.env.PUBLIC_URL +"/imagenes/instagram.jpg"} alt="instagram"></img></a>
    <a className="rs"href="./"> <img src= { process.env.PUBLIC_URL +"/imagenes/twitter.jpg"} alt="twitter"></img></a>
    
    </div>
    <h1 className="tit"> Veterinaria Huellitas</h1>
   
    <img className="imagcab"src= {imag[this.state.i]}  />
 </div>
 ) };

}
export default Header;



