import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 bg-slate-100 outline outline-black/5 hover:bg-sky-700">
      <Link to={`/company/${portfolioValue.symbol}/company-profile`} className="pt-6 text-xl font-bold">
        {portfolioValue.symbol}
      </Link>
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
