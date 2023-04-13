import React from "react";
import "./css/Navbar.css";
import Navbarmenu from "./Navbarmenu.js";
import Togglemenu from "./Togglemenu.js";
import Modal from "./Modal.js";

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
		let toggleMenu = [], toggleMenuModal = [];

		window.addEventListener("resize", ()=>{
			if (window.innerWidth > 600 && this.state.showToggleMenu){
				this.setState({showToggleMenu: false});
			}
		})

		if (this.state.showToggleMenu){
			toggleMenu = <Togglemenu showToggleMenu={this.state.showToggleMenu} closeToggleMenu={this.closeToggleMenu}  />;
			toggleMenuModal = <Modal showToggleMenu={this.state.showToggleMenu} closeToggleMenu={this.closeToggleMenu}  />;
			document.body.classList.add("stop-scrolling");
		}
		else{
			toggleMenu = [];
			toggleMenuModal = []
			document.body.classList.remove("stop-scrolling");
		}

		return (
			<div>
				<div id="navbar" className="darkBackground">
					<img id="logo" src={this.props.logo} />
					<Navbarmenu />
					<button id="menu" className="darkBackground" onClick={()=>{this.setState({showToggleMenu: !this.state.showToggleMenu})}}><span className="material-symbols-rounded" id="symbolHamburger">menu</span></button>	
				</div>
				<div>
					{toggleMenuModal}
					{toggleMenu}
				</div>
			</div>
		)
  }
}

export default Navbar;
