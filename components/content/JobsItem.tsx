import { NewsletterItemType } from "@newsletter/utils/enums";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface JobsItemProps {
  item: NewsLetterItemInterface;
}

export default function JobsItem({ item }: JobsItemProps) {
  const isFeatured = item?.itemType === NewsletterItemType.FeaturedJobs;

  return (
    <tr>
      <td style={{ paddingBottom: 20 }}>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td>
                <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                  <tbody>
                    <tr>
                      <td style={{ paddingBottom: 5 }}>
                        <h4
                          style={{
                            margin: 0,
                          }}
                        >
                          <a
                            href={item?.link || undefined}
                            target="_blank"
                            style={{
                              fontSize: isFeatured ? 20 : 18,
                              textDecoration: "none",
                              fontWeight: 700,
                              lineHeight: isFeatured ? "23.22px" : "20.9px",
                              color: "#000000",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item?.title || "",
                            }}
                          ></a>
                        </h4>
                      </td>
                    </tr>
                    {item?.description ? (
                      <tr>
                        <td
                          className="description"
                          style={{
                            fontSize: isFeatured ? 18 : 16,
                            fontWeight: 400,
                            lineHeight: isFeatured ? "20.9px" : "18.58px",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
