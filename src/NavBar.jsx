import { BrowserView, MobileView } from 'react-device-detect';
import '../styles/Navbar.css';
import NavItem from './NavItem';
import SvgIcon from './SvgIcon';
import { useRef } from 'react';
const NavBar = ({ currentlySelected, setCurrentlySelected }) => {
	const mobileMenuRef = useRef(null);
	const handleMobileMenu = () => {
		const mobileMenu = mobileMenuRef.current;
		mobileMenu.classList.toggle('active');
	};
	return (
		<>
			<BrowserView>
				<nav>
					<div className='container-fluid'>
						<div className='row'>
							<NavItem
								className={`col-12 col-lg-3`}
								itemId={'formularz'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								Formularz
							</NavItem>
							<NavItem
								className={`col-12 col-lg-3`}
								itemId={'onas'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								O nas
							</NavItem>
							<NavItem
								className={`col-12 col-lg-3`}
								itemId={'zdjecia'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								Galeria
							</NavItem>
							<NavItem
								className={`col-12 col-lg-3`}
								itemId={'osrodek'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								Ośrodek
							</NavItem>
						</div>
					</div>
				</nav>
			</BrowserView>
			<MobileView>
				<nav style={{ position: 'fixed' }}>
					<div
						className='container-fluid'
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<SvgIcon
							name='menu-icon'
							id='menu-icon'
							style={{ position: 'absolute', left: 0 }}
							handleClick={handleMobileMenu}
						/>
						<div
							ref={mobileMenuRef}
							id='mobile-menu-content'
							style={{
								display: 'block',
								visibility: 'hidden',
								width: '0px',
								height: '0px',
							}}
						>
							<NavItem
								className={`mobile-menu-item`}
								itemId={'formularz'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								Formularz
							</NavItem>
							<NavItem
								className={`mobile-menu-item`}
								itemId={'onas'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								O nas
							</NavItem>
							<NavItem
								className={`mobile-menu-item`}
								itemId={'zdjecia'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								Galeria
							</NavItem>
							<NavItem
								className={`mobile-menu-item`}
								itemId={'osrodek'}
								setCurrent={setCurrentlySelected}
								current={currentlySelected}
							>
								Ośrodek
							</NavItem>
						</div>
					</div>
				</nav>
			</MobileView>
		</>
	);
};
export default NavBar;
