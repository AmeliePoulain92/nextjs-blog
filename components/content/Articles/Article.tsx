import {
  getIsSponsoredMessageArticle,
  getIsSponsoredPostArticle,
  getIsTopStoryArticle,
} from "@newsletter/utils/getItems";
import {
  NewsLetter as NewsLetterInterface,
  NewsLetterItem as NewsLetterItemInterface,
} from "@newsletter/utils/interfaces";
import TopStoryArticle from "./TopStoryArticle";
import BaseArticle from "./BaseArticle";

interface ArticleProps {
  data: NewsLetterInterface;
  item: NewsLetterItemInterface;
}

export default function Article({ data, item }: ArticleProps) {
  const isTopStoryArticle = getIsTopStoryArticle(data, item);
  const isSponsoredMessageArticle = getIsSponsoredMessageArticle(data, item);
  const isSponsoredPostArticle = getIsSponsoredPostArticle(item);

  return isTopStoryArticle ? (
    <TopStoryArticle item={item} />
  ) : (
    <BaseArticle
      item={item}
      isSponsoredMessage={isSponsoredMessageArticle}
      isSponsoredPost={isSponsoredPostArticle}
    />
  );
}
