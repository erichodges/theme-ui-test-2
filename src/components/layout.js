/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { Box, Flex } from '@theme-ui/components';
import { AccordionNav } from '@theme-ui/sidenav';
import { Link } from 'gatsby';
import { useRef, useState } from 'react';
import { jsx, Styled, useColorMode } from 'theme-ui';
import Sidebar from '../sidebar.mdx';
import Button from './button';
import Head from './head';
import MenuButton from './menu-button';
import NavLink from './nav-link';
import Pagination from './pagination';
// import SkipLink from './skip-link';

const modes = ['default', 'deep', 'light'];

const sidebar = {
  wrapper: AccordionNav,
  a: NavLink,
};

const getModeName = (mode) => {
  switch (mode) {
    case 'light':
      return 'Light';
    case 'deep':
      return 'Deep';
    case 'default':
      return 'Dark';
    default:
      return mode;
  }
};

export default (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef(null);
  const [mode, setMode] = useColorMode();
  const fullwidth =
    (props.pageContext.frontmatter &&
      props.pageContext.frontmatter.fullwidth) ||
    props.location.pathname === '/';
  const showNav = !props.pageContext?.frontmatter?.hidenav;

  const cycleMode = () => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  return (
    <Styled.root>
      <Head {...props} />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {showNav && (
          <Flex
            as="header"
            sx={{
              height: 64,
              px: 3,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Flex sx={{ alignItems: 'center' }}>
              <MenuButton
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  if (!nav.current) return;
                  const navLink = nav.current.querySelector('a');
                  if (navLink) navLink.focus();
                }}
              />
              <Link
                to="/"
                sx={{
                  variant: 'links.nav',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                Yoga Sutras
              </Link>
            </Flex>
            <Flex>
              <Button
                sx={{
                  mr: 2,
                }}
                onClick={cycleMode}
              >
                {getModeName(mode)}
              </Button>
            </Flex>
          </Flex>
        )}
        <Box sx={{ flex: '1 1 auto' }}>
          <div sx={{ display: ['block', 'flex'] }}>
            <div
              ref={nav}
              onFocus={() => {
                setMenuOpen(true);
              }}
              onBlur={() => {
                setMenuOpen(false);
              }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Sidebar
                open={menuOpen}
                components={sidebar}
                pathname={props.location.pathname}
                sx={{
                  display: [null, fullwidth ? 'none' : 'block'],
                  width: 256,
                  flex: 'none',
                  px: 3,
                  pt: 3,
                  pb: 4,
                  mt: [64, 0],
                }}
              />
            </div>
            <main
              id="content"
              sx={{
                width: '100%',
                minWidth: 0,
                maxWidth: fullwidth ? 'none' : '100vw',
                mx: 'auto',
                px: fullwidth ? 0 : 3,
                marginTop: '-.3rem',
              }}
            >
              {props.children}
              {!fullwidth && <Pagination />}
            </main>
          </div>
        </Box>
      </Flex>
    </Styled.root>
  );
};
