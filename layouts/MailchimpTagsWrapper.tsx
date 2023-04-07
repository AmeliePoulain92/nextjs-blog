import { ReactNode } from "react";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";
import {
  getStartMergeTag,
  getEndMergeTag,
} from "@newsletter/utils/mailchimpTags";

interface MailchimpTagsLayoutProps {
  accessType: NewsLetterItemInterface["accessType"];
  isSimpleLayout?: boolean;
  children?: ReactNode;
}

export default function MailchimpTagsWrapper({
  accessType,
  isSimpleLayout = false,
  children,
}: MailchimpTagsLayoutProps) {
  return (
    <>
      {isSimpleLayout ? (
        <>
          {getStartMergeTag(accessType)} children {getEndMergeTag(accessType)}
        </>
      ) : (
        <td>
          {getStartMergeTag(accessType)}
          <table
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            className="mailchimp wrapper"
          >
            <tbody>
              <tr>{children}</tr>
            </tbody>
          </table>
          {getEndMergeTag(accessType)}
        </td>
      )}
    </>
  );
}
