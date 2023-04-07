import { API_BASE_URL } from "@newsletter/config";
import { NewsLetter } from "@newsletter/utils/interfaces";

// TODO remove use editionId:10848 to create more items
export async function getNewsletterByGuid(guid: string): Promise<NewsLetter> {
    const url = `${process.env.API_BASE_URL}/${guid}`;
    const res = await fetch(url, {
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": API_BASE_URL,
        },
    });
    const data = await res.json();

    return data;
} 