import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface SectionTitleProps {
  item: NewsLetterItemInterface
}

export default function SectionTitle({ item }: SectionTitleProps) {
  return item?.title ? (
    <tr>
      <MailchimpTagsWrapper accessType={item?.accessType}>
        <td align="center" style={{ paddingBottom: 15 }}>
          <h2
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 21,
              fontWeight: 700,
              lineHeight: "23px",
              textTransform: "uppercase",
              margin: 0,
              color: "#14a7bd",
            }}
            dangerouslySetInnerHTML={{ __html: item?.title || "" }}
          ></h2>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  ) : null;
}
