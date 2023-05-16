import generateRawHTML from "@newsletter/utils/generateRawHTML";

export default function OutlookInsiderButton() {
  return generateRawHTML(
    `<!--[if mso]>
        <td
          align="center"
          bgcolor="#14A7BD"
          style="padding: 15px 50px"
        >
          <a
            href="https://app.bevnet.com/subscribe"
            target="_blank"
            style="
              display: block;
              width: 100%;
              height: 100%;
              font-size: 18px;
              font-weight: 700;
              line-height: 15px;
              color: #ffffff;
            "
          >
            Become an Insider
          </a>
        </td>
        <!--![endif]-->`
  );
}
