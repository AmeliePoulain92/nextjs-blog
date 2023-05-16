import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

interface Props {
  children?: ReactNode;
}

const isChildrenExist = (children: any): boolean => {
  return Boolean(ReactDOMServer.renderToStaticMarkup(children));
};

export default function MainContent({ children }: Props) {
  return (
    <tr>
      {isChildrenExist(children) ? (
        <td
          className="mainContentCell"
          width="100%"
          style={{ padding: "24px 15px 35px" }}
        >
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>{children}</tbody>
          </table>
        </td>
      ) : null}
    </tr>
  );
}
