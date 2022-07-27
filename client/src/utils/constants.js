import {
  MdOutlineEdit,
  MdDeleteOutline,
  MdPersonAdd,
  MdOutlineCancel,
  MdOutlineNightlight,
} from 'react-icons/md';
import { RiMusicLine, RiAlbumLine } from 'react-icons/ri';
import { BsMusicNoteList, BsPersonCircle } from 'react-icons/bs';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import { WiDaySunny } from 'react-icons/wi';
import { FaEllipsisV, FaSpinner } from 'react-icons/fa';

export const API_URL = 'http://localhost:5000/api/';

export const API_ROUTES = {
  auth: {
    signIn: '/auth/signin',
    register: '/auth/signup',
  },
  artists: {
    getArtists: '/artist',
    getArtist: '/artist',
    post: '/artist',
    update: '/artist',
    delete: '/artist',
  },
  albums: {
    getAlbums: '/album',
    getAlbum: '/album',
    post: '/album',
    update: '/album',
    delete: '/album',
  },
  songs: {
    getSongs: '/song',
    getSong: '/song',
    post: '/song',
    update: '/song',
    delete: '/song',
  },
};

export const ROUTES = {
  home: {
    url: '/',
    title: 'Home',
  },
  search: {
    url: '/search',
    title: 'Search',
  },
};

export const ICONS = {
  edit: MdOutlineEdit,
  remove: MdDeleteOutline,
  addSong: RiMusicLine,
  addAlbum: RiAlbumLine,
  addArtist: MdPersonAdd,
  addPlaylist: BsMusicNoteList,
  threeDots: HiDotsVertical,
  backArrow: AiOutlineArrowLeft,
  downArrow: AiOutlineArrowDown,
  plus: AiOutlinePlusCircle,
  minus: AiOutlineMinusCircle,
  cancel: MdOutlineCancel,
  user: BsPersonCircle,
  moon: MdOutlineNightlight,
  sun: WiDaySunny,
  loadingSpinner: FaSpinner,
};

export const ICON_TYPES = {
  edit: 'edit',
  remove: 'delete',
  addSong: 'addSong',
  addAlbum: 'addAlbum',
  addArtist: 'addArtist',
  addPlaylist: 'addPlaylist',
  threeDots: 'threeDots',
  backArrow: 'backArrow',
  downArrow: 'downArrow',
  loadingSpinner: 'loadingSpinner',
  plus: 'plus',
  minus: 'minus',
  cancel: 'cancel',
  user: 'user',
  moon: 'moon',
  sun: 'sun',
};

export const BTN_STYLES = {
  dark: 'dark',
  light: 'light',
};

export const BTN_TYPES = {
  submit: 'submit',
  button: 'button',
};
