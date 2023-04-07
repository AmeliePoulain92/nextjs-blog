import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem } from "@newsletter/utils/interfaces";

interface CustomContentProps {
  item: NewsLetterItem;
}

export default function CustomContent({ item }: CustomContentProps) {
  return (
    // TODO check if we need a condition here?
    item?.showDescription && item?.description ? (
      <tr>
        <MailchimpTagsWrapper accessType={item?.accessType}>
          {/* TODO deal with html/plain text */}
          <td style={{ paddingBottom: 25 }}>{item?.description}</td>
        </MailchimpTagsWrapper>
      </tr>
    ) : null
  );
}
