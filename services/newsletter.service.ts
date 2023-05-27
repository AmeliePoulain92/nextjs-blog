import { GridNewsletterPreview, GridNewsletterPreviewRequest, NewsLetter, NewsletterPreview } from "@newsletter/utils/interfaces";

// bypassing SSL certificate locally
if (process.env.NODE_ENV !== 'production') {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}

export async function getNewsletterByGuid(guid: string): Promise<NewsLetter> {
    const url = `${process.env.API_BASE_URL}/Newsletters/public/${guid}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

// TODO rename
export async function getNewslettersBySearch({
    searchText,
    pageSize,
    page,
    // TODO use
    sortBy,
    sortDirection
}: GridNewsletterPreviewRequest): Promise<GridNewsletterPreview> {
    // TODO adjust query params
    const url = `https://adminapi.bevnet.com/Newsletters/public/search?SearchText=${searchText}&PageSize=${pageSize}&Page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
} 