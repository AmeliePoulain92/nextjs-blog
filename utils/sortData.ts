import { getSponsoredMessageArticle, getSponsoredMessageArticleIndex, get3rdArticleIndex } from "./getItems";
import { NewsLetter } from "./interfaces";

export default function sortData(data: NewsLetter): NewsLetter {
    const sponsoredMessageArticle = getSponsoredMessageArticle(data);
    const sponsoredMessageArticleIndex = getSponsoredMessageArticleIndex(data);
    const thirdArticleIndex = get3rdArticleIndex(data);

    if (sponsoredMessageArticle) {
        // removes sponsoredMessage article from its position
        data.items.splice(sponsoredMessageArticleIndex, 1);
        // inserts sponsoredMessage article to the position of the third article
        data.items.splice(thirdArticleIndex, 0, sponsoredMessageArticle);
    }

    return data;
}