import "./footer.scss"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <span>Макс Покровский</span>
            <Link to="https://github.com/MakcPokrovskiy">©GitHub</Link>
        </div>
    )
}

export default Footer