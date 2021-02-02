import { atom } from 'recoil';

export const initMarker = atom({
    key: 'MARKER_STATE',
    default: {
        start: {
            key: null,
            position: {
                lat: null,
                lng: null,
            }
        },
        end: {
            key: null,
            position: {
                lat: null,
                lng: null,
            }
        }
    }
})
