import { NewsletterPreview } from "@newsletter/utils/interfaces";
import NewsletterPreviewItem from "./models/NewsletterPreviewItem";

interface NewsletterPreviewItems {
  items: Array<NewsletterPreview>;
  isInsider: boolean;
}

const NewsletterList = ({ items, isInsider }: NewsletterPreviewItems) => {
  return (
    <>
      {items.map((item) => (
        <NewsletterPreviewItem
            key={item.id}
            item={item}
            isInsider={isInsider}
        />
      ))}
    </>
  );
};

export default NewsletterList;