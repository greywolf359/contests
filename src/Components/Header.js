import React from 'react';

const Header = ({message})=>{
	return <h2 className = "text-center">{message}</h2>
}
Header.defaultProps = {
	message: 'default header Message!!!'
}
Header.propTypes = {
	message: React.PropTypes.string
}

export default Header;