import React, {Component} from "react";


const imag= ["/imagenes/banner1.jpg","/imagenes/banner2.jpg","/imagenes/banner3.jpg","/imagenes/banner4.jpg"]

class Header extends Component{



    constructor(props){

        super(props);
<<<<<<< HEAD
        
=======
>>>>>>> 08e1780b7d52298b05a94a313a530ea3e1d06083
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
<<<<<<< HEAD
    <a className="rs"href="./"> <img src="imagenes/facebook.jpg" alt="facebook"></img></a>
    <a className="rs"href="./"> <img src="imagenes/instagram.jpg" alt="instagramk"></img></a>
    <a className="rs"href="./"> <img src="imagenes/twitter.jpg" alt="twitter"></img></a>
    
    </div>
    <h1 className="tit"> Veterinaria Huellitas</h1>
   
=======
    <a className="rs"href="#"> <img src="/imagenes/facebook.jpg"></img></a>
    <a className="rs"href="#"> <img src="/imagenes/instagram.jpg"></img></a>
    <a className="rs"href="#"> <img src="/imagenes/twitter.jpg"></img></a>
    
    </div>
    <h1 className="tit"> Veterinaria Huellitas</h1>
>>>>>>> 08e1780b7d52298b05a94a313a530ea3e1d06083
    <img className="imagcab"src= {imag[this.state.i]}  />
 </div>
 ) };

}
export default Header;



