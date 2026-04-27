import axios from "axios";
import {FinnhubProfileResponse, FinnhubSearchResponse, FinnhubMetricsResponse} from "./company";

export const searchCompanies = async (query: string) => {
    try {
        const response = await axios.get<FinnhubSearchResponse>(
            `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
        );

        return response.data.result.map((item) => ({
            symbol: item.symbol,
            name: item.description,
        }));
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
};

export const getCompanyProfile = async (symbol: string) => {
    try {
        const response = await axios.get<FinnhubProfileResponse>(
            `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    } catch (error: any) {
        console.log(error.message);
        return null;
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const response = await axios.get<FinnhubMetricsResponse>(
            `https://finnhub.io/api/v1/stock/metric?symbol=${query}&metric=all&token=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.metric;
    } catch (error) {
        console.log(error);
        return null;
    }
};