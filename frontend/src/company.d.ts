interface FinnhubSearchResponse {
  result: {
    symbol: string;
    description: string;
  }[];
}

// interface FinnhubProfileResponse {
//   ticker: string;
//   name: string;
//   country: string;
//   currency: string;
//   exchange: string;
//   ipo: string;
//   marketCapitalization: number;
//   weburl: string;
//   logo: string;
//   finnhubIndustry: string;
// }

export interface FinnhubProfileResponse {
  name: string;
  ticker: string;
  marketCapitalization: number;
  shareOutstanding: number;
  logo: string;
  finnhubIndustry: string;
}

export interface FinnhubMetricsResponse {
  metric: {
    marketCapitalization?: number;
    currentRatioAnnual?: number;
    roeTTM?: number;
    cashPerShareTTM?: number;
  };
  marketCapTTM?: number;
  currentRatioTTM?: number;
  roeTTM?: number;
  cashPerShareTTM?: number;
}

interface FinnhubFinancialsResponse {
  data: any[];
}

export interface FinnhubBalanceSheet {
  data: any[];
  date: string;
  totalAssets: number;
  totalLiabilities: number;
}

export interface FinnhubCashFlow {
  data: any[];
  date: string;
  operatingCashFlow: number;
  freeCashFlow: number;
}

export interface FinnhubTenK {
  filedDate: string;
  type: string;
  reportUrl: string;
  symbol: string;
  form: string;
}

export interface CompanySearch {
  symbol: string;
  name: string;
}

export interface CompanyProfile {
  ticker: string;
  name: string;
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  weburl: string;
  logo: string;
  finnhubIndustry: string;
}

export interface CompanyKeyRatios {
  dividendYielTTM: number;
  dividendYielPercentageTTM: number;
  peRatioTTM: number;
  pegRatioTTM: number;
  payoutRatioTTM: number;
  currentRatioTTM: number;
  quickRatioTTM: number;
  cashRatioTTM: number;
  daysOfSalesOutstandingTTM: number;
  daysOfInventoryOutstandingTTM: number;
  operatingCycleTTM: number;
  daysOfPayablesOutstandingTTM: number;
  cashConversionCycleTTM: number;
  grossProfitMarginTTM: number;
  operatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  effectiveTaxRateTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;
  netIncomePerEBTTTM: number;
  ebtPerEbitTTM: number;
  ebitPerRevenueTTM: number;
  debtRatioTTM: number;
  debtEquityRatioTTM: number;
  longTermDebtToCapitalizationTTM: number;
  totalDebtToCapitalizationTTM: number;
  interestCoverageTTM: number;
  cashFlowToDebtRatioTTM: number;
  companyEquityMultiplierTTM: number;
  receivablesTurnoverTTM: number;
  payablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  fixedAssetTurnoverTTM: number;
  assetTurnoverTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  operatingCashFlowSalesRatioTTM: number;
  freeCashFlowOperatingCashFlowRatioTTM: number;
  cashFlowCoverageRatiosTTM: number;
  shortTermCoverageRatiosTTM: number;
  capitalExpenditureCoverageRatioTTM: number;
  dividendPaidAndCapexCoverageRatioTTM: number;
  priceBookValueRatioTTM: number;
  priceToBookRatioTTM: number;
  priceToSalesRatioTTM: number;
  priceEarningsRatioTTM: number;
  priceToFreeCashFlowsRatioTTM: number;
  priceToOperatingCashFlowsRatioTTM: number;
  priceCashFlowRatioTTM: number;
  priceEarningsToGrowthRatioTTM: number;
  priceSalesRatioTTM: number;
  dividendYieldTTM: number;
  enterpriseValueMultipleTTM: number;
  priceFairValueTTM: number;
  dividendPerShareTTM: number;
}

export interface CompanyIncomeStatement {
  date: string;
  revenue: number;
  netIncome: number;
  operatingExpenses: number;
}

export interface CompanyCashFlow {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  netIncome: number;
  depreciationAndAmortization: number;
  deferredIncomeTax: number;
  stockBasedCompensation: number;
  changeInWorkingCapital: number;
  accountsReceivables: number;
  inventory: number;
  accountsPayables: number;
  otherWorkingCapital: number;
  otherNonCashItems: number;
  netCashProvidedByOperatingActivities: number;
  investmentsInPropertyPlantAndEquipment: number;
  acquisitionsNet: number;
  purchasesOfInvestments: number;
  salesMaturitiesOfInvestments: number;
  otherInvestingActivites: number;
  netCashUsedForInvestingActivites: number;
  debtRepayment: number;
  commonStockIssued: number;
  commonStockRepurchased: number;
  dividendsPaid: number;
  otherFinancingActivites: number;
  netCashUsedProvidedByFinancingActivities: number;
  effectOfForexChangesOnCash: number;
  netChangeInCash: number;
  cashAtEndOfPeriod: number;
  cashAtBeginningOfPeriod: number;
  operatingCashFlow: number;
  capitalExpenditure: number;
  freeCashFlow: number;
  link: string;
  finalLink: string;
}