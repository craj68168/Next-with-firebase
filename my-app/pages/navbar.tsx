import React, { useState } from 'react'
import styled from 'styled-components'
import Link from "next/link"
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter()
  return (
    <Nav><Logo href="">Eli<span>codes</span></Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={open}>
        {user ? <><MenuLink ><Link href="/home"><MenuItem>Home</MenuItem></Link></MenuLink>
          <MenuLink ><Link href="/about"><MenuItem>about</MenuItem></Link></MenuLink>
          <MenuLink ><Link href="/login"><MenuItem onClick={() => {
            logout();
            router.push("/login")
          }}>logout</MenuItem></Link></MenuLink></> : <><MenuLink ><Link href="/login"><MenuItem>login</MenuItem></Link></MenuLink>
          <MenuLink ><Link href="/signup"><MenuItem>signup</MenuItem></Link></MenuLink></>}
      </Menu>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
padding:0 2rem;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
background:grey;
`
const Logo = styled.a`
padding:1rem 0;
color:#7b7fda;
text-decoration:none
font-weight:800;
font-size:1.7rem;
span{
  font-weight:300;
  font-size:1.3rem;
}
`
const Hamburger = styled.div`
display:none;
flex-direction:column;
cursor:pointer;
span{
  height:2px;
  width:25px;
  background:#7b7fda;
  margin-bottom:4px;
  border-radius:5px;
}
@media (max-width:768px){
  display:flex;
}
`
const Menu = styled.ul`
display:flex;
justify-content:space-between;
align-item:center;
position:relative;

@media (max-width:768px){
  overflow:hidden;
  flex-direction:column;
  width:100%;
  max-height:${({ isOpen }: any) => isOpen ? "300px" : "0"};
  transition: max-height 0.3s ease-in;
}
`;
const MenuLink = styled.li`
display:flex;
justify-content:space-between;
align-item:center;
`
const MenuItem = styled.a`
padding:1rem 2rem;
cursor:pointer;
text-align:center;
text-decoration:none;
color:#67bc98;
transition: all 0.3s ease;
&:hover{
  color:#7b7fda;

}`