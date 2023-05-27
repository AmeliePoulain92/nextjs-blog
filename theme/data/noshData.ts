import { NewsSites } from "@newsletter/utils/enums";
import { ThemeData as ThemeDataInterface } from "@newsletter/utils/interfaces";
import { bevnetAndNoshInsiderDescription, bevnetAndNoshInsiderLogo } from "./commonData";
import { getUpdateSubscriptionLink } from "@newsletter/utils/mailchimpTags";

export const noshData: ThemeDataInterface = {
    [NewsSites.Nosh]: {
        targetSite: NewsSites.Nosh,
        siteName: 'Nosh',
        websiteLink: 'https://www.nosh.com/',
        email: 'hello@nosh.com',
        linkBorderColor: '#51BA6D',
        header: {
            logo: {
                src: 'https://d2btcxja5g5zgs.cloudfront.net/assets/img/NOSH_Yellow.png',
                width: 124,
                height: 30
            },
            textColor: '#FBC549',
            dateFontWeight: 700,
            titleColor: '#ffffff',
            titleBackground: '#14A7BD'
        },
        footer: {
            insider: {
                logo: bevnetAndNoshInsiderLogo,
                description: bevnetAndNoshInsiderDescription,
                buttonColor: '#ffffff',
                buttonBackground: '#14A7BD'
            },
            actionLinks: {
                manageSubscription: getUpdateSubscriptionLink(),
                becomeAnInsider: 'https://app.bevnet.com/subscribe',
                submitNews: 'https://www.nosh.com/submit/news',
                advertise: 'https://www.nosh.com/advertise/',
            },
            socials: {
                facebook: 'https://www.facebook.com/noshdotcom',
                twitter: 'https://twitter.com/noshdotcom',
                instagram: 'https://www.instagram.com/noshdotcom/',
                linkedin: 'https://www.linkedin.com/company/noshdotcom/',
                youtube: 'https://www.youtube.com/noshdotcom'
            },
        },
    }
}