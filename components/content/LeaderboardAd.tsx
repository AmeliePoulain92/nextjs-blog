import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsletterItemType } from "@newsletter/utils/enums";
import { getItemsByType } from "@newsletter/utils/getItems";
import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";

interface LeaderboardAdProps {
  data: NewsLetterInterface;
}

export default function LeaderboardAd({ data }: LeaderboardAdProps) {
  const getItems = getItemsByType(data, NewsletterItemType.LeaderboardAd);
  const currentData = getItems && getItems.length ? getItems[0] : null;

  return (
    <tr>
      <MailchimpTagsWrapper accessType={currentData?.accessType}>
        <td align="center" width="100%" style={{ paddingBottom: 31 }}>
          <a
            href={currentData?.link}
            style={{ display: "block", textDecoration: "none" }}
          >
            <img
              src={currentData?.image}
              alt="Banner Ad Hold"
              width={530}
              height={120}
              style={{
                maxWidth: "100%",
                height: "auto",
                verticalAlign: "middle",
              }}
            />
          </a>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
