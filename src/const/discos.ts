import { 
  elFilo, candombeNiño, mananita, elExtrañante, musicaPopular, continuidades, 
  candombeBailador, laVidaLaMuerte, Regreso,
  laEspera, electricidad, sanCamilo, castigo, donaCarmen, polacos,
  fanfarriaDelOlvido, cancionSinNombre, elPlanDeDios, marAdentro, valsDelLaberinto, balvanera
} from './albums';
import ElExtrañantePortada from '../assets/discos/ExtrañantePortada.jpg';
import ElExtrañanteOriginal from '../assets/discos/ExtrañanteOriginal.jpeg';
import CandombeBailadorPortada from '../assets/discos/CandombeBailadorPortada.jpg';
import CandombeBailadorOriginal from '../assets/discos/CandombeBailadorOriginal.jpeg';
import LaVidaLaMuertePortada from '../assets/discos/LavidaLamuertePortada.jpg';
import LaVidaLaMuerteOriginal from '../assets/discos/LavidaLamuerteOriginal.jpg';
import RegresoPortada from '../assets/discos/RegresoPortada.jpg';
import RegresoOriginal from '../assets/discos/RegresoOriginal.jpg';
import LaEsperaPortada from '../assets/ciclo/LaEspera.png';
import ElectricidadPortada from '../assets/ciclo/electricidad.png';
import SanCamiloPortada from '../assets/ciclo/San Camilo.png';
import CastigoPortada from '../assets/ciclo/Castigo.png';
import DoñaCarmenPortada from '../assets/ciclo/Doña Carmen.png';
import PolacosPortada from '../assets/ciclo/pip portada.png';

export interface TrackData {
  slug: string;
  title: string;
  original: string;
  image: string;
  subtitle: string;
  ft?: string;
  color?: string;
  album: typeof candombeBailador;
  partituraUrl?: string;
  letraUrl?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
}

export interface DiscoData {
  partituraUrl?: string;
  letraUrl?: string;
  /** Enlace para escuchar el tema en YouTube */
  youtubeUrl?: string;
  /** Enlace para escuchar el tema en Spotify */
  spotifyUrl?: string;
  slug: string;
  title: string;
  original: string;
  image: string;
  subtitle: string;
  ft?: string; // Para mostrar "ft. X" en la lista
  color?: string; // Color predominante para título y etiquetas (según portada)
  album: typeof candombeBailador;
  tracks?: TrackData[]; // Lista de temas si es un álbum completo
}

