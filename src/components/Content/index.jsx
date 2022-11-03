import "./style.css";
import foto from "../../imgs/person.png";
import foto1 from "../../imgs/obama.png";
import foto2 from "../../imgs/colin.png";
import foto3 from "../../imgs/run.png";

function Content() {
    return (
        <div className="ContentBox">

            <div className="box-c">

                <a href="">

                    <img src={foto} alt="" className="box-Right" />
                </a>
                <a href="">
                    <div className="box-Left">
                        <h3>A Midwestern capital is marching for racial justice — and getting</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus  sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis.. </p>

                    </div>
                </a>

            </div>

            <div className="box-c">
                <a href="">
                    <img src={foto1} alt="" className="box-Right" />
                </a>
                <a href="">
                    <div className="box-Left">
                        <h3>Zambian president pardons gay couple sentenced to 15 years</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis. </p>
                    </div>
                </a>

            </div>
            <div className="box-c">
                <a href="">
                    <img src={foto2} alt="" className="box-Right" />
                </a>
                <a href="">
                    <div className="box-Left">
                        <h3>Colin Powell calls Trump a liar, says he skirts the Constitution...</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis. </p>
                    </div>
                </a>
            </div>
            <div className="box-c">
                <a href="">
                    <img src={foto3} alt="" className="box-Right" />
                </a>
                <a href="">
                    <div className="box-Left">
                        <h3>Is working from home wearing you out? Do this to avoid burnout</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis. </p>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default Content;
