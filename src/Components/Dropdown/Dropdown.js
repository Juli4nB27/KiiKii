import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';


const Dropdown = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
  
	const styles = {
		popUpBtn: {
			textDecoration: 'none',
			color: 'black',
			fontSize: 18,
			fontWeight: 'bold',
			textTransform: 'lowercase',
      fontfamily: 'JetBrains Mono'
		},
		upperText: {
			textTransform: 'uppercase',
		},
		link: {
			color: 'black',
			fontSize: 18,
			textDecoration: 'none',
		},
	};

	return (
		<div>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Categorías
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem>
					<Link to='/category/1' style={styles.link}>
            hoodies
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/2' style={styles.link}>
            remeras
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/3' style={styles.link}>
            jeans
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Dropdown;

