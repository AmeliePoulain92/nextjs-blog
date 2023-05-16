import { NewsSites } from "./enums";
import { Theme as ThemeInterface } from "./interfaces";

interface ThemeDataInterface {
    [key: number]: ThemeInterface
}

export const theme: ThemeDataInterface = {
    [NewsSites.Bevnet]: {
        targetSite: NewsSites.Bevnet,
        websiteLink: 'https://www.bevnet.com/',
        header: {
            logo: 'https://d2btcxja5g5zgs.cloudfront.net/assets/img/BevNET_Red.png',
            textColor: '#14a7bd',
            dateFontWeight: 400,
            titleColor: '#ffffff',
            titleBackground: '#006177'
        },
        footer: {
            insider: {
                buttonBackground: '#14A7BD'
            },
        },
        linkBorderColor: '#ff3556'
    }
}