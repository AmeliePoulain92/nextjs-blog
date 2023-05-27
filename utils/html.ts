import { NewsLetterItem } from "./interfaces";

export function getFormattedDescription(item: NewsLetterItem): string {
    const linkNode = item?.link ? `
        <a
            href="${item?.link}"
            target="_blank"
            >
            Learn more
        </a>
    ` : '';

    if (item?.description?.endsWith("</p>") || item?.description?.endsWith("</p>\n")) {
        return item?.description?.replace("</p>", ` ${linkNode} </p>`);
    }

    return `${item?.description} ${linkNode}` || "";
}