import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import JobsItem from "./JobsItem";
import { getItemsByType } from "@newsletter/utils/getItems";
import { NewsletterItemType } from "@newsletter/utils/enums";

interface StandardJobsProps {
  data: NewsLetterInterface;
}

export default function StandardJobs({ data }: StandardJobsProps) {
  const getItems = getItemsByType(data, NewsletterItemType.StandardJobs);

  // TODO add mailchimp custom logic here
  return getItems && getItems.length ? (
    <tr>
      <td style={{ paddingBottom: 15 }}>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td align="left" style={{ paddingBottom: 15 }}>
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
                  JOB LISTINGS
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
