import './globals.css';
import type { GetStaticPropsContext, Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Header, Menu, Sidebar } from '@/components';
import styles from '@/app/layout.module.css'
import { ParsedUrlQuery } from 'querystring';

const noto = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Create My Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode  }) {
  return (
    <html  lang="en" suppressHydrationWarning={true}>
      <body className={noto.className} suppressHydrationWarning={true}>
      <div className={styles.wrapper}>

        <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
          <div className={styles.body}>
            {children}
          </div>
        <Footer className={styles.footer}/>
      </div>
      </body>
    </html>
  );
}
