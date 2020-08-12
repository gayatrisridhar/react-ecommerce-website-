import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class h3 extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  px-sm-5 fixed-top">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <span>
                <i className="fa fa-home"> home</i>
              </span>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span>
              <i className="fa fa-cart-plus"> my cart</i>
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
//notes
//navbar-expand-sm :it expands the vavbar vertically when small
//by default navs are left aligned to customize their alignmnt use justify-cntent-right/end
//to vertically stack up the contents use flex-column/flex-sm-column
