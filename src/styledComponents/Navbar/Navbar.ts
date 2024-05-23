import styled from 'styled-components';

const size = {
  desktop: "1020px",
  tablet: "640px",
};

export const device = {
  desktop: `(min-width: ${size.desktop})`,
  tablet: `(min-width: ${size.tablet})`,
};


export const NavbarWrapper = styled.nav.attrs({
  id: "divNav",
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  z-index: 1000;
  transition: all 300ms ease-in-out;
  background-color: #2e2d33
`;

export const FlexNav = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--font-light);
  border-bottom: 1px solid var(--font-light);
  padding: 0 1rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.desktop} {
    flex: 2;
  }
`;

export const NavLogo = styled.h2.attrs({
  id: "nav-logo",
})`
  flex: 0.5;
  padding: 1rem 0;
`;

export const NavToggle = styled.button.attrs({
  id: "navToggle",
  })`
  border: transparent;
  background: transparent;
  color: var(--font-light);
  font-size: 22px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavLinks = styled.div.attrs({
  id: "navLinks",
  })`
  height: 100vh;
  overflow: hidden;
  justify-content: space-evenly;
  background-color: #2e2d33;

  @media ${device.tablet} {
    height: auto;
    display: block;
    z-index: 1;
    background: transparent;
    background-color: transparent;
  }

  @media ${device.desktop} {
    flex: 2;
  }
  `;

export const NavLiLink = styled.li`
list-style: none;
margin: 1.25rem 0;
border-bottom: 2px solid whitesmoke;
font-family: "Bebas Neue", cursive, sans-serif;
width: 300px;
padding-left: 5px;
position: relative;

&::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  margin-top: 18px;
  right: 0;
  background-color: var(--accent-color);
  transition: all 0.2s ease;
}

&:hover::after {
  width: 100%;
  left: 0;
  background-color: var(--accent-color);
}

@media ${device.tablet} {
  display: inline-block;
    border: none;
}

@media ${device.desktop} {
  &::after {
  margin-top: 24px;
  }
`;