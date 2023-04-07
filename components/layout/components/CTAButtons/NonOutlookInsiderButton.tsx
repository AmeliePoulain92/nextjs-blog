import generateRawHTML from "@newsletter/utils/generateRawHTML";

export default function NonOutlookInsiderButton() {
  return generateRawHTML(
    `
    <!--[if !mso]><!-->
    <td>
        <a
            class="becomeAnInsiderButton"
            href="https://app.bevnet.com/subscribe"
            style="
                display: block;
                padding: 15px 30px;
                font-size: 18px;
                font-weight: 700;
                line-height: 15px;
                text-decoration: none;
                color: #ffffff;
                background-color: #14a7bd;
            ">
            Become an Insider
        </a>
    </td>
    <!--<![endif]-->
    `
  );
}
