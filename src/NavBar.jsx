
import '../styles/Navbar.css';
import NavItem from './NavItem';

const NavBar = ({ currentlySelected, setCurrentlySelected }) => {
	return (
		<nav>
			<div className='container-fluid'>
				<div className='row'>
					<NavItem
						itemId={'formularz'}
						setCurrent={setCurrentlySelected}
						current={currentlySelected}
					>
						Formularz
					</NavItem>
					<NavItem
						itemId={'onas'}
						setCurrent={setCurrentlySelected}
						current={currentlySelected}
					>
						O nas
					</NavItem>
					<NavItem
						itemId={'zdjecia'}
						setCurrent={setCurrentlySelected}
						current={currentlySelected}
					>
						Galeria
					</NavItem>
					<NavItem
						itemId={'osrodek'}
						setCurrent={setCurrentlySelected}
						current={currentlySelected}
					>
						Ośrodek
					</NavItem>
					{/* <div className='col-12 col-lg-3'>
						<a href='#formularz'>Formularz</a>
					</div>
					<div className='col-12 col-lg-3'>
						<a href='#onas'>O nas</a>
					</div>
					<div className='col-12 col-lg-3'>
						<a href='#zdjecia'>Galeria</a>
					</div>
					<div className='col-12 col-lg-3'>
						<a href='#osrodek'>Ośrodek</a>
					</div> */}
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
