import logo from "../images/logo.png";

export default function Header() {
    return (
        <div className="header">
            {/* <img 
                className="logo"
                src={logo}
                alt="green logotype"
                width="120"
            /> */}
            <a href="/" className="logo-text">
                <span className="logo-name">B</span>
                eauBe
            </a>
            <ul className="navigation">
                <li><a href="/">About</a></li>
                <li><a href="#prices">Prices</a></li>
                <li><a href="#works">Our works</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>       
            <button>Order</button>
        </div>
        
    )
}