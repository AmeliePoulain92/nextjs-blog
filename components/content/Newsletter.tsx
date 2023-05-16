import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import LeaderboardAdMessage from "./LeaderboardAdMessage";
import NewsletterItem from "./NewsletterItem";
import { omitItems } from "@newsletter/utils/getItems";
import { staticOrderedItems } from "@newsletter/utils/itemTypes";

interface NewsLetterProps {
  data: NewsLetterInterface;
}

export default function Newsletter({ data }: NewsLetterProps) {
  return (
    <>
      {/* get only dynamic items, ordered by item.orderBy */}
      {omitItems(data, staticOrderedItems).map((item) => (
        <NewsletterItem data={data} item={item} key={item.id} />
      ))}
      <LeaderboardAdMessage data={data} />
    </>
  );
}
