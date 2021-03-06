import { useState } from 'react';
import { StyledSideNav } from './styles';
import { NavHeader } from '../../itens/nav/nav-header';
import NavItem from '../../itens/nav/nav-item';
import NavSubMenu from '../../itens/nav/nav-submenu';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export default function SideNav({open, sign}:{open: boolean, sign: boolean}){

  const [ showCategorias, setShowCategorias ] = useState(false);
  const [ showProdutos, setShowProdutos ] = useState(false);
  const [ showListas, setShowListas ] = useState(false);


  const router = useRouter();

  return(
    <StyledSideNav open={open}>
      <ul>
        <NavHeader>Bem-vindo</NavHeader>
        <NavItem onClick={() => router.push('/')}>
          🏠 Home
        </NavItem>
        <NavHeader>Sistema</NavHeader>
        { sign
          ?
          <>
            <NavSubMenu label="📦 Produtos" open={showProdutos} onClick={() => setShowProdutos(!showProdutos)}>
              <NavItem onClick={() => router.push("/produtos/consulta")}>
                🔎 Consulta <FontAwesomeIcon icon={faLongArrowAltRight}/>
              </NavItem>
              <NavItem onClick={() => router.push("/produtos/cadastro")}>
                🗃 Cadastro <FontAwesomeIcon icon={faLongArrowAltRight}/>
              </NavItem>
            </NavSubMenu>
            <NavSubMenu label="🗂️ Categorias" open={showCategorias} onClick={() => setShowCategorias(!showCategorias)}>
              <NavItem onClick={() => router.push("/categorias/consulta")}>
                🔎 Consulta <FontAwesomeIcon icon={faLongArrowAltRight}/>
              </NavItem>
              <NavItem onClick={() => router.push("/categorias/cadastro")}>
                🗃 Cadastro <FontAwesomeIcon icon={faLongArrowAltRight}/> 
              </NavItem>
            </NavSubMenu>
            <NavSubMenu label="📜 Listas" open={showListas} onClick={() => setShowListas(!showListas)}>
              <NavItem onClick={() => router.push("/listas/produtos")}>
                📋 Estoque <FontAwesomeIcon icon={faLongArrowAltRight}/>
              </NavItem>
              <NavItem onClick={() => router.push("/listas/compras")}>
                🛒 Compras <FontAwesomeIcon icon={faLongArrowAltRight}/>
              </NavItem>
            </NavSubMenu>
          </>
          :
          <NavItem onClick={() => router.push('/auth/signin')}>
          🔓 Login
          </NavItem>
        }
      </ul>
    </StyledSideNav>
  );
}
