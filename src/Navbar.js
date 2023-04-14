import React from "react";
import "./css/Navbar.css";
import Navbarmenu from "./Navbarmenu.js";
import Togglemenu from "./Togglemenu.js";
import Modal from "./Modal.js";
import Toggle from "./Toggle.js";

class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showToggleMenu: false
		};
		this.closeToggleMenu = this.closeToggleMenu.bind(this);
	}

	closeToggleMenu(){
		this.setState({showToggleMenu: false});
	}

  render(){
		let toggleMenu = [];

		window.addEventListener("resize", ()=>{
			if (window.innerWidth > 600 && this.state.showToggleMenu){
				this.setState({showToggleMenu: false});
			}
		})

		if (this.state.showToggleMenu){
			toggleMenu = <Toggle closeToggleMenu={this.closeToggleMenu} />;
			document.body.classList.add("stop-scrolling");
		}
		else{
			toggleMenu = [];
			document.body.classList.remove("stop-scrolling");
		}

		return (
			<div id="fixedItem">
				<div id="navbar" className="darkBackground">
					<a href="#lowerApp"><img id="logo" src={this.props.logo} onClick={()=>{this.closeToggleMenu()}}/></a>
					<Navbarmenu />
					<button id="menu" className="darkBackground" onClick={()=>{this.setState({showToggleMenu: !this.state.showToggleMenu})}}><span className="material-symbols-rounded" id="symbolHamburger">menu</span></button>	
				</div>
				<div id="toggle">
					{toggleMenu}
				</div>
			</div>
		)
  }
}

export default Navbar;
