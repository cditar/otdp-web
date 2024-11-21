import { Section, Button } from '../../components';
import './Campaign.css';
import image from '../../assets/009.jpg';

export const CampaignWorld = () => {
    return (
        <Section theme='dark' withArrowBack path='/' >
            <div className='campaign-container'>
                <div className='campaign-info'>
                    <h2>Campaña de financiamiento</h2>
                    <p>Se trata de un espacio de encuentro entre referentes de distintas vertientes de la música popular
                        (tango, folklore, jazz, candombe, rock, etc) y la Orquesta Típica Di Pasquale en el cual se
                        propone difundir y dialogar con el gran entramado de propuestas y busquedas artisticas del
                        presente.
                        <br />
                        <br />
                        En cada concierto la orquesta toma el desafio de realizar arreglos sobre obras de los artistas
                        invitados, generando cruces unicos e ineditos tales como la fusión de bandoneones y violines con batería,
                        guitarra, tambores de candombe, trompeta, trombón, saxos, entre otros!
                    </p>
                    <div className='campaign-buttons'>
                        <Button title='$3000' variant onClick={() => window.location.href = 'https://mpago.la/2HF5Tug'} />
                        <Button title='$5000' variant onClick={() => window.location.href = 'https://mpago.la/2uZvbVj'} />
                        <Button title='$10000' variant onClick={() => window.location.href = 'https://mpago.la/1rPdYbM'} />
                        <Button title='$15000' variant onClick={() => window.location.href = 'https://mpago.la/22n1RoK'} />
                    </div>
                    <h4>Enviar comprobante a producciondipa@gmail.com</h4>
                    <h3>Resumen proyecto</h3>
                    <p>Gracias al acompañamiento de la Universidad Nacional de Lanus (catedra de audiovisión, departamento de artes
                        y secretaria de cultura), tendremos la posibilidad de registrar estos arreglos tan particulares junto a sus
                        compositores/as.
                        Esta grabación contará con la participación de artistas que han participado del ciclo en estos tres años de
                        existencia, entre ellos: Pipi Piazzolla, Inés Cuello, Florencia Bobadilla Oliva, Daniel Maza, Nadia Larcher,
                        Marcelo Moguilevsky,  Carlos Moscardini, Carmen Sanchez Viamonte, María Pien, Luciana Jury, Nacho Moze.</p>
                    <h3>Premios</h3>
                    <ul>
                        <li>$3.000: Descuentos</li>
                        <li>$5.000:  Entrada para escuchar a la Orquesta Típica Di Pasquale</li>
                        <li>$10.000:  Entrada para la presentación del disco</li>
                        <li>$15.000:  Taller de arreglos grupal a cargo de Juan Ignacio Di Pasquale</li>
                    </ul>
                        <p>Todos los aportantes serán mencionados en la descripción del disco</p>
                </div>
                <div className='campaign-visual'>
                    <div className='campaign-image' style={{ backgroundImage: `url(${image})` }} />
                </div>
            </div>
        </Section>
    )
}
