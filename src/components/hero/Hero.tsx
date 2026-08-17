import "./Hero.css"
import placeholder from "../../assets/imagen.jpeg"

export function Hero() {
    return (
        <>
            <section className="hero" id="inicio">
                <div className="hero__top-line"></div>
                <div className="hero__left-line"></div>

                <div className="hero__container">

                    <div className="hero__content">
                        <h1 className="hero__title">
                            EXCELENCIA JURÍDICA,
                            <br />
                            ESTRATEGIA Y
                            <br />
                            <span>CONFIANZA</span>
                        </h1>

                        <div className="hero__bottom">
                            <div className="hero__divider-top"></div>

                            <div className="hero__text">
                                <div className="hero__divider-right"></div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                            <div className="hero__button-container">
                                <a href="#servicios" className="hero__button">
                                    Conoce nuestros servicios
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="hero__image">
                    <img src={placeholder} alt="" />
                </div>
            </section>
        </>
    )
}
