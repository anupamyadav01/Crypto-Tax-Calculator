import { useState } from "react";

const Calculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investementType, setInvestmentType] = useState();
  const [annualIncome, setAnnualIncome] = useState(0);
  const [longTermGain, setLongTermGain] = useState(0);
  const [capitalGainAmount, setCapitalGainAmount] = useState(0);
  const [textRate, setTextRate] = useState(0);
  const [gainAmmount, setGainAmmount] = useState();
  const calcuateCapitalGains = () => {
    if (active === "long-term") {
      const capitalGain = salePrice || 0 - purchasePrice;
      setCapitalGainAmount(capitalGain);
      // const longTem = capitalGain * 0.5;
      // setLongTermGain(longTem);
    }
  };

  const [active, setActive] = useState("long-term");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eff2f5] p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <div className="text-3xl font-medium text-center mb-4">
          Free Crypto Tax Calculator Australia
        </div>

        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="financial-year">
              Financial Year
            </label>
            <select
              id="financial-year"
              className="py-3 px-2 rounded-md bg-[#eff2f5]"
            >
              <option value="">FY-2023-24</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2" htmlFor="country">
              Country
            </label>
            <select id="country" className="py-3 px-2 rounded-md bg-[#eff2f5]">
              <option value="">Australia</option>
            </select>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="purchase-price">
              Enter purchase price of Crypto
            </label>
            <div className="flex items-center bg-[#eff2f5] p-2 rounded-md">
              <span>$</span>
              <input
                type="text"
                id="purchase-price"
                className="bg-transparent outline-none ml-1 flex-1"
                onChange={(e) => {
                  setPurchasePrice(+e.target.value);
                  calcuateCapitalGains();
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2" htmlFor="sale-price">
              Enter sale price of Crypto
            </label>
            <div className="flex items-center bg-[#eff2f5] p-2 rounded-md">
              <span>$</span>
              <input
                type="text"
                id="sale-price"
                className="bg-transparent outline-none ml-1 flex-1"
                onChange={(e) => setSalePrice(+e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="expenses">
              Enter your Expenses
            </label>
            <div className="flex items-center bg-[#eff2f5] p-2 rounded-md">
              <span>$</span>
              <input
                type="text"
                id="expenses"
                className="bg-transparent outline-none ml-1 flex-1"
                onChange={(e) => setExpenses(+e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Investment Type</label>
            <div className="flex justify-between gap-4">
              <div
                onClick={() => setActive("short-term")}
                className={`py-3 px-2 rounded-lg cursor-pointer border ${
                  active === "short-term"
                    ? "border-blue-600"
                    : "border-gray-400"
                } flex-1 flex items-center justify-center`}
              >
                <span className="mr-2">Short Term</span>
                {active === "short-term" && (
                  <span>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='24'%20height='19'%20viewBox='0%200%2024%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9998%202.33337L7.99984%2018.3334L0.666504%2011L2.5465%209.12004L7.99984%2014.56L22.1198%200.453369L23.9998%202.33337Z'%20fill='%230141CF'/%3e%3c/svg%3e"
                      alt=""
                    />
                  </span>
                )}
              </div>
              <div
                onClick={() => setActive("long-term")}
                className={`py-3 px-2 rounded-lg cursor-pointer border ${
                  active === "long-term" ? "border-blue-600" : "border-gray-400"
                } flex-1 flex items-center justify-center`}
              >
                <span className="mr-2">Long Term</span>
                {active === "long-term" && (
                  <span>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='24'%20height='19'%20viewBox='0%200%2024%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9998%202.33337L7.99984%2018.3334L0.666504%2011L2.5465%209.12004L7.99984%2014.56L22.1198%200.453369L23.9998%202.33337Z'%20fill='%230141CF'/%3e%3c/svg%3e"
                      alt=""
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="text-gray-400 text-sm mt-2">
              &lt; 12 months for short-term &gt; 12 months for long-term
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="annual-income">
              Select Your Annual Income
            </label>
            <select
              id="annual-income"
              className="py-3 px-2 rounded-md bg-[#eff2f5]"
            >
              <option value="">$0 - $18,200</option>
              <option value="">$18,201 - $45,000</option>
              <option value="">$45,001 - $120,000</option>
              <option value="">$120,001 - $180,000</option>
              <option value="">$180,001+</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Tax Rate</label>
            <p className="bg-[#eff2f5] p-2 rounded-md">$0</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="capital-gains">
              Capital gains amount
            </label>
            <div className="flex items-center bg-[#eff2f5] p-2 rounded-md">
              <span>$</span>
              <input
                type="text"
                id="capital-gains"
                className="bg-transparent outline-none ml-1 flex-1"
                value={capitalGainAmount}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2" htmlFor="long-term-discount">
              Discount for long term gains
            </label>
            <div className="flex items-center bg-[#eff2f5] p-2 rounded-md">
              <span>$</span>
              <input
                type="text"
                id="long-term-discount"
                className="bg-transparent outline-none ml-1 flex-1"
                value={longTermGain}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
