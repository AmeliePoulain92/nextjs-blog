import { isImagePlacedBelowTheDescription } from "@newsletter/utils/getItems";
import NonOutlookContentImage from "./NonOutlookContentImage";
import OutlookContentImage from "./OutlookContentImage";
import { NewsLetterItem } from "@newsletter/utils/interfaces";

interface ContentImageProps {
  item: NewsLetterItem;
  isShow: boolean;
}

export default function ContentImage({ item, isShow }: ContentImageProps) {
  return item?.image && isShow ? (
    <tr>
      <td>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {/* For Outlook only */}
            <tr dangerouslySetInnerHTML={OutlookContentImage(item)}></tr>
            {/* For non-Outlook clients */}
            <tr dangerouslySetInnerHTML={NonOutlookContentImage(item)}></tr>
          </tbody>
        </table>
      </td>
    </tr>
  ) : null;
}
