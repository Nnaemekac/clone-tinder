import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }){
	const history = useHistory();
	return(
			<div className="header">
				{backButton ? (
					<IconButton onClick={()=> history.replace(backButton)}>
						<ArrowBackIosIcon fontSize="large" className="header__icon" />
					</IconButton>
					): (
						<IconButton>
							<PersonIcon font-size="large" className="header__icon" />
						</IconButton>
						
					)}

				
				<Link to="/" >
					<img
						className="header__logo"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kuUJ33NGbosq_TipWJOLVuIJx5DWgKbztg&usqp=CAU"
						alt=""
					/>
				</Link>
				<Link to="/chat">
					<IconButton>
						<ForumIcon className="header__icon"/>
					</IconButton>
				</Link>
				
				
				
			</div>
		)
}
export default Header;