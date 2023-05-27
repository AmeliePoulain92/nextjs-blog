import { NewsletterItemImagePosition, NewsletterItemType } from "./enums";
import { NewsLetter, NewsLetterItem } from "./interfaces";
import { articleItems } from "./itemTypes";

export function getItemsByType(data: NewsLetter, type: NewsLetterItem['itemType']): NewsLetterItem[] {
    if (!data || !data.items) return [];
    return data?.items.filter(item => type === item.itemType) || []
}

export function omitItems(data: NewsLetter, types: NewsLetterItem['itemType'][]): NewsLetterItem[] {
    if (!data || !data.items) return [];
    return data?.items.filter(item => !types.includes(item.itemType)) || []
}

export function getArticles(data: NewsLetter): NewsLetterItem[] {
    if (!data || !data.items) return [];
    return data?.items.filter(item => item?.itemType && articleItems.includes(item?.itemType));
}

export function isArticleItem(item: NewsLetterItem): boolean {
    return Boolean(item?.itemType && articleItems.includes(item?.itemType));
}

export function isCustomItem(item: NewsLetterItem): boolean {
    return Boolean(item.itemType === NewsletterItemType.Custom);
}

export function isJobItem(item: NewsLetterItem): boolean {
    return Boolean(item.itemType === NewsletterItemType.FeaturedJobs || item.itemType === NewsletterItemType.StandardJobs);
}

export function getSponsoredMessageArticleIndex(data: NewsLetter): number {
    if (!data || !data.items) return -1;
    return data?.items.findIndex(item => item?.itemType && item?.itemType === NewsletterItemType.SponsoredMessage);
}

export function getSponsoredMessageArticle(data: NewsLetter): NewsLetterItem | undefined {
    if (!data || !data.items) return undefined;
    return data?.items.find(item => item?.itemType && item?.itemType === NewsletterItemType.SponsoredMessage);
}

export function getIsSponsoredMessageArticle(data: NewsLetter, item: NewsLetterItem): boolean {
    if (!data || !data.items || !item) return false;
    const sponsoredMessageArticle = getSponsoredMessageArticle(data);

    return Boolean(sponsoredMessageArticle && sponsoredMessageArticle.id === item.id);
}

export function isImagePlacedBelowTheDescription(item: NewsLetterItem): boolean {
    return item?.imagePosition === NewsletterItemImagePosition.Below
}

export function getIsSponsoredPostArticle(item: NewsLetterItem): boolean {
    if (!item) return false;

    return item?.itemType === NewsletterItemType.SponsoredPosts;
}

export function get3rdArticleIndex(data: NewsLetter): number {
    if (!data || !data.items) return -1;
    const articles = getArticles(data);
    if (articles && articles.length >= 3) {
        const thirdArticle = articles[2];
        return data?.items.findIndex(item => item.id === thirdArticle.id);
    } else {
        return -1;
    }
}
