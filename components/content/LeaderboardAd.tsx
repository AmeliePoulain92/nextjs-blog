import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface LeaderboardAdProps {
  item: NewsLetterItemInterface;
}

export default function LeaderboardAd({ item }: LeaderboardAdProps) {
  return (
    <tr>
      <MailchimpTagsWrapper accessType={item?.accessType}>
        {item?.image ? (
          <td align="center" width="100%" style={{ paddingBottom: 31 }}>
            <a
              href={item?.link || undefined}
              target="_blank"
              style={{ display: "block", textDecoration: "none" }}
            >
              <img
                src={item?.image}
                alt="Banner Ad Hold"
                width="100%"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                }}
              />
            </a>
          </td>
        ) : null}
      </MailchimpTagsWrapper>
    </tr>
  );
}
