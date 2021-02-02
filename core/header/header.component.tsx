import { FC } from 'react';
import { Layout } from 'antd';
import styles from '../../styles/style.module.scss';
import { GithubOutlined } from '@ant-design/icons';

const AntdHeader = Layout.Header;

export const Header: FC = () => {
    return(
        <AntdHeader  className={styles.header}><GithubOutlined style={{ marginRight: "15px" }} />github.com/sglee0730/PROJECT-yu-pathfinder</AntdHeader>
    )
}