import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import JobsItem from "./JobsItem";
import { getItemsByType } from "@newsletter/utils/getItems";
import { NewsletterItemType } from "@newsletter/utils/enums";

interface FeaturedJobsProps {
  data: NewsLetterInterface;
}

export default function FeaturedJobs({ data }: FeaturedJobsProps) {
  const getItems = getItemsByType(data, NewsletterItemType.FeaturedJobs);

  // TODO add mailchimp custom logic here
  return getItems && getItems.length ? (
    <tr>
      <td style={{ paddingBottom: 15 }}>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td align="center" style={{ paddingBottom: 15 }}>
                <h2
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: "23px",
                    textTransform: "uppercase",
                    margin: 0,
                    color: "#14a7bd",
                  }}
                >
                  &#128193; Featured Jobs &#128193;
                </h2>
              </td>
            </tr>
            {getItems.map((item) => (
              <JobsItem data={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  ) : null;
}
