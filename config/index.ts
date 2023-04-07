const isDevENV = process.env.NODE_ENV !== 'production';

// bypassing SSL certificate locally
if (isDevENV) {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}

export const API_BASE_URL = isDevENV ? 'https://localhost:5001' : 'https://adminapi.bevnet.com'