import { NewsletterItemAccessType } from "@newsletter/utils/enums";
import {
  getElseTag,
  getEndMergeTag,
  getStartMergeTag,
  getUnsubscribeLink,
} from "@newsletter/utils/mailchimpTags";

export default function FooterActionLinks() {
  return (
    <tr>
      <td
        align="center"
        style={{
          paddingBottom: 43,
        }}
      >
        <p
          style={{
            margin: 0,
          }}
        >
          {getStartMergeTag(NewsletterItemAccessType.Subscribers)}
          <a
            href="https://app.bevnet.com/subscription"
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Manage subscription
          </a>{" "}
          {getElseTag()}
          <a
            href="https://app.bevnet.com/subscribe"
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Become an Insider
          </a>{" "}
          {getEndMergeTag(NewsletterItemAccessType.Subscribers)}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href="https://www.bevnet.com/submit/news"
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Submit News
          </a>{" "}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href="https://www.bevnet.com/advertise"
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Advertise
          </a>{" "}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href={getUnsubscribeLink()}
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Unsubscribe
          </a>
        </p>
      </td>
    </tr>
  );
}
