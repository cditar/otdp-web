import { Section, Button } from '../../components';
import './Campaign.css';

export const CampaignAr = () => {

    // - Remeras: proximamente
    // - Vinilo: proximamente
    // - Merchandising: proximamente

    const cards = [
        {
            title: '$10.000',
            description: 'Acceso a descarga digital en alta calidad',
            buttonText: 'Contribuir',
            paymentLink: 'https://mpago.la/2Wd28mR'
        },
        {
            title: '$15.000',
            description: 'Acceso a descarga digital en alta calidad + Nota de agradecimiento de la orquesta',
            buttonText: 'Contribuir',
            paymentLink: 'https://mpago.la/1CHhH2G'

        },
        {
            title: '$25.000',
            description: 'Taller grupal de arreglos virtual (1 encuentro de 3 horas)',
            buttonText: 'Contribuir',
            paymentLink: 'https://mpago.la/1ZvdeWf'

        },
        {
            title: '$50.000',
            description: 'Clase individual c/ cualquier integrante (a convenir)',
            buttonText: 'Contribuir',
            paymentLink: 'https://mpago.la/1Gy5Q6G'

        },
        {
            title: '$75.000',
            description: 'Acceso exclusivo a descarga digital en alta calidad antes del lanzamiento oficial',
            buttonText: 'Contribuir',
            paymentLink: 'https://mpago.la/2bK32aC'
        },
        {
            title: '$100.000',
            description: 'Partituras PDF + Descarga digital',
            buttonText: 'Contribuir',
            paymentLink: 'https://mpago.la/2nupjNm'
        },
    ];

    const menuItems = [
        {
            title: 'Story',
            description: 'Conocé nuestra historia'
        },
        {
            title: 'FAQ',
            description: 'Preguntas frecuentes'
        },
        {
            title: 'Contact',
            description: 'Contactanos'
        }
    ];

    return (
        <Section theme='dark' withArrowBack path='/' >
            <div className="campaign-container">
                <div className="campaign-cards-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="campaign-card">
                            <h3 className='card-title'>{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                            <Button width='95%' background='#1A8E8E' color='white' title={card.buttonText} onClick={() => window.location.href = card.paymentLink } variant />
                        </div>
                    ))}
                </div>
                            <div style={{ color: 'white', width: '100%', marginTop: '15px'}}>Si queres aportar otro monto y no queres recompensas podés enviarnos una transferencia a éste alias: <b>Album.ciclo.apuro.mp</b> <br/> Enviar comprobante y datos: <b>producciondipa@gmail.com</b> </div>
            </div>
        </Section>
    )
}
