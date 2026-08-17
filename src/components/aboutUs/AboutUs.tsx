import { useState, useEffect } from "react"
import "./AboutUs.css"
import placeholder from "../../assets/imagen.jpeg"

const aboutUsImages = Array.from({ length: 13 }, (_, index) => index);

export function AboutUs() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % aboutUsImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="nosotros" id="nosotros">
                <div className="nosotros__container">

                    {/* Imagen - carrusel */}
                    <div className="nosotros__image">
                        {aboutUsImages.map((_, index) => (
                            <img
                                key={index}
                                src={placeholder}
                                alt=""
                                className={`nosotros__slide${activeIndex === index ? " nosotros__slide--active" : ""}`}
                            />
                        ))}
                    </div>

                    {/* Contenido */}
                    <div className="nosotros__content">
                        <h2 className="nosotros__title">
                            NOSOTROS
                        </h2>

                        <div className="nosotros__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <a href="#equipo" className="nosotros__button">
                            Conoce nuestro equipo
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
