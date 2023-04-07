import { ReactElement } from "react";
import {PageConfig} from 'next';

export const config: PageConfig = {
	unstable_runtimeJS: false,
  unstable_excludeFiles: ['_next/static/chunks/react-refresh.js']
};

// Content Components
import Newsletter from "@newsletter/components/content/Newsletter";
// interfaces
import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
// import { getNewsletterByGuid } from "@newsletter/services/newsletter.service";
import MainLayout from "@newsletter/layouts/MainLayout";
import NewsletterWrapper from "@newsletter/components/layout/NewsletterWrapper";
import sortData from "@newsletter/utils/sortData";

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
  const isDevENV = process.env.NODE_ENV !== 'production';
  const API_BASE_URL = isDevENV ? 'https://localhost:5001' : 'https://api.jsonserve.com/E_PBU4';
  async function getNewsletterByGuid(guid: string) {
    const url = `${API_BASE_URL}/Newsletters/public/${guid}`;
    const res = await fetch(url, {
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": API_BASE_URL,
        },
    });
    const data = await res.json();

    return data;
} 

  const { params } = context;
  try {
    const data = await getNewsletterByGuid(params.guid);
    // const data = (await fetch('https://api.jsonserve.com/E_PBU4')).json();
    // @ts-ignore
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
