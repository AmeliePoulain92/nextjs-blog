import { NewsSites } from "@newsletter/utils/enums";
import { ThemeData as ThemeDataInterface } from "@newsletter/utils/interfaces";
import { getUpdateSubscriptionLink } from "@newsletter/utils/mailchimpTags";

export const brewboundData: ThemeDataInterface = {
    [NewsSites.Brewbound]: {
        targetSite: NewsSites.Brewbound,
        siteName: 'Brewbound',
        websiteLink: 'https://www.brewbound.com/',
        email: 'hello@brewbound.com',
        linkBorderColor: '#3EFF89',
        header: {
            logo: {
                src: 'https://d2btcxja5g5zgs.cloudfront.net/assets/img/Brewbound_Black.png',
                width: 149,
                height: 26
            },
            textColor: '#231F20',
            dateFontWeight: 400,
            titleColor: '#3EFF89',
            titleBackground: '#231F20'
        },
        footer: {
            insider: {
                logo: {
                    src: 'https://d2btcxja5g5zgs.cloudfront.net/assets/images/Insider-Logo-Brewbound.png',
                    width: 231,
                    height: 73
                },
                description: `Become an Insider to unlock every story on
                <a href="https://www.brewbound.com/" target="_blank" style="font-weight: normal; text-decoration: none; color: rgb(255, 255, 255);">Brewbound.com</a>. Plus, you can access job board discounts, watch interviews with top CPG experts, and tap into our community of engaged beer professionals.`,
                buttonColor: '#231F20',
                buttonBackground: '#3EFF89'
            },
            actionLinks: {
                manageSubscription: getUpdateSubscriptionLink(),
                becomeAnInsider: 'https://app.bevnet.com/subscribe/brewbound',
                submitNews: 'https://www.brewbound.com/submit/news',
                advertise: 'https://www.brewbound.com/advertise/',
            },
            socials: {
                facebook: 'https://www.facebook.com/brewbound',
                twitter: 'https://twitter.com/brewbound',
                instagram: 'https://www.instagram.com/brewbound/',
                linkedin: 'https://www.linkedin.com/company/brewbound/',
                youtube: 'https://www.youtube.com/brewbound'
            },
        },
    }
}