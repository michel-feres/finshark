import axios from "axios";
import {FinnhubProfileResponse, FinnhubSearchResponse, FinnhubMetricsResponse, FinnhubFinancialsResponse, FinnhubBalanceSheet, FinnhubCashFlow} from "./company";

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

        const metric = response.data.metric;

        return {
            marketCapTTM: metric.marketCapitalization ?? 0,
            currentRatioTTM: metric.currentRatioAnnual ?? 0,
            roeTTM: metric.roeTTM ?? 0,
            cashPerShareTTM: metric.cashPerShareTTM ?? 0,
        };

    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getIncomeStatement = async (query: string) => {
    try {
        const response = await axios.get<FinnhubFinancialsResponse>(
            `https://finnhub.io/api/v1/stock/financials-reported?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
        );

        return response.data.data.map((item: any) => ({
            date: item.endDate,
            revenue: item.report?.ic?.Revenue ?? 0,
            netIncome: item.report?.ic?.NetIncomeLoss ?? 0,
        }));
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const response = await axios.get<FinnhubBalanceSheet>(
            `https://finnhub.io/api/v1/stock/financials-reported?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.data.map((item: any) => ({
            date: item.endDate,
            totalAssets: item.report?.bs?.Assets ?? 0,
            totalLiabilities: item.report?.bs?.Liabilities ?? 0,
        }));
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
};

export const getCashFlow = async (query: string) => {
    try {
        const response = await axios.get<FinnhubCashFlow>(
            `https://finnhub.io/api/v1/stock/financials-reported?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
        );
        return response.data.data.map((item: any) => ({
            date: item.endDate,
            operatingCashFlow: item.report?.cf?.NetCashProvidedByUsedInOperatingActivities ?? 0,
            freeCashFlow: item.report?.cf?.FreeCashFlow ?? 0,
        }));
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
};

export const getCompData = async (query: string) => {
    try {
        const response = await axios.get<string[]>(
            `https://finnhub.io/api/v1/stock/peers?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getTenK = async (query: string) => {
    try {
        const response = await axios.get<any>(
            `https://finnhub.io/api/v1/stock/filings?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
        );
        const filings = response.data?.filings;

        if (!filings) {
            console.log("No filings found:", response.data);
            return [];
        }

        return filings.map((item: any) => ({
            date: item.filedDate,
            type: item.form,
            link: item.finalLink,
        }));
    } catch (error) {
        console.log(error);
        return [];
    }
};


export const getQuote = async (symbol: string) => {
    try {
        const response = await axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    } catch (error: any) {
        console.log(error.message);
        return null;
    }
};