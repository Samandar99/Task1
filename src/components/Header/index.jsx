import "./style.css";
import logo from "../../imgs/d5bcfa1202660989676142d20d6e242f 1 (4).png";



function Header() {
    return (
        <div className="Header">
            <div className="Main_Header">
                <div className="box">
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                    <span>WEB NEWS WEB</span>
                </div>


                <div className="boxMenu">
                    <ul className="NavbarText">
                        <li className="N-word">
                            <a href="">
                                СПЕЦПРОЕКТ
                            </a>
                        </li>
                        <li className="N-word">
                            <a href="">
                                ОБЩЕСТВО
                            </a>
                        </li>
                        <li className="N-word">
                            <a href="">
                                ТЕХНОЛОГИИ
                            </a>
                        </li>

                        <li className="N-word">
                            <a href=""> ЭКОНОМИКА </a>
                               
                           
                        </li>
                        <li className="N-word"> <a href=""> ПОЛИТИКА </a> </li>
                        <li className="N-word"> <a href=""> СПОРТ  </a>  </li>
                    </ul>

                </div>




            </div>
        </div>
    );
}

export default Header;