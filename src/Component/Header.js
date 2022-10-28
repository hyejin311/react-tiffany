import React from "react";
import { AiOutlineMenu} from 'react-icons/ai';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function Header(){
    return(
<>
<header>
      <div>
        <h1>
          <Link to="/">
            <img src={logo} alt="Tiffany &amp; Prisim" /></Link></h1>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
      <p id="headbtn"> <AiOutlineMenu /> </p>
    </header>

    <div id="navWrap">
    <nav>
      <h2 class="hide">메인내비게이션</h2>
      <div>
        <ul>
          <li><Link to="/nav01">Navmenu01</Link></li>
          <li><Link to="/nav02">Navmenu02</Link></li>
          <li><Link to="/nav03">Navmenu03</Link></li>
          <li><Link to="/nav04">Navmenu04</Link></li>
        </ul>
      </div>
    </nav>
  </div>
  </>
    );
}
export default Header;