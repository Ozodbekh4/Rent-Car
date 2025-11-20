import Navbar from '../components/Navbar'
import '../scss/Header/Header.scss'
import Car from '../assets/img/car.png'
import Google from '../assets/img/google.png'
import Appstore from '../assets/img/appstore.png'

function Header() {
	return (
		<header className='header'>
			<Navbar />

			<div className="car-img">
				<img src={Car} alt="" />
			</div>

			<div className="header-main">
				<h1>
					Find, book and <br /> rent a car 					<span>
						Easily
						<svg width="134" height="19" viewBox="0 0 134 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M133.47 1.55529C56.1979 -3.4811 22.9228 5.02254 0.58496 8.54261C0.237805 11.48 0.36965 13.8959 -7.34608e-05 18.5626C59.8952 -0.893031 99.8252 2.30424 133.425 3.54363C133.439 3.17416 133.429 2.6637 133.47 1.55529Z" fill="#1572D3" />
						</svg>
					</span>
				</h1>

				<p>Get a car wherever and whenever you <br /> need it with your IOS and Android device.</p>

				<div className="apps">
					<img src={Google} alt="" />
					<img src={Appstore} alt="" />
				</div>

			</div>

			<div className="header-bot">

				<div className="card1">
					<div className="left">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.9998 17.9067C18.2973 17.9067 20.1598 16.0442 20.1598 13.7467C20.1598 11.4492 18.2973 9.58667 15.9998 9.58667C13.7023 9.58667 11.8398 11.4492 11.8398 13.7467C11.8398 16.0442 13.7023 17.9067 15.9998 17.9067Z" stroke="#747474" stroke-width="2" />
							<path d="M4.82709 11.32C7.45376 -0.226659 24.5604 -0.213325 27.1738 11.3333C28.7071 18.1067 24.4938 23.84 20.8004 27.3867C18.1204 29.9733 13.8804 29.9733 11.1871 27.3867C7.50709 23.84 3.29376 18.0933 4.82709 11.32Z" stroke="#747474" stroke-width="2" />
						</svg>
					</div>
					<div className="right">
						<h4>Location</h4>
						<p>Search your location</p>
					</div>
				</div>

				<div className="card2">
					<div className="left">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6665 2.66667V6.66667" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M21.3335 2.66667V6.66667" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M4.6665 12.12H27.3332" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M28 11.3333V22.6667C28 26.6667 26 29.3333 21.3333 29.3333H10.6667C6 29.3333 4 26.6667 4 22.6667V11.3333C4 7.33334 6 4.66667 10.6667 4.66667H21.3333C26 4.66667 28 7.33334 28 11.3333Z" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M20.9264 18.2667H20.9384" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M20.9264 22.2667H20.9384" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M15.9938 18.2667H16.0058" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M15.9938 22.2667H16.0058" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M11.0592 18.2667H11.0712" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M11.0592 22.2667H11.0712" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<div className="right">
						<h4>Pickup date</h4>
						<p>Tue 15 Feb, 09:00</p>
					</div>
				</div>

				<div className="card3">
					<div className="left">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6665 2.66667V6.66667" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M21.3335 2.66667V6.66667" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M4.6665 12.12H27.3332" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M28 11.3333V22.6667C28 26.6667 26 29.3333 21.3333 29.3333H10.6667C6 29.3333 4 26.6667 4 22.6667V11.3333C4 7.33334 6 4.66667 10.6667 4.66667H21.3333C26 4.66667 28 7.33334 28 11.3333Z" stroke="#747474" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M20.9264 18.2667H20.9384" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M20.9264 22.2667H20.9384" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M15.9938 18.2667H16.0058" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M15.9938 22.2667H16.0058" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M11.0592 18.2667H11.0712" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M11.0592 22.2667H11.0712" stroke="#747474" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<div className="right">
						<h4>Return date</h4>
						<p>Thu 16 Feb, 11:00</p>
					</div>
				</div>

				<button className='btn-1'>Search</button>

			</div>

		</header>
	)
}

export default Header
