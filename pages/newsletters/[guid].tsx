import { ReactElement } from "react";
// Content Components
import Newsletter from "@newsletter/components/content/Newsletter";
// interfaces
import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import { getNewsletterByGuid } from "@newsletter/services/newsletter.service";
import MainLayout from "@newsletter/layouts/MainLayout";
import NewsletterWrapper from "@newsletter/components/layout/NewsletterWrapper";
import sortData from "@newsletter/utils/sortData";

// import { PageConfig } from "next";

// export const config: PageConfig = {
//   unstable_runtimeJS: false,
// };

export default function Newsletters(data: NewsLetterInterface) {
  return (
    <MainLayout>
      <Newsletter data={data} />
    </MainLayout>
  );
}

Newsletters.getLayout = function (page: ReactElement) {
  return <NewsletterWrapper>{page}</NewsletterWrapper>;
};

// This gets called on every request
export async function getServerSideProps(context: any) {
  const { params } = context;
  try {
    const data = await getNewsletterByGuid(params.guid);
    const sortedData = sortData(data);

    return {
      props: sortedData,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
