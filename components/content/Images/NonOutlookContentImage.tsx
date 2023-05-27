import generateRawHTML from "@newsletter/utils/generateRawHTML";
import { NewsLetterItem } from "@newsletter/utils/interfaces";

export default function NonOutlookContentImage(item: NewsLetterItem) {
  if (!item?.image) return generateRawHTML("");

  return generateRawHTML(
    `<!--[if !mso]><!-->
    <td align="center">
      <a
        ${item?.link ? `href="${item?.link}"` : ""}
        target="_blank"
        style="display:inline-block; text-decoration:none !important"
      >
      <img
        src="${item?.image}"
        alt="${item?.title}"
        style="max-width:100%; height:auto; vertical-align:middle"
      />
      </a>
    </td>
    <!--<![endif]-->`
  );
}
