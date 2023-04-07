import { NewsLetter } from "@newsletter/utils/interfaces";

// bypassing SSL certificate locally
if (process.env.NODE_ENV !== 'production') {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}

// TODO add robots.txt to public folder?
export async function getNewsletterByGuid(guid: string): Promise<NewsLetter> {
    const url = `https://api.jsonserve.com/${guid}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
} 