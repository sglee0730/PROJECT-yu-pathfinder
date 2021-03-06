export interface graphInterface {
    [nodeID: string]: {
        description?: string,
        position: {
            lat: number,
            lng: number,
        },
        vertex: {
            [connected: string]: number
        } | string[],
        
    }
}

const asd: graphInterface = {
    '0': { position: { lat: 35.83474331303237, lng: 128.753957112632 }, vertex: { '1': 200.81, '3': 301.83 } },
    '1': { position: { lat: 35.834269272613305, lng: 128.756177981717 }, vertex: { '0': 200.81, '2': 69.64, '4': 180.68 } },
    '2': { position: { lat: 35.83368215440663, lng: 128.75626917682433 }, vertex: { '1': 69.64, '3': 322.45, '5': 336.49, '6': 248.64 } },
    '3': { position: { lat: 35.83204288386367, lng: 128.7533104286116 }, vertex: { '0': 301.83, '2': 322.45, '5': 270.44  } },
    '4': { position: { lat:35.833208442077506, lng: 128.75742493724493 }, vertex: { '1': 180.68, '6': 143.19 } },
    '5': { position: { lat:35.8306511501313, lng: 128.75577269647403 }, vertex: { '2': 336.49, '3': 270.44, '6': 272.66 } },
    '6': { position: { lat: 35.832042883847436, lng: 128.75817595575904 }, vertex: { '2': 248.64, '4': 143.19, '5': 272.66 } },
}

