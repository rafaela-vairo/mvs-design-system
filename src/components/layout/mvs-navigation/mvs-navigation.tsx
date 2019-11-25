import { Component, h, State } from '@stencil/core';


@Component({
    tag: 'mvs-navigation',
    styleUrl: 'mvs-navigation.scss',
    shadow: true
})

export class MvsNavigation {

	@State() side:boolean = false;

	toggle() {
		this.side = !this.side;
		document.body.style.transition = '0.5s';
		if (this.side) {
			document.body.style.marginLeft = '300px'; 
			document.body.parentElement.style.overflowY = 'hidden'
		} else {
			document.body.style.marginLeft = '0px'; 
			document.body.parentElement.style.overflowY = 'auto'
		}
	}    

    render() {
        return (
            <div>
            	<div class={"sidenav " + (this.side && "active")}>
            		<div class="sidenav-social">
            			<a class="closebtn btn" onClick={this.toggle.bind(this)}>&times;</a>
            		</div>
            		<div class="sidenav-content">
            			<a href="#">About</a>
						<a href="#">Services</a>
						<a href="#">Clients</a>
						<a href="#">Contact</a>
            		</div>
				</div>
				<div class={(this.side && "content")}></div>
                <span class="btn" onClick={this.toggle.bind(this)}>&#9776; open</span>
            </div>
        );
    }
}
