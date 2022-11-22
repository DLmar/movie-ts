import { Link } from "react-router-dom";
import './Header.css'
import {Search} from "./Search/Search";

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'image'}>
                        <img src="https://agencia13.es/wp-content/uploads/2021/07/logo-de-cine.jpg" alt="movie-logo"/>
                </div>
            </Link>
            <div className={'search'}>
                <Search/>
            </div>
        </div>
    );
};

export {Header};
