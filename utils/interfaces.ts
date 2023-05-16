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
    orderBy?: number
}

export interface Theme {
    targetSite: NewsLetter["targetSite"],
    websiteLink: string,
    header: {
        logo: string,
        textColor: string,
        dateFontWeight: number,
        titleColor: string,
        titleBackground: string
    },
    footer: {
        insider: {
            buttonBackground: string
        },
    },
    linkBorderColor: string
}