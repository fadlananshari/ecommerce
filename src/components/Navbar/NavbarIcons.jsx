import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineLike } from 'react-icons/ai';

const NavbarIcons = [
  {
    icon: <VscAccount size={20}/>,
    url: '#',
    cName: ['nav-item text-decoration-none', 'nav-link text-dark'],
  },
  {
    icon: <HiOutlineSearch size={20}/>,
    url: '#',
    cName: ['nav-item ', 'nav-link text-dark'],
  },
  {
    icon: <AiOutlineLike size={20}/>,
    url: '#',
    cName: ['nav-item ', 'nav-link text-dark'],
  },
  {
    icon: <AiOutlineShoppingCart size={20}/>,
    url: '#',
    cName: ['nav-item ', 'nav-link text-dark'],
  },
];

export default NavbarIcons;
