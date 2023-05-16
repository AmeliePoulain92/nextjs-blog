import {
  NewsLetter as NewsLetterInterface,
  NewsLetterItem as NewsLetterItemInterface,
} from "@newsletter/utils/interfaces";
import CustomContent from "./CustomContent";
import Article from "./Article";
import {
  getIsSponsoredMessageArticle,
  getIsSponsoredPostArticle,
  isArticleItem,
  isCustomItem,
  isJobItem,
} from "@newsletter/utils/getItems";
import { NewsletterItemType } from "@newsletter/utils/enums";
import LeaderboardAd from "./LeaderboardAd";
import JobsItem from "./JobsItem";
import SectionTitle from "./SectionTitle";

interface NewsLetterProps {
  data: NewsLetterInterface;
  item: NewsLetterItemInterface;
}

export default function NewsletterItem({ data, item }: NewsLetterProps) {
  const isSponsoredMessage = getIsSponsoredMessageArticle(data, item);
  const isSponsoredPost = getIsSponsoredPostArticle(item);

  return (
    <>
      {item?.itemType === NewsletterItemType.LeaderboardAd && (
        <LeaderboardAd item={item} key={item.id} />
      )}
      {item?.itemType === NewsletterItemType.SectionTitle && (
        <SectionTitle title={item?.title} key={item.id} />
      )}
      {isJobItem(item) && <JobsItem item={item} key={item.id} />}
      {isCustomItem(item) && <CustomContent item={item} key={item.id} />}
      {isArticleItem(item) && (
        <Article
          item={item}
          isSponsoredMessage={isSponsoredMessage}
          isSponsoredPost={isSponsoredPost}
          key={item.id}
        />
      )}
    </>
  );
}
