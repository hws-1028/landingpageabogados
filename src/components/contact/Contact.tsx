import "./Contact.css"

interface ContactProps {
    onOpenConsulta?: () => void
}

export function Contact({ onOpenConsulta }: ContactProps) {
    return (
        <section className="contact-section" id="contacto">
            <div className="contact-cta">
                <h2>¿Necesita asesoría jurídica?</h2>
                <p>
                    Cuéntenos su caso y nuestro equipo se pondrá en contacto con usted.
                </p>
                <button
                    type="button"
                    className="contact-cta__button"
                    onClick={onOpenConsulta}
                >
                    CONSULTAR MI CASO
                </button>
            </div>
        </section>
    )
}
