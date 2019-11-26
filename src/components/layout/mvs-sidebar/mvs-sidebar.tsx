import { Component, h, Listen, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-sidebar',
    styleUrl: 'mvs-sidebar.scss',
    shadow: true,
})
export class MvsSidebar {

	@Prop() sidenav: boolean;

    @Listen('onShowSidenav', { target: 'document' })
	showSidenav() {
		this.sidenav = true;
		document.body.style.transition = '0.5s';
		document.body.style.marginLeft = 'calc((100vw / 6) * 2 + 64px)'; 
		document.body.parentElement.style.overflowY = 'hidden'
	}

	hideSidenav() {
		this.sidenav = false;
		document.body.style.transition = '0.5s';
		document.body.style.marginLeft = '0px'; 
		document.body.parentElement.style.overflowY = 'auto'
	}

    render() {
        return (
        	<div>
	            <div class={"sidenav " + (this.sidenav && "sidenav-active")}>
	        		<div class="actions">
	        			<div class="social">
		        			<span onClick={this.hideSidenav.bind(this)}>close</span>
		        			<span onClick={this.hideSidenav.bind(this)}>close</span>
		        			<span onClick={this.hideSidenav.bind(this)}>close</span>
		        			<span onClick={this.hideSidenav.bind(this)}>close</span>
		        		</div>
	        			<span onClick={this.hideSidenav.bind(this)}>close</span>
	        		</div>
	        		<div class="content">
	        			<a href="#">About</a>
						<a href="#">Services</a>
						<a href="#">Clients</a>
						<a href="#">Contact</a>
	        		</div>
	        	</div>
	        	<div class={(this.sidenav && "content")}></div>
	        </div>
        );
    }
}
