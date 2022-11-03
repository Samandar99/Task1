import './style.css'

import logo from "../../imgs/d5bcfa1202660989676142d20d6e242f 1 (4).png";
function Footer() {
    return (

        <div className="Footer">
            <div className="Main_Footer">
                <div className="box3">
                    <a href=''>
                        <img src={logo} alt="" />
                    </a>
                    <span>WEB NEWS WEB</span>
                </div>


                <div className="boxMenu">
                    <ul className="NavbarText">
                        <li className="F-word"> <a href=''> СПЕЦПРОЕКТ </a> </li>
                        <li className="F-word">  <a href=''> ОБЩЕСТВО </a> </li>
                        <li className="F-word"><a href=''> ТЕХНОЛОГИИ </a></li>

                        <li className="F-word"><a href=''> ЭКОНОМИКА </a></li>
                        <li className="F-word"><a href=''> ПОЛИТИКА </a></li>
                        <li className="F-word"><a href=''> СПОРТ </a></li>
                    </ul>

                </div>




            </div>
        </div>
    );
}

export default Footer;