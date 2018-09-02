import React from 'react';
import {
  Navbar as NBar,
  NavbarToggler,
  Nav, NavItem, NavLink,
  NavbarBrand, Collapse,
} from 'reactstrap';
import { t } from '../../i18n';

export default () => (
  <NBar color="faded" light sticky toggleable expand="md">
    <NavbarBrand href="/">{t('empresa.nome')}</NavbarBrand>
    <NavbarToggler onClick={() => {}} />
    <Collapse isOpen navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">Test</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </NBar>
);
