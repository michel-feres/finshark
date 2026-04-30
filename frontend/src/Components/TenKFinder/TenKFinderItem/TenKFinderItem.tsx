import React from "react";
import { FinnhubTenK } from "../../../company";

type Props = {
    tenK: FinnhubTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
    const year = new Date(tenK.filedDate).getFullYear();

    return (
        <a
            href={tenK.reportUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
        >
            10-K - {tenK.symbol} - {year}
        </a>
    );
};

export default TenKFinderItem;