import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface JobsItemProps {
  data: NewsLetterItemInterface;
}

export default function JobsItem({ data }: JobsItemProps) {
  return (
    <tr>
      <td style={{ paddingBottom: 20 }}>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td style={{ width: 7, paddingRight: 12, color: "#B8B8B8" }}>
                &#9670;
              </td>
              <td>
                <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                  <tbody>
                    <tr>
                      <td>
                        <h4
                          style={{
                            margin: 0,
                            fontSize: 20,
                            fontWeight: 700,
                            lineHeight: "23.22px",
                            paddingBottom: 5,
                          }}
                        >
                          {data?.showLink && data?.link ? (
                            <a
                              href={data?.link}
                              style={{
                                textDecoration: "none",
                                fontWeight: 400,
                                color: "#000000",
                              }}
                            >
                              {data?.title}
                            </a>
                          ) : (
                            data.title
                          )}
                        </h4>
                      </td>
                    </tr>
                    {data?.showDescription && data?.description ? (
                      <tr>
                        <td>{data?.description}</td>
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