export const DISCOS: DiscoData[] = [
  {
    slug: 'musica-popular',
    title: '¿Qué pasa con la música popular hoy?',
    image: musicaPopular.portada,
    original: musicaPopular.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    color: '#ce3957',
    album: candombeBailador,
    youtubeUrl: 'https://youtube.com/playlist?list=OLAK5uy_nVaM9lLej6jyJwQq1O5_p5KN81UikWrio&si=WP57cri9FSHadiNH',
    spotifyUrl: 'https://open.spotify.com/intl-es/album/6sIRW5ckIivXSRJyNG7sx0?si=jMvS_fKpSsm5da1mY6ZBsA',
    tracks: [
      {
        slug: 'candombe-bailador',
        title: 'Candombe Bailador',
        image: CandombeBailadorPortada,
        original: CandombeBailadorOriginal,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Inés Cuello, Daniel Maza y Eliana Zarabozo',
        color: '#007c68',
        album: candombeBailador,
        youtubeUrl: 'https://youtu.be/IrA3bnv40pM?si=cw0MHfqrsdSCyP9i',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/373mCoB57UrGsjCs1Ptdw5?si=ed88b04230bc437f',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'el-extranante',
        title: 'El Extrañante',
        image: ElExtrañantePortada,
        original: ElExtrañanteOriginal,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Luciana Jury',
        color: '#ce3957',
        album: elExtrañante,
        youtubeUrl: 'https://youtu.be/kWbz9I9aVXs?si=pU8AIkOt9xA0hAju',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/4RuuEJs4H7mlBfw7iBte7Q?si=245bd135193b4e1f',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'la-vida-la-muerte',
        title: 'La vida, la muerte',
        image: LaVidaLaMuertePortada,
        original: LaVidaLaMuerteOriginal,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Nadia Larcher y Andrés Pilar',
        color: '#007c68',
        album: laVidaLaMuerte,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'la-espera',
        title: 'La Espera',
        image: LaEsperaPortada,
        original: LaEsperaPortada,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Nacho Mozetic',
        album: laEspera,
        color: '#ce3957',
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'electricidad',
        title: 'Electricidad',
        image: ElectricidadPortada,
        original: ElectricidadPortada,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Carmen Sanchez Viamonte',
        color: '#ce3957',
        album: electricidad,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'san-camilo',
        title: 'San Camilo',
        image: SanCamiloPortada,
        original: SanCamiloPortada,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. María Pien',
        album: sanCamilo,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'castigo',
        title: 'Castigo',
        image: CastigoPortada,
        original: CastigoPortada,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Marcelo Moguilevsky y Sebastián Espósito',
        color: '#ce3957',
        album: castigo,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'regreso',
        title: 'Regreso',
        image: RegresoPortada,
        original: RegresoOriginal,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Flor Bobadilla Oliva y Abel Tesoriere',
        color: '#007c68',
        album: Regreso,
        youtubeUrl: 'https://youtu.be/GTbn3UtyVbs?si=mj2Umc1KL38JqtQu',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/2cqvH4TVlQDotha9tqaRlK?si=3aaf7b2156ee40dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'dona-carmen',
        title: 'Doña Carmen',
        image: DoñaCarmenPortada,
        original: DoñaCarmenPortada,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Carlos Moscardini',
        album: donaCarmen,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'polacos',
        title: 'Polacos',
        image: PolacosPortada,
        original: PolacosPortada,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Pipi Piazzolla',
        album: polacos,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
    ],
  },
  {
    slug: 'continuidades',
    title: 'Continuidades',
    image: continuidades.portada,
    original: continuidades.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    color: '#ce3957',
    album: candombeBailador,
    youtubeUrl: 'https://youtube.com/playlist?list=OLAK5uy_knbMjbmZ0Ql0AIQLj56dFjaIiYLeBAml4&si=yofKathr3pcAdo6e',
    spotifyUrl: 'https://open.spotify.com/intl-es/album/4GSgxCYBhBHG74eqHPcW27?si=dSpOqcrwTOWi19tOyCLOHg',
    tracks: [
      {
        slug: 'fanfarria-del-olvido',
        title: 'Fanfarria del Olvido',
        image: continuidades.portada,
        original: continuidades.original,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Victoria Di Raimondo',
        color: '#ce3957',
        album: fanfarriaDelOlvido,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'cancion-sin-nombre',
        title: 'Canción sin Nombre',
        image: continuidades.portada,
        original: continuidades.original,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Victoria Di Raimondo',
        color: '#ce3957',
        album: cancionSinNombre,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'el-plan-de-dios',
        title: 'El plan de Dios',
        image: continuidades.portada,
        original: continuidades.original,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Victoria Di Raimondo',
        color: '#ce3957',
        album: elPlanDeDios,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'mar-adentro',
        title: 'Mar adentro',
        image: continuidades.portada,
        original: continuidades.original,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Victoria Di Raimondo',
        color: '#ce3957',
        album: marAdentro,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'vals-del-laberinto',
        title: 'Vals del laberinto',
        image: continuidades.portada,
        original: continuidades.original,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Victoria Di Raimondo',
        color: '#ce3957',
        album: valsDelLaberinto,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
      {
        slug: 'balvanera',
        title: 'Balvanera',
        image: continuidades.portada,
        original: continuidades.original,
        subtitle: 'Orquesta Típica Di Pasquale',
        ft: 'ft. Victoria Di Raimondo',
        color: '#ce3957',
        album: balvanera,
        youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
        spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
        partituraUrl: 'https://www.dropbox.com/scl/fi/2c707g6d300q4b01n80j7/Candombe-Bailador.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
        letraUrl: 'https://www.dropbox.com/scl/fi/x3px7c58300q4b01n80j7/Candombe-Bailador-Letra.png?rlkey=8h86f994r3rxo9u8ydt1935m4&dl=0',
      },
    ],
  },
];

export function getDiscoBySlug(slug: string): DiscoData | TrackData | undefined {
  let disco: DiscoData | TrackData | undefined;
  disco = DISCOS.find((d) => d.slug === slug);
  if (!disco) {
    disco = Singles.find((d) => d.slug === slug);
  }
  // Buscar en los tracks de los álbumes
  if (!disco) {
    for (const album of DISCOS) {
      if (album.tracks) {
        const track = album.tracks.find((t) => t.slug === slug);
        if (track) {
          disco = track;
          break;
        }
      }
    }
  }
  return disco;
}


export const Singles: DiscoData[] = [
  {
    slug: 'regreso',
    title: 'Regreso',
    image: RegresoPortada,
    original: RegresoOriginal,
    subtitle: 'Orquesta Típica Di Pasquale',
    ft: 'ft. Flor Bobadilla Oliva y Abel Tesoriere',
    color: '#007c68',
    album: Regreso,
    youtubeUrl: 'https://youtu.be/GTbn3UtyVbs?si=mj2Umc1KL38JqtQu',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2cqvH4TVlQDotha9tqaRlK?si=3aaf7b2156ee40dc',
  },
  {
    slug: 'la-vida-la-muerte',
    title: 'La vida, la muerte',
    image: LaVidaLaMuertePortada,
    original: LaVidaLaMuerteOriginal,
    subtitle: 'Orquesta Típica Di Pasquale',
    ft: 'ft. Nadia Larcher y Andrés Pilar',
    color: '#007c68',
    album: laVidaLaMuerte,
    youtubeUrl: 'https://youtu.be/j-xim-5RWe8?si=mtjX_CsQezFfwaJQ',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/22A9TnQULxVFwJUF651Ra5?si=08ca09a0623845dc',
  },
  {
    slug: 'candombe-bailador',
    title: 'Candombe Bailador',
    image: CandombeBailadorPortada,
    original: CandombeBailadorOriginal,
    subtitle: 'Orquesta Típica Di Pasquale',
    ft: 'ft. Inés Cuello, Daniel Maza y Eliana Zarabozo',
    color: '#007c68',
    album: candombeBailador,
    youtubeUrl: 'https://youtu.be/IrA3bnv40pM?si=cw0MHfqrsdSCyP9i',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/373mCoB57UrGsjCs1Ptdw5?si=ed88b04230bc437f',
  },
  {
    slug: 'el-extranante',
    title: 'El Extrañante',
    image: ElExtrañantePortada,
    original: ElExtrañanteOriginal,
    subtitle: 'Orquesta Típica Di Pasquale',
    ft: 'ft. Luciana Jury',
    color: '#ce3957',
    album: elExtrañante,
    youtubeUrl: 'https://youtu.be/kWbz9I9aVXs?si=pU8AIkOt9xA0hAju',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/4RuuEJs4H7mlBfw7iBte7Q?si=245bd135193b4e1f',
  },
  {
    slug: 'el-filo',
    title: 'El Filo',
    image: elFilo.portada,
    original: elFilo.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    color: '#4d4d4d',
    album: candombeBailador,
    youtubeUrl: 'https://youtu.be/jPEDQKlZAmE?si=1nKaoArNUy3fsYp2',
    spotifyUrl: 'https://open.spotify.com/intl-es/album/7JJT0yFQP9DlwqaNsJtdrN?si=mIpd6GdLQwSx8SAJ6LGg4A',
  },
  {
    slug: 'mananita',
    title: 'Mañanita',
    image: mananita.portada,
    original: mananita.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    ft: 'ft. Inés Cuello',
    color: '#474f6f',
    album: candombeBailador,
    youtubeUrl: 'https://youtu.be/ioY92rhn4eI?si=Ag9tUfIukCh6Ftv-',
    spotifyUrl: 'https://open.spotify.com/intl-es/album/2HJ2ui0rDAUo2LQwPtxWb0?si=_AHVWAvKStKCNoE2BwcJ6w',
  },
  {
    slug: 'candombe',
    title: 'Candombe del niño oscurito',
    image: candombeNiño.portada,
    original: candombeNiño.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    ft: 'ft. Flor Bobadilla Oliva',
    color: '#007c68',
    album: candombeBailador,
    youtubeUrl: 'https://youtu.be/76lb63x59cs?si=nOawBnnl6VC5xflW',
    spotifyUrl: 'https://open.spotify.com/intl-es/album/3e5Ogba3oGYLpYnhhszjEk?si=MhU8LPVzSSSSK-KgFHJSkg',
    
  },
];