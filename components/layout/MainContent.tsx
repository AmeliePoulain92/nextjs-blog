import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function MainContent({ children }: Props) {
  return (
    <tr>
      {children ? (
        <td
          className="mainContentCell"
          width="100%"
          style={{ padding: "24px 15px 35px" }}
        >
          <table cellPadding={0} cellSpacing={0} border={0}>
            <tbody>{children}</tbody>
          </table>
        </td>
      ) : null}
    </tr>
  );
}
