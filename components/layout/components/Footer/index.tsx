import FooterBottom from "./FooterBottom";
import FooterInsider from "./FooterInsider";

export default function Footer() {
  return (
    <tr>
      <td>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <FooterInsider />
            <FooterBottom />
          </tbody>
        </table>
      </td>
    </tr>
  );
}
