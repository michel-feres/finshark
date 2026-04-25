import React, {useEffect, useState} from "react";
import {CompanySearch, CompanyProfile} from "../../company";
import {useParams} from "react-router-dom";
import {getCompanyProfile} from "../../api";

interface Props {
}

const CompanyPage = (props: Props) => {
    let {ticker} = useParams();
    const [company, setCompany] = useState<CompanyProfile | null>(null);

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result);
        };
        getProfileInit();
    }, [ticker]);

    return (
        <>
            {company ? (
                <div>
                    <h1>{company.name}</h1>
                    <p>{company.ticker}</p>
                    <p>{company.finnhubIndustry}</p>
                </div>
            ) : (
                <div>Company Not Found!</div>
            )}
        </>
    );
};

export default CompanyPage;