import React, { useMemo } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

const absolutePath = (path?: string) => {
  return `https://szalay.me${path || ''}`;
};

const DocumentHead: React.FC<Props> = ({
  title,
  description = 'Software engineer with too much time on his hand, with absolutely no work-life balance issues.',
}) => {
  const pageTitle = useMemo(() => {
    return [title, 'szalay.me'].filter(Boolean).join(' | ');
  }, [title]);
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property='og:title' content='szalay.me' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=0.65, maximum-scale=5.0, minimum-scale=0.65'
      />
      <meta property='og:url' content={absolutePath()} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={absolutePath('/banner.png')} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:site' content='@szalayme' />
      <meta name='twitter:creator' content='@szalay.me' />
      <meta name='description' content={description} />
      <meta property='twitter:image' content={absolutePath('/banner.png')} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest'></link>
      {/* todo: create favicon */}
      {/* <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'></link>
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'></link> */}
    </Head>
  );
};

export default DocumentHead;
