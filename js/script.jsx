var Navbar = React.createClass({
	change(page) {
		this.props.change(page);
	},
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">{this.props.brand}</a>
					</div>
					<div id="navbar">
						<ul className="nav navbar-nav">
							<li className={(this.props.currentPage === 'home' ? 'active' : '')}><a href="#" onClick={this.change.bind(this, 'home')}>HOME</a></li>
							<li className={(this.props.currentPage === 'about' ? 'active' : '')}><a href="#" onClick={this.change.bind(this, 'about')}>ABOUT</a></li>
							<li className={(this.props.currentPage === 'contact' ? 'active' : '')}><a href="#" onClick={this.change.bind(this, 'contact')}>CONTACT</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});
var Jumbotron = React.createClass({
	// getDefaultProps() {
	// 	return {
	// 		heading: 'Hello World',
	// 		text: 'Default Text'
	// 	}
	// },
	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<h2>{this.props.heading}</h2>
					<p className="lead">{this.props.text}</p>
					<p><a className="btn btn-lg btn-primary">Click Here</a></p>
				</div>
			</div>
		);
	}
});
var Page = React.createClass({
	render() {
		var pageContent;
		if(this.props.currentPage === 'home') {
			pageContent = "This is the home page";			 
		} else if (this.props.currentPage === 'about') {
			pageContent = "This is the about page";		
		} else if (this.props.currentPage === 'contact') {
			pageContent = "This is the contact page";		
		} else {
			pageContent = "This is the home page";	
		}
		return (
			<div className="container">
				<h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
				{pageContent}
			</div>
		);
	}
});
var Theme = React.createClass({
	handleChange(page) {
		this.setState({
			currentPage : page
		});
	},
	getInitialState() {
		return {
			currentPage : 'contact'	
		}
	},
	getDefaultProps() {
		return {
			brand : 'BrandName',
			heading : "Hello I'm React! It's nice to get to know you!",
			text: 'This is a simple Twitter Bootstrap theme made with React.'
		}
	},
	render() {
		var jumbotron;
		if (this.state.currentPage === 'home') {
			jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text} />
		} else {
			jumbotron = '';
		}
		return (
			<div>
				<Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
				{jumbotron}
				<Page currentPage={this.state.currentPage} />
			</div>
		);
	}
});
ReactDOM.render(
	<Theme />,
	document.getElementById('root')
);

