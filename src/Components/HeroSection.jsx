export default function HeroSection(){
    return(

        <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
        <div>
          <h2>Available Budget</h2>
          <p className="mt-1 text-4xl font-medium">+ BDT <span id="total-budget">14,340.00</span></p>
        </div>

        <div
          className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm"
        >
          <p>Income</p>
          <p>+ BDT <span id="total-income">3,391.45</span></p>
        </div>

        <div
          className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm"
        >
          <p>Expenses</p>
          <p>- BDT <span id="total-expense">1,762.69</span></p>
        </div>
      </div>
    )
}