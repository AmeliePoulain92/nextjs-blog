import { API_BASE_URL } from "@newsletter/config";
import { NewsLetter } from "@newsletter/utils/interfaces";

// TODO remove use editionId:10848 to create more items
export async function getNewsletterByGuid(guid: string): Promise<NewsLetter> {
    const url = `${API_BASE_URL}/Newsletters/public/${guid}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
} 