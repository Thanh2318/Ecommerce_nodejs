import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import "./NavBar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const NavBar = () => {
    const products = useSelector(state => state.cart.products);
    const [open, setOpen] = useState(false);
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="img/vietnam.png" alt=""/>
                        <KeyboardArrowDownIcon/>
                    </div>

                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/5">Children</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className="link" to="/">27 STORE</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">Store</Link>
                    </div>

                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            { open && <Cart/> }
        </div>
    );
}

export default NavBar;