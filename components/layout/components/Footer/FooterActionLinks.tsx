import { NewsletterItemAccessType } from "@newsletter/utils/enums";
import { getElseTag, getStartMergeTag } from "@newsletter/utils/mailchimpTags";

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
          {/* TODO insert real links */}
          {getStartMergeTag(NewsletterItemAccessType.Subscribers)}
          <a
            href="https://app.bevnet.com/subscription"
            style={{
              display: "inline-block",
              fontSize: 14,
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
            style={{
              display: "inline-block",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Become an Insider
          </a>{" "}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href="https://www.bevnet.com/submit/news"
            style={{
              display: "inline-block",
              fontSize: 14,
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
            style={{
              display: "inline-block",
              fontSize: 14,
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
            href="*|UNSUB|*"
            style={{
              display: "inline-block",
              fontSize: 14,
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
