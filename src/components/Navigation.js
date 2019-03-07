import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 40px;
  border-bottom: 1px solid #ccc;
  padding: 0;
`;

NavList.Item = styled.li`
  a {
    line-height: 1em;
    margin-right: 20px;
    padding: 10px 20px;
    display: block;
  }
`;

const Navigation = () => (
  <nav>
    <NavList>
      <NavList.Item>
        <Link to="/">Home</Link>
      </NavList.Item>
      <NavList.Item>
        <Link to="/pokemon">Pokemon</Link>
      </NavList.Item>
    </NavList>
  </nav>
);

export default Navigation;
