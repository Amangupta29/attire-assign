import React from 'react'
import logo from '../Components/images/logo.webp';
import '../Components/Footer.css'
const Footer = () => {
  return (
		<div>
			<footer className='text-center text-lg-start bg-white text-muted'>
				<section className=''>
					<div className='container text-center text-md-start mt-5'>
						<div className='row mt-3'>
							<div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
								<img
									className='logo'
									style={{marginLeft:"40px",marginBottom:"-30px"}}
									src={logo}
								></img>
								<p>
									<h4 style={{ color: 'green' }}>" You Always Desires "</h4>
								</p>
							</div>

							<div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
								<a href='#!' className='options'>
									Home
								</a>
								<br />

								<a href='#!' className='options'>
									About Us
								</a>
								<br />

								<a href='#!' className='options'>
									Western Sets
								</a>
								<br />

								<a href='#!' className='options'>
									Dresses
								</a>
								<br />

								<a href='#!' className='options'>
									All Attires
								</a>
								<br />
								<a href='#!' className='options'>
									Return & Exchange Policies
								</a>
								<br />
								<a href='#!' className='options'>
									Terms & Conditions
								</a>
								<br />
								<a href='#!' className='options'>
									Privacy Policies
								</a>
								<br />
								<a href='#!' className='options'>
									Contact Us
								</a>
								<br />
								<div className='icons'>
									<i className='fa-brands fa-square-instagram'></i>
									<i className='fa-brands fa-youtube'></i>
									<i className='fa-brands fa-square-whatsapp'></i>
									<i className='fa-brands fa-facebook'></i>
								</div>
							</div>

							<div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
								<h6 className='text-uppercase fw-bold mb-4'>Join Our Club</h6>

								<p>
									Join our email list and get access to specials deals exclusive
									to our subscribers.
								</p>
								<label>Enter You Email Here* </label>
							  <input />
							  <br/>
								<button className='footer_btn'>Sign Up </button>
							</div>
						</div>
					</div>
				</section>

				<div
					className='text-center p-4'
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}
				>
					© 2021 Copyright:
					<a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer
