import React from "react";

import Sns01 from '../images/icon-01.png';
import Sns02 from '../images/icon-02.png';
import Sns03 from '../images/icon-03.png';
import Sns04 from '../images/icon-04.png';

function Footer(){
    return(
<footer>
<ul>
    <li>개인정보처리방침</li>
    <li>이용약관</li>
    <li>영상정보처리기기운영・관리 방침</li>
    <li>입점문의</li>
</ul>

<dl>
    <dt>사업자등록번호</dt>
    <dd>201-81-32195</dd>
    <dt>대표이사</dt>
    <dd>차정호</dd>
    <dt>주소</dt>
    <dd>서울특별시 중구 소공로63, (충무로 1가) </dd>
    <dt>대표 전화번호</dt>
    <dd><a href="tel:1601-5932">1601-5932</a></dd>
    <dt><br />대표 이메일주소</dt>
    <dd><a href="mailto:chicor_com@shinsegae.com">chicor_com@shinsegae.com</a></dd>
    <dt>통신판매업신고번호</dt>
    <dd>1996-서울중구-0211</dd>
    <dt>개인정보보호 책임자</dt>
    <dd>이아무개 담당</dd>
</dl>

<ul>
    <li>
        <img src={Sns01} alt="트위터" /></li>
    <li>
        <img src={Sns02} alt="페이스북" /></li>
    <li>
        <img src={Sns03} alt="구글" /></li>
    <li>
        <img src={Sns04} alt="인스타그램" /></li>
</ul>
<small>&copy; 2022 SHINSEGAE ALL RIGHTS RESERVED</small>
</footer>
    );
}

export default Footer;