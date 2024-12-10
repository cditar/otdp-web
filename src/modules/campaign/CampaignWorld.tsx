import { Section, Button } from '../../components';
import './Campaign.css';

export const CampaignWorld = () => {

    // - Remeras: proximamente
    // - Vinilo: proximamente
    // - Merchandising: proximamente

    const cards = [
        {
            title: '15 USD',
            description: 'TIP 15USD',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/XDSHQGAZ4JTEC'
        },
        {
            title: '20 USD',
            description: 'Digital download',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/3PJA37VCPHZWG'

        },
        {
            title: '25 USD',
            description: 'Download and thank you note',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/LM79YSD49R2KN'

        },
        {
            title: '30 USD',
            description: 'Group arrangement workshop',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/3A5YABWHKUZ2S'

        },
        {
            title: '50 USD',
            description: 'Individual class',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/MCGYMJ4SQC6PQ'
        },
        {
            title: '200 USD',
            description: 'Access to digital download in high prior to release',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/CYQSQZ3E6QQEW'
        },
        {
            title: '200 USD',
            description: 'PDF orchestral parts of a song + Digital Download',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/5DEZFB5BC66G4'
        },
        {
            title: '350 USD',
            description: 'Commission a Tango Arrangement',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/TRM79ZME99ZHA'
        },
        {
            title: '400 USD',
            description: 'Dedicate a piece',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/VVVZR4VHLEFDG'
        },
        {
            title: '1500 USD',
            description: 'PDF orchestral parts of the entire album + Digital Download',
            buttonText: 'Contribuir',
            paymentLink: 'https://www.paypal.com/ncp/payment/REFHNJ2YTXY5E'
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
