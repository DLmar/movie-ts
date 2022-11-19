import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/'}>
                <div className={'imageAndSiteName'}>
                    <img
                        src="../../images/logo_img.jpg"
                        alt="MovieImg"/>
                </div>
            </Link>
        </div>
    );
};

export {Header};
