import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'mvs-navigation',
    styleUrl: 'mvs-navigation.scss',
    shadow: true
})

export class MvsNavigation {

	@State() side:boolean = false;
	@Prop() title: string = 'Lorem ipsum'; 

	@Event() onShowSidenav: EventEmitter
	showSidenav() {
		this.onShowSidenav.emit();
	}

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
        	<nav>
        		<div>
        			<span class="icon-menu" onClick={this.showSidenav.bind(this)}>menu</span>
        		</div>
        		<div class="title">
        			<mvs-title level="t6" color="light">
        				{this.title}
        			</mvs-title>
        		</div>
        	</nav>
        );
    }
}