export const mygraph: graphInterface = {
    '0': { description: '영남대 정문', position: { lat: 35.83600757684982, lng: 128.7536642690701 }, vertex: { '1': 140 } },
    '1': { position: { lat: 35.83472463732539, lng: 128.75393248998552 }, vertex: { '0': 140, '2': 50, '3': 100, '47': 110 } },
    '2': { position: { lat: 35.83464200661102, lng: 128.75342287024625 }, vertex: { '1': 50, '49': 210 } },
    '3': { position: { lat: 35.834746382235906, lng: 128.7550697466668 }, vertex: { '1': 100, '4': 40, '5': 80 } },
    '4': { description: '축구장', position: { lat: 35.83512909168581, lng: 128.75496245830067 }, vertex: { '3': 40 } },
    '5': { position: { lat: 35.83477247612069, lng: 128.75591732475948 }, vertex: { '6': 110, '8': 40 } },
    '6': { position: { lat: 35.835711850256914, lng: 128.7556383750075 }, vertex: { '5': 110, '7': 50 } },
    '7': { description: '박물관', position: { lat: 35.83602062358589, lng: 128.75604607079887 }, vertex: { '6': 50 } },
    '8': { position: { lat: 35.83473768427241, lng: 128.75637866473397 }, vertex: { '5': 40, '9': 40, '11': 50, '12': 60 } },
    '9': { description: '학생지원센터', position: { lat: 35.835059508286776, lng: 128.75631429171426 }, vertex: { '8': 40 } },
    '10': { description: '조형대학신관', position: { lat: 35.835002971725245, lng: 128.7570760390612 }, vertex: { '11': 40 } },
    '11': { position: { lat: 35.83470289240403, lng: 128.7568936488387 }, vertex: { '8': 50, '10': 40, '15': 90 } },
    '12': { description: '이희건 기념관', position: { lat: 35.834167965571766, lng: 128.75622846096348 }, vertex: { '8': 60, '13': 60, '46': 90 } },
    '13': { description: '학생회관, GS25', position: { lat: 35.83399835387507, lng: 128.7569151065069 }, vertex: { '12': 60, '14': 60 } },
    '14': { position: { lat: 35.83379829858731, lng: 128.75748909926588 }, vertex: { '13': 60, '15': 50, '45': 40 } },
    '15': { position: { lat: 35.8341853616227, lng: 128.75765003181513 }, vertex: { '11': 90, '14': 50, '16': 30, '17': 70 } },
    '16': { description: '디자인미술대학 미술관', position: { lat: 35.83444195293124, lng: 128.75781096436435 }, vertex: { '15': 30 } },
    '17': { position: { lat: 35.83370261978143, lng: 128.75812746499696 }, vertex: { '15': 70, '18': 40, '19': 50 } },
    '18': { description: '사범대학', position: { lat: 35.83389832628046, lng: 128.75854588959544 }, vertex: { '17': 40 } },
    '19': { position: { lat: 35.83342428081289, lng: 128.75855125401375 }, vertex: { '17': 50, '20': 130, '21': 130 } },
    '20': { position: { lat: 35.833493865646055, lng: 128.76003719788508 }, vertex: { '19': 130, '21': 130, '22': 130 } },
    '21': { position: { lat: 35.832445737615295, lng: 128.75938810323424 }, vertex: { '19': 130, '20': 130, '38': 140, '24': 30 } },
    '22': { description: '야구장', position: { lat: 35.834294086834454, lng: 128.76107253052407 }, vertex: { '20': 130, '23': 100, '62': 60 } },
    '23': { description: '테니스장', position: { lat: 35.835094299972646, lng: 128.760552181902 }, vertex: { '22': 100 } },
    '24': { position: { lat: 35.83215869598739, lng: 128.75940419640156 }, vertex: { '21': 30, '25': 80, '30': 50 } },
    '25': { description: '종합강의동', position: { lat: 35.83217609247655, lng: 128.76024641007228 }, vertex: { '24': 80, '26': 80 } },
    '26': { description: '제2인문관', position: { lat: 35.83233266072822, lng: 128.76116372560296 }, vertex: { '25': 80, '27': 110 } },
    '27': { position: { lat: 35.83200212739011, lng: 128.7622634313561 }, vertex: { '28': 90, '31': 30 } },
    '28': { description: '학군단', position: { lat: 35.83277626909696, lng: 128.7625209234349 }, vertex: { '27': 90 } },
    '29': { description: '외국어교육원', position: { lat: 35.83172813159936, lng: 128.75998355357632 }, vertex: { '30': 50 } },
    '30': { position: { lat: 35.83172378245231, lng: 128.75939883198075 }, vertex: { '24': 50, '29': 50, '33': 100 } },
    '31': { position: { lat: 35.83185425676057, lng: 128.76196302393197 }, vertex: { '27': 30, '32': 140 } },
    '32': { position: { lat: 35.83066693262255, lng: 128.7614319465062 }, vertex: { '31': 140 } },
    '33': { position: { lat: 35.830797408668566, lng: 128.7592700859281 }, vertex: { '30': 100, '34': 110 } },
    '34': { position: { lat: 35.83108445521963, lng: 128.75815428695535 }, vertex: { '33': 110, '35': 50, '36': 20 } },
    '35': { description: '인문관 정문', position: { lat: 35.83148022981516, lng: 128.75832594834122 }, vertex: { '34': 50 } },
    '36': { position: { lat: 35.831154042104735, lng: 128.757939710223 }, vertex: { '34': 20, '40': 60, '61': 50 } },
    '37': { description: '인문관', position: { lat: 35.83204126954531, lng: 128.75813819370867 }, vertex: { '38': 90, '39': 60 } },
    '38': { description: '중앙도서관 지하', position: { lat: 35.83278931635358, lng: 128.75790215931875 }, vertex: { '21': 140, '37': 90, '39': 60, '42': 70 } },
    '39': { position: { lat: 35.83181511448604, lng: 128.7574944635273 }, vertex: { '37': 60, '38': 60, '40': 60 } },
    '40': { position: { lat: 35.83130626321704, lng: 128.75729598009553 }, vertex: { '36': 60, '39': 60, '41': 70 } },
    '41': { position: { lat: 35.8315280705805, lng: 128.75652886827748 }, vertex: { '40': 70, '42': 180, '52': 90, '60': 50 } },
    '42': { position: { lat: 35.83304156311845, lng: 128.75718332731498 }, vertex: { '38': 70, '43': 30, '45': 50, '46': 120 } },
    '43': { description: '중앙도서관 1층', position: { lat: 35.8331981296624, lng: 128.75748373474022 }, vertex: { '42': 50, '45': 30 } },
    '44': { description: '법정관', position: { lat: 35.83357649753481, lng: 128.75677026710522 }, vertex: { '45': 50 } },
    '45': { position: { lat: 35.83342862984543, lng: 128.75733889544588 }, vertex: { '14': 40, '42': 50, '43': 30, '44': 50 } },
    '46': { position: { lat: 35.833393837407876, lng: 128.75590123133932 }, vertex: { '12': 90, '42': 120, '65': 80 } },
    '47': { position: { lat: 35.83375045918414, lng: 128.75425971939734 }, vertex: { '1': 110, '65': 70, '48': 90 } },
    '48': { position: { lat: 35.83294153434605, lng: 128.7545708556592 }, vertex: { '47': 90, '49': 50, '50': 80 } },
    '49': { position: { lat: 35.832789316384705, lng: 128.75404514266503 }, vertex: { '2': 210, '48': 50, '53': 100, '57': 140 } },
    '50': { position: { lat: 35.832306566056566, lng: 128.75487662750746 }, vertex: { '48': 80, '51': 50, '52': 80 } },
    '51': { description: '상경관', position: { lat: 35.832524021514836, lng: 128.75540770492577 }, vertex: { '50': 50 } },
    '52': { position: { lat: 35.83181076535971, lng: 128.75555254421815 }, vertex: { '41': 90, '50': 80, '59': 50 } },
    '53': { description: '천마아트센터', position: { lat: 35.83196733433225, lng: 128.75370181990186 }, vertex: { '49': 100, '54': 60 } },
    '54': { position: { lat: 35.831432389058904, lng: 128.7536696334196 }, vertex: { '53': 60, '56': 70 } },
    '55': { description: 'IT관', position: { lat: 35.83077566268197, lng: 128.75442601640248 }, vertex: { '56': 80 } },
    '56': { position: { lat: 35.83148892813689, lng: 128.75447966058556 }, vertex: { '54': 70, '55': 70, '57': 30, '58': 60 } },
    '57': { position: { lat: 35.83171508413755, lng: 128.754747881501 }, vertex: { '49': 140, '56': 30, '58': 50 } },
    '58': { position: { lat: 35.83141934154546, lng: 128.75515021287407 }, vertex: { '56': 60, '57': 50, '59': 20 } },
    '59': { position: { lat: 35.831349754893026, lng: 128.75533260309655 }, vertex: { '52': 50, '58': 20, '60': 100 } },
    '60': { position: { lat: 35.83109750276638, lng: 128.75634111373847 }, vertex: { '41': 50, '59': 100, '61': 140 } },
    '61': { position: { lat: 35.830701726261985, lng: 128.75777341342672 }, vertex: { '36': 50, '60': 140 } },
    '62': { position: { lat: 35.834604601430854, lng: 128.76163376801293 }, vertex: { '22': 60, '63': 30 } },
    '63': { description: '음악대학', position: { lat: 35.83482639957421, lng: 128.76144064895385 }, vertex: { '62': 30 } },
    '64': { description: '노천강당', position: { lat: 35.833903533059484, lng: 128.75509762439634 }, vertex: { '65': 30 } },
    '65': { position: { lat: 35.83360344958006, lng: 128.75507080230477 }, vertex: { '46': 80, '47': 70, '64': 30 } },
}