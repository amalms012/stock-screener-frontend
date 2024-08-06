import React from "react";

const PinkPantherRows = () => {
  const value = 91;
  return (
    <tbody>
      <tr className="border-b border-gray-600 h-20">
        <td>1</td>

        <td>NIFTY</td>

        <td>20,000</td>

        <td>
          <p
            className={`flex justify-center ${
              value <= 0
                ? "text-red-500"
                : value <= 50
                ? "text-blue-500"
                : "text-red-500"
            }`}
          >
            {value}%
          </p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>
      </tr>

      <tr className="border-b border-gray-600 h-20">
        <td>2</td>

        <td>BANK NIFTY</td>

        <td>20,000</td>

        <td>
          <p
            className={`flex justify-center ${
              value <= 0
                ? "text-red-500"
                : value <= 50
                ? "text-blue-500"
                : "text-red-500"
            }`}
          >
            {value}%
          </p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>
      </tr>

      <tr className="border-b border-gray-600 h-20">
        <td>2</td>

        <td>FINNIFTY</td>

        <td>20,000</td>

        <td>
          <p
            className={`flex justify-center ${
              value <= 0
                ? "text-red-500"
                : value <= 50
                ? "text-blue-500"
                : "text-red-500"
            }`}
          >
            {value}%
          </p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>
      </tr>

      <tr className="border-b border-gray-600 h-20">
        <td>2</td>

        <td>F & O STOCKS</td>

        <td>20,000</td>

        <td>
          <p
            className={`flex justify-center ${
              value <= 0
                ? "text-red-500"
                : value <= 50
                ? "text-blue-500"
                : "text-red-500"
            }`}
          >
            {value}%
          </p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>

        <td>
          <p className="flex  justify-center">2</p>
        </td>
      </tr>
    </tbody>
  );
};

export default PinkPantherRows;
