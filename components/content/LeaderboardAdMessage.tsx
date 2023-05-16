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
            <SectionTitle title="&#10024; Sponsored by &#10024;" />
            <tr>
              <td>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: "23.22px",
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: currentData?.title || "" }}
                ></h3>
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
            {currentData?.link ? (
              <tr>
                <td style={{ paddingBottom: 10 }}>
                  <a
                    href={currentData?.link}
                    target="_blank"
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: "21px",
                      textDecoration: "none !important",
                      borderBottom: "2px solid #ff3556",
                      color: "#000000",
                    }}
                  >
                    Learn More
                  </a>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </td>
    </tr>
  ) : null;
}
