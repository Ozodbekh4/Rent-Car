import { useState } from 'react';
import '../scss/Navbar/Navbar.scss';
import Button from './Button';
import Logo from '../assets/img/logo.png'


function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleActive = e => {
		const li = e.currentTarget;

		document.querySelectorAll('.navbar ul li').forEach(item => {
			item.classList.remove('active-blink');
		});

		li.classList.add('active-blink');
	};

	return (
		<nav className={`navbar ${isOpen ? 'open' : ''}`}>
			<h1 className='logo'>
				<img src={Logo} alt='' /> RENTCARS
			</h1>

			{/* Hamburger */}
			<div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* Nav Links */}
			<ul>
				{/* {links.map(item => (
					<li key={item.id} onClick={handleActive}>
						<a href='#'>{item.text}</a>
					</li>
				))} */}
				<li onClick={handleActive}>
					<a href='#'>Become a renter</a>
				</li>
				<li onClick={handleActive}>
					<a href='#'>Rental deals</a>
				</li>
				<li onClick={handleActive}>
					<a href='#'>How it work</a>
				</li>
				<li onClick={handleActive}>
					<a href='#'>Why choose us</a>
				</li>
			</ul>

			<div className='buttons'>
				<Button text='Sign In' type='secondary' />
				<Button text='Sign Up' type='primary' />
			</div>
		</nav>
	);
}

export default Navbar;
