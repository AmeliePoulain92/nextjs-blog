import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import LeaderboardAdMessage from "./LeaderboardAdMessage";
import FeaturedJobs from "./Jobs/FeaturedJobs";
import StandardJobs from "./Jobs/StandardJobs";
import NewsletterItem from "./NewsletterItem";
import LeaderboardAd from "./LeaderboardAd";
import { omitItems } from "@newsletter/utils/getItems";
import { staticOrderedItems } from "@newsletter/utils/itemTypes";

interface NewsLetterProps {
  data: NewsLetterInterface;
}

export default function Newsletter({ data }: NewsLetterProps) {
  return (
    <>
      <LeaderboardAd data={data} />
      {/* get only dynamic items, ordered by item.orderBy */}
      {omitItems(data, staticOrderedItems)
        // TODO add accessType condition
        .map((item) => (
          <NewsletterItem data={data} item={item} key={item.id} />
        ))}
      <FeaturedJobs data={data} />
      <StandardJobs data={data} />
      <LeaderboardAdMessage data={data} />
    </>
  );
}
