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
  return (
    <div>
      <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=78432b1cd54e8c06459c90b6a1ae31ae"></script>
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