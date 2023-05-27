import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import NewsletterItem from "./NewsletterItem";

interface NewsLetterProps {
  data: NewsLetterInterface;
}

export default function Newsletter({ data }: NewsLetterProps) {
  return (
    <>
      {data?.items.map((item) => (
        <NewsletterItem data={data} item={item} key={item.id} />
      ))}
    </>
  );
}
