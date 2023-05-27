import { NewsletterItemAccessType, NewsletterItemImagePosition, NewsletterItemType } from "./enums"

export interface NewsLetter {
    title?: string,
    subject?: string,
    previewText?: string,
    targetSite: number,
    items: NewsLetterItem[]
}

export interface NewsLetterItem {
    id: number,
    title?: string,
    description?: string,
    image?: string,
    link?: string,
    companyName?: string,
    accessType?: number,
    itemType?: number,
    orderBy?: number,
    imagePosition?: NewsletterItemImagePosition
}

export interface NewsletterPreview {
    id: number,
    guid: string,
    title?: string,
    previewText?: string
}

export interface GridNewsletterPreview {
    total: number,
    result: NewsletterPreview[]
}

export interface GridNewsletterPreviewRequest {
    searchText?: string,
    pageSize?: number,
    page?: number,
    sortBy?: string,
    sortDirection?: string
}

export interface ThemeData {
    [key: number]: Theme
}

export interface Theme {
    targetSite: NewsLetter["targetSite"],
    siteName: string,
    websiteLink: string,
    email: string,
    linkBorderColor: string,
    header: {
        logo: {
            src: string,
            width: number,
            height: number
        },
        textColor: string,
        dateFontWeight: number,
        titleColor: string,
        titleBackground: string
    },
    footer: {
        insider: {
            logo: {
                src: string,
                width: number,
                height: number
            },
            description: string,
            buttonColor: string,
            buttonBackground: string
        },
        actionLinks: {
            manageSubscription: string,
            becomeAnInsider: string,
            submitNews: string,
            advertise: string
        },
        socials: {
            facebook: string,
            twitter: string,
            instagram: string,
            linkedin: string,
            youtube: string
        }
    }
}