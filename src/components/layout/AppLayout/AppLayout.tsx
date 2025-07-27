import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import styles from "./AppLayout.module.scss";

type AppLayoutProps = {
  children: React.ReactNode;
}
export const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};