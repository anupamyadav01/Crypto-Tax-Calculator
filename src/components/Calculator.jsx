/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Calculator = ({ data }) => {
  const [active, setActive] = useState("long-term");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investementType, setInvestementType] = useState();
  const [annualIncome, setAnnualIncome] = useState(0);
  const [textRate, setTextRate] = useState(0);

  const [capitalGainAmount, setCapitalGainAmount] = useState(0);
  const [longTermGain, setLongTermGain] = useState(0);

  const [textAmount, setTextAmount] = useState(0);
  const [textToPay, setTextToPay] = useState(0);

  useEffect(() => {
    const purchaseRate = purchasePrice || 0;
    const saleRate = salePrice || 0;
    const expensesRate = expenses || 0;

    // calcutaing capital gain amount
    const capitalGainAmount = saleRate - purchaseRate - expensesRate;
    setCapitalGainAmount(capitalGainAmount);

    let discount = 0;
    if (active === "long-term" && capitalGainAmount > 0) {
      discount = 0.5 * capitalGainAmount;
    }
    setLongTermGain(discount);

    const netGain =
      active === "long-term" ? capitalGainAmount - discount : capitalGainAmount;
    setTextAmount(netGain);

    const textToPayValue =
      active === "long-term"
        ? (discount * annualIncome) / 100
        : (capitalGainAmount * annualIncome) / 100;

    setTextToPay(textToPayValue);

    data.filter((item) => {
      if (item.val === annualIncome) {
        // return item.tax[0];
        setTextRate(item.tax);
      }
    });
    // console.log(mainTax);
  }, [
    purchasePrice,
    salePrice,
    expenses,
    investementType,
    annualIncome,
    longTermGain,
    capitalGainAmount,
  ]);

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
                  // calcuateCapitalGains();
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
                onClick={() => {
                  setActive("short-term");
                  setInvestementType("short-term");
                }}
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
                onClick={() => {
                  setActive("long-term");
                  setInvestementType("long-term");
                }}
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
              onChange={(e) => setAnnualIncome(+e.target.value)}
            >
              <option value="0">$0 - $18,200</option>
              <option value="19">$18,201 - $45,000</option>
              <option value="32.5">$45,001 - $120,000</option>
              <option value="37">$120,001 - $180,000</option>
              <option value="45">$180,001+</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Tax Rate</label>
            <p className="bg-[#eff2f5] p-2 rounded-md">{textRate}</p>
          </div>
        </div>

        {active === "long-term" && (
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
        )}

        <div className="md:flex justify-around mt-4 ">
          <div className="h-[97px] text-center flex flex-col justify-center rounded-md md:w-[335px] w-[85%] m-auto md:m-0 mb-3 bg-[#EBF9F4]">
            <h1>Net Capital gains tax amount</h1>
            <p className="text-[#0FBA83] text-xl font-bold">$ {textAmount}</p>
          </div>

          <div className="bg-[#EBF2FF] h-[97px] text-center flex flex-col justify-center rounded-md md:w-[335px] w-[85%] m-auto md:m-0 mb-3">
            <h1>The tax you need to pay</h1>
            <p className="text-[#0141CF] font-bold text-xl">$ {textToPay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
