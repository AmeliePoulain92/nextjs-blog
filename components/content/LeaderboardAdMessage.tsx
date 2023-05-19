import { NewsletterItemType } from "@newsletter/utils/enums";
import { getItemsByType } from "@newsletter/utils/getItems";
import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import SectionTitle from "./SectionTitle";

interface LeaderboardAdMessageProps {
  data: NewsLetterInterface;
}

export default function LeaderboardAdMessage({
  data,
}: LeaderboardAdMessageProps) {
  const getItems = getItemsByType(
    data,
    NewsletterItemType.LeaderboardAdMessage
  );
  const currentData = getItems && getItems.length ? getItems[0] : null;

  return currentData ? (
    <tr>
      <td>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <SectionTitle
              item={{ id: 1, title: "&#10024; Sponsored by &#10024;" }}
            />
            <tr>
              <td>
                <h3
                  style={{
                    margin: 0,
                  }}
                >
                  <a
                    href={currentData?.link || undefined}
                    target="_blank"
                    style={{
                      display: "block",
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: "23.22px",
                      textDecoration: "none !important",
                      color: "#000000",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: currentData?.title || "",
                    }}
                  ></a>
                </h3>
              </td>
            </tr>
            {currentData?.description ? (
              <tr>
                <td
                  className="description"
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "20.9px",
                  }}
                  dangerouslySetInnerHTML={{ __html: currentData?.description }}
                ></td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </td>
    </tr>
  ) : null;
}
