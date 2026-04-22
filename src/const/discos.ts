import { elFilo, candombeNiño, mananita, elExtrañante, musicaPopular, continuidades, candombeBailador, laVidaLaMuerte, Regreso } from './albums';
import ElFiloPortada from '../assets/discos/ElFiloPortada.jpg';
import ElFiloOriginal from '../assets/discos/ElFiloOriginal.png';
import CandombeNiñoPortada from '../assets/discos/CandombeNiñoPortada.jpg';
import CandombeNiñoOriginal from '../assets/discos/CandombeNiñoOriginal.jpg';
import MananitaPortada from '../assets/discos/MañanitaPortada.jpg';
import MananitaOriginal from '../assets/discos/MañanitaOriginal.jpg';
import ElExtrañantePortada from '../assets/discos/ExtrañantePortada.jpg';
import ElExtrañanteOriginal from '../assets/discos/ExtrañanteOriginal.jpeg';
import MusicaPopularOriginal from '../assets/discos/MusicaPopularOriginal.png';
import ContinuidadesOriginal from '../assets/discos/ContinuidadesOriginal.jpg';
import CandombeBailadorPortada from '../assets/discos/CandombeBailadorPortada.jpg';
import CandombeBailadorOriginal from '../assets/discos/CandombeBailadorOriginal.jpeg';
import LaVidaLaMuertePortada from '../assets/discos/LavidaLamuertePortada.jpg';
import LaVidaLaMuerteOriginal from '../assets/discos/LavidaLamuerteOriginal.jpg';
import RegresoPortada from '../assets/discos/RegresoPortada.jpg';
import RegresoOriginal from '../assets/discos/RegresoOriginal.jpg';

export interface DiscoData {
  partituraUrl?: string;
  letraUrl?: string;
  slug: string;
  title: string;
  original: string;
  image: string;
  subtitle: string;
  ft?: string; // Para mostrar "ft. X" en la lista
  color?: string; // Color predominante para título y etiquetas (según portada)
  album: typeof candombeBailador;
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
    partituraUrl: "https://drive.google.com/file/d/12jSgMp0b_KxaodErRGepMwy1_C4Me6OY/view?usp=drive_link",
    letraUrl: "https://docs.google.com/document/d/1Z2S3_UQmpT_f9CZsMlrUT6PT8NHZ_9D4/edit?usp=drive_link&ouid=102910314727919679991&rtpof=true&sd=true",
  },
  {
    slug: 'continuidades',
    title: 'Continuidades',
    image: continuidades.portada,
    original: continuidades.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    color: '#ce3957',
    album: candombeBailador,
  },
];

export function getDiscoBySlug(slug: string): DiscoData | undefined {
  let disco: DiscoData | undefined;
  disco = DISCOS.find((d) => d.slug === slug);
  if (!disco) {
    disco = Singles.find((d) => d.slug === slug);
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
  },
  {
    slug: 'el-filo',
    title: 'El Filo',
    image: elFilo.portada,
    original: elFilo.original,
    subtitle: 'Orquesta Típica Di Pasquale',
    color: '#4d4d4d',
    album: candombeBailador,
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
  },
];