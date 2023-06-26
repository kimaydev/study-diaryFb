import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap, MainMenu, UserMenu } from "../style/HeaderCss";

const Header = () => {
  return (
    <header>
      <HeaderWrap>
        {/* 메인메뉴 */}
        <MainMenu>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/diary">Diary</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </MainMenu>
        {/* 회원메뉴 */}
        <UserMenu>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </UserMenu>
      </HeaderWrap>
    </header>
  );
};

export default Header;
