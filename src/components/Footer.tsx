import { FC } from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
  border-top: 1px solid var(--border-colour);
  margin-top: 64px;
  background-color: var(--background-primary);
`;

const Content = styled.div`
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  padding-block: 24px;
  font-size: 0.75rem;
  color: var(--colour-secondary);
  font-weight: 500;
  span {
    display: block;
    line-height: 1.75;
  }
`;

interface iFooterProps {}

interface iLinkProps {
  href: string;
  label: string;
}
const Link: FC<iLinkProps> = ({ href, label }) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      {label}
    </a>
  );
};
const Footer: FC<iFooterProps> = () => {
  return (
    <FooterComponent>
      <Content>
        <span>
          © 2020-{new Date().getFullYear()}{' '}
          <a href='https://szalay.me'>Balázs Szalay</a>, All Rights Reserved
        </span>
        <span>
          Contacts: <Link href='mailto:balazs@szalay.me' label='Email' />{' '}
          &middot;{' '}
          <Link href='https://github.com/szalaybalazs' label='Github' />{' '}
          &middot; <Link href='https://twitter.com/szalayme' label='Twitter' />{' '}
          &middot;{' '}
          <Link
            href='https://www.linkedin.com/in/balazsszalay/'
            label='LinkedIn'
          />
        </span>
      </Content>
    </FooterComponent>
  );
};

export default Footer;
