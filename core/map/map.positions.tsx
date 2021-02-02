export interface graphInterface {
    [nodeID: string]: {
        position: {
            lat: number,
            lng: number,
        },
        vertex: {
            [connected: string]: number
        },
    }
}

export const mygraph: graphInterface = {
    '0': { position: { lat: 35.83474331303237, lng: 128.753957112632 }, vertex: { '1': 200.81, '3': 301.83 } },
    '1': { position: { lat: 35.834269272613305, lng: 128.756177981717 }, vertex: { '0': 200.81, '2': 69.64, '4': 180.68 } },
    '2': { position: { lat: 35.83368215440663, lng: 128.75626917682433 }, vertex: { '1': 69.64, '3': 322.45, '5': 336.49, '6': 248.64 } },
    '3': { position: { lat: 35.83204288386367, lng: 128.7533104286116 }, vertex: { '0': 301.83, '2': 322.45, '5': 270.44  } },
    '4': { position: { lat:35.833208442077506, lng: 128.75742493724493 }, vertex: { '1': 180.68, '6': 143.19 } },
    '5': { position: { lat:35.8306511501313, lng: 128.75577269647403 }, vertex: { '2': 336.49, '3': 270.44, '6': 272.66 } },
    '6': { position: { lat: 35.832042883847436, lng: 128.75817595575904 }, vertex: { '2': 248.64, '4': 143.19, '5': 272.66 } },
}
