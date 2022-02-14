/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="ModalContent">
        <Button onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Close</VisuallyHidden>
        </Button>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: hsl(220deg 5% 40% / 0.8);
`;
const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
`;

const Button = styled(UnstyledButton)`
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  width: 48px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
`;

const NavLink = styled.a`
  &:first-child {
    color: ${COLORS.secondary};
  }
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  text-decoration: none;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  padding-bottom: 1rem;
  a {
    color: ${COLORS.gray[900]};
    text-decoration: none;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;
