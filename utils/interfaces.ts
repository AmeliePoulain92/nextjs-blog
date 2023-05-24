export interface NewsLetter {
    title?: string,
    subject?: string,
    previewText?: string,
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