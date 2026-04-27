import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FinnhubMetricsResponse } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Tile from "../Tile/Tile";

type Props = {};

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: FinnhubMetricsResponse) => company.marketCapTTM,
    },
    {
        label: "Current Ratio",
        render: (company: FinnhubMetricsResponse) => company.currentRatioTTM,
    },
    {
        label: "Return On Equity",
        render: (company: FinnhubMetricsResponse) => company.roeTTM,
    },
    {
        label: "Cash Per Share",
        render: (company: FinnhubMetricsResponse) => company.cashPerShareTTM,
    },
    {
        label: "Current Ratio",
        render: (company: FinnhubMetricsResponse) => company.currentRatioTTM,
    },
    {
        label: "Return On Equity",
        render: (company: FinnhubMetricsResponse) => company.roeTTM,
    },
];

const CompanyProfile = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<FinnhubMetricsResponse["metric"]>();
    useEffect(() => {
        const getCompanyKeyRatios = async () => {
            const value = await getKeyMetrics(ticker);
            if (value) {
                setCompanyData(value);
            }
        };
        getCompanyKeyRatios();
    }, []);
    return (
        <>
            {companyData ? (
                <>
                    <RatioList config={tableConfig} data={companyData} />
                </>
            ) : (
                <h1>No data found</h1>
            )}
        </>
    );
};

export default CompanyProfile;