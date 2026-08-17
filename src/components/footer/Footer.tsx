import "./Footer.css"
import Direccion from "../../assets/icons/map-pin.png"
import Telefono from "../../assets/icons/phone.png"
import Correo from "../../assets/icons/mail.png"
import Horario from "../../assets/icons/clock.png"
import Whatsapp from "../../assets/icons/whatsapp.png"
import logo from "../../assets/Logo.png"

const contactInfo = [
  {
    icon: Direccion,
    title: "DIRECCIÓN",
    text: "Direccion",
  },
  {
    icon: Telefono,
    title: "TELÉFONO",
    text: "123 123 1234",
  },
  {
    icon: Correo,
    title: "CORREO",
    text: "contacto@abogadosyasociados.com",
  },
  {
    icon: Horario,
    title: "HORARIOS DE ATENCIÓN",
    text: "Lunes a Viernes 8:00 a.m. – 6:00 p.m.",
  },
];

export function Footer() {
    return (
        <>
            <section className="contact">
                <div className="contact__container">

                    {/* CONTENIDO IZQUIERDO */}
                    <div className="contact__left">
                        <span className="contact__eyebrow">
                            CONTÁCTENOS
                        </span>

                        <h2 className="contact__title">
                            ESTAMOS PARA
                            <br />
                            AYUDARTE
                        </h2>

                        <p className="contact__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <div className="contact__coverage">
                            <div className="contact__coverage-icon">
                                <img src={logo} alt="Logo" />
                            </div>

                            <p>
                                <strong>Cobertura:</strong>{" "}
                                Atención en todo el país
                            </p>
                        </div>
                    </div>

                    {/* INFORMACIÓN DERECHA */}
                    <div className="contact__right">
                        {contactInfo.map((item, index) => (
                            <div
                                className="contact__item"
                                key={index}
                            >
                                <div className="contact__icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>

                                <div className="contact__item-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* PARTE INFERIOR */}
                <div className="contact__bottom">

                    <div className="contact__logo">
                        <div className="contact__logo-text">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>

                    <div className="contact__social">
                        <span>SÍGUENOS</span>

                        {/* <a href="#" aria-label="LinkedIn">
                            <img src={Linkedin} alt="LinkedIn" />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <img src={Instagram} alt="Instagram" />
                        </a>

                        <a href="#" aria-label="Facebook">
                            <img src={Facebook} alt="Facebook" />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <img src={Twitter} alt="Twitter" />
                        </a> */}

                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <img src={Whatsapp} alt="WhatsApp" />
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
