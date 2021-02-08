import { FC, useEffect } from 'react';
import styles from '../../styles/style.module.scss';
import { Select, Button, message } from 'antd';
import { useRecoilState } from 'recoil';
import { initMarker } from '../map/map.store';
import { mygraph } from '../map/map.positions';
import { aStar } from '../map/map.service';
import { map } from '../map/map.component'

declare global {
    interface Window {
        kakao: any;
    }
}

const { Option } = Select;
const filteredPosition = Object
    .entries(mygraph)
    .filter(([_, value]: [string, any]) => value.description);

export const Controller: FC = () => {
    const [where, setWhere] = useRecoilState(initMarker);

    useEffect(() => { }, [where])

    const handleChange = (value: any, target: 'start' | 'end') => {
        if (target === 'start' && mygraph[value].position === where.end.position) {
            message.error('올바르지 않은 경로입니다.');
        } else if (target === 'end' && mygraph[value].position === where.start.position) {
            message.error('올바르지 않은 경로입니다.');
        } else {
            setWhere((prev) => ({
                ...prev,
                [target]: { key: value, position: mygraph[value].position }
            }));
        }
    }
    const handleButtonClick = () => {
        if (where.start.key && where.end.key && where.start.key !== where.end.key) {
            const path = aStar(mygraph, where.start.key, where.end.key);
            window.kakao.maps.event.trigger(map, 'route', path);
        } else {
            message.error('경로를 다시 설정 해주세요.');
        }
    }

    return (
        <div className={styles.position}>
            <Select placeholder="출발지" className={styles.select} onChange={(value) => handleChange(value, 'start')}>
                {
                    filteredPosition.map((item: any) => {
                        const [key, value] = item;
                        return <Option key={key} value={key}>{value.description}</Option>
                    })
                }
            </Select>
            <Select placeholder="도착지" className={styles.select} onChange={(value) => handleChange(value, 'end')}>
                {
                    filteredPosition.map((item: any) => {
                        const [key, value] = item;
                        return <Option key={key} value={key}>{value.description}</Option>
                    })
                }
            </Select>
            <Button type="primary" onClick={handleButtonClick}>찾기!</Button>
        </div>
    )
}