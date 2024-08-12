import "./App.css";

const App = () => {
  return (
    <div className="h-full w-full bg-[#eff2f5] p-8">
      <div className="w-full max-w-[70%] mx-auto bg-white h-full rounded-md">
        <div className="text-4xl font-medium text-center pt-4">
          Free Crypto Tax Calculator Australia
        </div>
        <div className="flex justify-between p-4">
          <span className="flex">
            <label htmlFor="">Financial Year</label>
            <select name="" id="" className="input_styling">
              <option value="">FY-2023-24</option>
            </select>
          </span>
          <span>
            <label htmlFor="">Country</label>
            <select name="" id="" className="input_styling">
              <option value="">Australia</option>
            </select>
          </span>
        </div>
        <hr className="p-4" />
        <div>
          {/* first div  */}
          <div className="flex justify-between p-4">
            <span className="flex flex-col">
              <label htmlFor="">Enter purchase price of Crypto</label>
              <input type="text" className="input_styling" />
            </span>
            <span className="flex flex-col">
              <label htmlFor="">Enter purchase price of Crypto</label>
              <input type="text" className="input_styling" />
            </span>
          </div>
          <div className="flex justify-between p-4">
            <span className="flex flex-col">
              <label htmlFor="">Enter purchase price of Crypto</label>
              <input type="text" className="input_styling" />
            </span>
            <span className="">
              <label htmlFor="">Investment Type</label>
              <div className="flex">
                <span className="flex flex-col">
                  <button>Short Term</button>
                  <p> 12 months</p>
                </span>
                <span className="flex flex-col">
                  <button>Long Term</button>
                  <p>12 months</p>
                </span>
              </div>
            </span>
          </div>
          {/* third div  */}
          <div className="flex justify-between p-4">
            <span className="flex flex-col">
              <label htmlFor="">Select Your Annual Income</label>
              <select name="" id="" className="input_styling">
                <option value="">$0 - $18,200</option>
                <option value="">$18,201 - $45,000</option>
                <option value="">$45,001 - $120,000</option>
                <option value="">$120,001 - $180,000</option>
                <option value="">$180,001+</option>
              </select>
            </span>
            <span>
              <label htmlFor="">Tax Rate</label>
              <p>$0</p>
            </span>
          </div>

          {/* fourth div  */}
          <div className="flex justify-between p-4">
            <span className="flex flex-col">
              <label htmlFor="">Capital gains amount</label>
              <input
                type="text"
                className="input_styling"
                placeholder="$0"
                readOnly
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="">Discount for long term gains</label>
              <input
                type="text"
                className="input_styling"
                placeholder="$0"
                readOnly
              />
            </span>
          </div>

          {/* last div  */}
          <div className="flex justify-between p-4">
            <span className="flex flex-col bg-[#EBF2FF] py-8 px-4 input_styling text-center">
              <h2>Net Capital gains tax amount</h2>
              <p>$ 0</p>
            </span>{" "}
            <span className="flex flex-col bg-[#EBF2FF] py-8 px-4 input_styling text-center">
              <h2>The tax you need to pay</h2>
              <p>$ 0</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
