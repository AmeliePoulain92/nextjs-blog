export interface NewsLetter {
    title: string,
    subject: string,
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
    // TODO use those boolean flags
    showDescription?: boolean,
    showImage?: boolean,
    showLink?: boolean
}