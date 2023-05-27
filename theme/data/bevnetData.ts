import { NewsSites } from "@newsletter/utils/enums";
import { ThemeData as ThemeDataInterface } from "@newsletter/utils/interfaces";
import { bevnetAndNoshInsiderDescription, bevnetAndNoshInsiderLogo } from "./commonData";

export const bevnetData: ThemeDataInterface = {
    [NewsSites.Bevnet]: {
        targetSite: NewsSites.Bevnet,
        siteName: 'Bevnet',
        websiteLink: 'https://www.bevnet.com/',
        email: 'hello@bevnet.com',
        linkBorderColor: '#ff3556',
        header: {
            logo: {
                src: 'https://d2btcxja5g5zgs.cloudfront.net/assets/img/BevNET_Red.png',
                width: 135,
                height: 26
            },
            textColor: '#14a7bd',
            dateFontWeight: 400,
            titleColor: '#ffffff',
            titleBackground: '#006177'
        },
        footer: {
            insider: {
                logo: bevnetAndNoshInsiderLogo,
                description: bevnetAndNoshInsiderDescription,
                buttonColor: '#ffffff',
                buttonBackground: '#14A7BD'
            },
            actionLinks: {
                manageSubscription: 'https://app.bevnet.com/subscription',
                becomeAnInsider: 'https://app.bevnet.com/subscribe',
                submitNews: 'https://www.bevnet.com/submit/news',
                advertise: 'https://www.bevnet.com/advertise',
            },
            socials: {
                facebook: 'https://www.facebook.com/bevnetcom',
                twitter: 'https://twitter.com/BevNET',
                instagram: 'https://www.instagram.com/bevnet/',
                linkedin: 'https://www.linkedin.com/company/bevnet.com-inc',
                youtube: 'https://www.youtube.com/bevnet'
            },
        },
    }
}