import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return(
        <div className="categories">
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/8387834/pexels-photo-8387834.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className="link" to={"/products/5"}>Sale</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1554613/pexels-photo-1554613.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className="link" to={"/products/3"}>Shoes</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to={"/products/4"}>New Seasion</Link>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to={"/products/2"}>Men</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to={"/products/6"}>Accessories</Link>
                    </button>
                </div>
            </div>
            
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to={"/products/1"}>Women</Link>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Categories;