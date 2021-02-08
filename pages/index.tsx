import { FC } from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import styles from '../styles/style.module.scss';
import Head from 'next/head';
import { KakaoMap } from '../core/map/map.component';
import { Controller } from '../core/controller/controller.component';
import { Header } from '../core/header/header.component';

const { Content } = Layout;

const Index: FC = () => {
  const key = process.env.API_KEY;

  return (
    <div>
      <Head>
        <script type="text/javascript" src={key}></script>
      </Head>
      <Layout className={styles.layout}>
        <Header />
        <Content className={styles.content}>
          <Controller />
          <KakaoMap />
        </Content>
      </Layout>
    </div>
  );
}

export default Index;