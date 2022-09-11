import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
interface iHeaderProps {}

const HeaderComponent = styled.header`
  border-bottom: 1px solid var(--border-colour);
  background: var(--background-primary);
  height: 64px;
  display: flex;
  align-items: center;
  /* padding-inline: 40px; */
  font-size: 14px;
`;

const Nav = styled.nav`
  width: 100vw;
  max-width: calc(var(--max-width) + 32px);
  display: flex;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Header: FC<iHeaderProps> = () => {
  return (
    <HeaderComponent>
      <Spacer />
      <Nav>
        <ActiveLink href='/' label='React' />
        <ActiveLink href='/redux' label='Redux' />
        <ActiveLink href='/rematch' label='Rematch' />
        {/* <ActiveLink href='/' label='Rematch' /> */}
        <ActiveLink href='/recoil' label='Recoil' />
        <ActiveLink href='/mobx' label='MobX' />
        {/* <ActiveLink href='/' label='Jotai' /> */}
      </Nav>
      <Spacer />
    </HeaderComponent>
  );
};

interface iNavlinkProps {
  readonly active: boolean;
}
const NavLink = styled.div<iNavlinkProps>`
  line-height: 64px;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  color: ${(props) => props.active && 'var(--colour-primary)'};
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
  a {
    display: block;
    line-height: 64px;
    padding-inline: 16px;
    text-decoration: none;
    font-weight: 500;
    color: inherit;
    &:hover {
      opacity: 1;
      text-decoration: none;
    }
  }
`;

interface iActiveLink {
  href: string;
  label: string;
}
const ActiveLink: FC<iActiveLink> = ({ href, label }) => {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    if (href.startsWith('http')) return false;

    if (href === '/') return asPath === href;
    return asPath.startsWith(href);
  }, [asPath, href]);

  return (
    <NavLink active={isActive}>
      {href.startsWith('https') ? (
        <a target='_blank' rel='noreferrer' href={href}>
          {label}
        </a>
      ) : (
        <Link href={href} passHref>
          <a>{label}</a>
        </Link>
      )}
    </NavLink>
  );
};

export default Header;
