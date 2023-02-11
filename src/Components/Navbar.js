/** @format */

import React from 'react';
import logo from '../Components/images/logo.webp';
import '../Components/Navbar.css';
const Navbar = () => {
	return (
		<div>
			{/* <nav className='navbar navbar-light bg-light '>
				<div className='main'> </div>

				<img className='logo' src={logo}></img>
				<div
					className=''
					style={{
						display: 'flex',
						alignItems: 'baseline',
						border: '1px solid red',
					}}
				>
					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<a className='nav-link active' href='#'>
								Active
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link disabled' href='#'>
								Disabled
							</a>
						</li>
					</ul>
				</div>
				<form className='form-inline'>
					<input
						className='form-control mr-sm-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
						style={{ borderColor: 'green' }}
					/>
				</form>
			</nav> */}
			<nav className='Nav_details'>
				<div className='container'>
					<div
						className='row'
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							alignContent: 'center',
						}}
					>
						<div className='col-md-4'>
							{' '}
							<img className='logo' src={logo}></img>
						</div>
						<div className='col-md-3'>
							<div style={{ marginLeft: '210px' }}>
								<span style={{ display: 'inline', marginLeft: '5px' }}>
									Login
								</span>
								<i
									style={{ display: 'inline', marginLeft: '5px' }}
									className='fa-regular fa-circle-user'
								></i>
								<i
									style={{ display: 'inline', marginLeft: '5px' }}
									className='fa-solid fa-bag-shopping'
								></i>
							</div>

							<form className='form-inline' style={{ borderColor: 'green' }}>
								<input
									className='form-control mr-sm-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
									style={{ borderColor: 'green' }}
								/>
							</form>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<div
								className=''
								style={{
									display: 'flex',
									alignItems: 'baseline',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<div className='flexing'>
									<a href='#'>Home</a>

									<a href='#'>New in </a>

									<a href='#'>Shop</a>

									<a href='#'>About Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className='row'>
				<div className='col-lg-3'> </div>
				<div className='col-lg-6'>
					<span className='content'>About Us</span>
					<p className='content-2'>
						AttireIND is an apparel customisation brand that offers high quality
						products at affordable prices. We are committed to providing our
						customers with the best service possible. The goal is to provide the
						highest level of customer satisfaction through outstanding product
						selection with , customisation option, competitive pricing, and
						exceptional customer service.
					</p>

					<p className='content-2'>
						"Our mission is to provide our customers with stylish clothing that
						fits their lifestyle and DESIRES!!"
					</p>
					<button className='click'>Any Queries ? </button>

					<div className='col-lg-3'></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
