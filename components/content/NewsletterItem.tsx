import {
  NewsLetter as NewsLetterInterface,
  NewsLetterItem as NewsLetterItemInterface,
} from "@newsletter/utils/interfaces";
import CustomContent from "./CustomContent";
import Article from "./Articles/Article";
import { isArticleItem, isCustomItem } from "@newsletter/utils/getItems";

interface NewsLetterProps {
  data: NewsLetterInterface;
  item: NewsLetterItemInterface;
}

export default function NewsletterItem({ data, item }: NewsLetterProps) {
  return (
    <>
      {isCustomItem(item) && <CustomContent item={item} key={item.id} />}
      {isArticleItem(item) && <Article data={data} item={item} key={item.id} />}
    </>
  );
}
