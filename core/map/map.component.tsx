import { FC, useRef, useEffect, Ref, forwardRef, useState } from 'react';
import { mygraph } from './map.positions';
import styles from '../../styles/style.module.scss';
import { initMarker } from './map.store';
import { useRecoilValue } from 'recoil';
import { nodeInterface } from './map.service';
import { GoogleSpreadsheet } from 'google-spreadsheet';

declare global {
    interface Window {
        kakao: any;
    }
}

type KakaomapComponentProps = {
    ref: Ref<HTMLDivElement>;
};

export let map;
export const KakaoMap: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const where = useRecoilValue(initMarker);

    useEffect(() => {
        const { kakao } = window;
        const mapOption = {
            center: new kakao.maps.LatLng(35.8364880940649, 128.7537718363498), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        map = new kakao.maps.Map(ref.current, mapOption);

        if (where.start.key) {
            const startMarker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(where.start.position.lat, where.start.position.lng)
            })
            .setMap(map);
        }
        if (where.end.key) {
            const endMarker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(where.end.position.lat, where.end.position.lng)
            })
            .setMap(map);
        }

        kakao.maps.event.addListener(map, 'route', (path: nodeInterface[]) => {
            const linePath = path.map((item) => {
                const { lat, lng } = mygraph[item.nodeID].position;
                return new kakao.maps.LatLng(lat, lng)
            });
            const polyline = new kakao.maps.Polyline({
                path: linePath, // 선을 구성하는 좌표배열 입니다
                strokeWeight: 7, // 선의 두께 입니다
                strokeColor: '#FFAE00', // 선의 색깔입니다
                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid' // 선의 스타일입니다
            });
            const distance = Math.round(path[0].gScore);

            polyline.setMap(map);
            showOverlay(distance, linePath[0], map);
        });

    }, [ref.current]);

    const showOverlay = (distance, position: any, map: any) => {
        const content = `<div class=${styles.overlay}>총 거리<span>${distance}m</span></div>`
        const customOverlay = new window.kakao.maps.CustomOverlay({
            map: map, // 커스텀오버레이를 표시할 지도입니다
            content: content,  // 커스텀오버레이에 표시할 내용입니다
            position: position, // 커스텀오버레이를 표시할 위치입니다.
            xAnchor: -0.1,
            yAnchor: -0.1,
            zIndex: 3 
        })
        customOverlay.setMap(map);
    }

    const MapElement: FC<KakaomapComponentProps> = forwardRef((props, ref) => {
        return (
            <div ref={ref} className={styles.map}></div>
        )
    })

    return (
        <MapElement ref={ref} />
    );
}

