import React, { useState, useEffect } from "react";
import { message, createDataItemSigner, result } from "@permaweb/aoconnect";
import { FaSpinner } from "react-icons/fa";

interface CapturedData {
  intA: string;
  intB: string;
  OriginalUser: string;
  result: string;
  Action: string;
}

interface Transaction {
  user: string;
  intA: string;
  intB: string;
  result: string;
  timestamp: string;
}

const WalletPage: React.FC = () => {
  const [intA, setIntA] = useState<string>("");
  const [intB, setIntB] = useState<string>("");
  const [capturedDataList, setCapturedDataList] = useState<CapturedData[]>([]);
  const [isLoadingAdd, setIsLoadingAdd] = useState<boolean>(false);
  const [transactionList, setTransactionDetails] = useState<Transaction[]>([]);
  const [latestResult, setLatestResult] = useState<string | null>(null);

  const NOT = "8wtbknU58ighfcgpEBH7NbRF-MbK790sDsLGDwVwbpM";
  const transactions = "VCkO3nt4ceJ54kYKlLSw6nD4Hr2K6PN9LgWBystmpMk";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "intA") setIntA(value);
    else if (name === "intB") setIntB(value);
  };

  const add = async () => {
    setIsLoadingAdd(true);
    const intAvalue = parseInt(intA);
    const intBvalue = parseInt(intB);

    try {
      const getPropMessage = await message({
        process: NOT,
        tags: [
          { name: "Action", value: "add" },
          { name: "intA", value: String(intAvalue) },
          { name: "intB", value: String(intBvalue) },
        ],
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const { Messages, Error } = await result({
        message: getPropMessage,
        process: NOT,
      });

      if (Error) {
        alert("Error: " + Error);
        return;
      }

      if (!Messages || Messages.length === 0) {
        alert("No messages were returned. Please try again.");
        return;
      }

      const computationResult = Messages[0].Data.result;
      setLatestResult(computationResult);
    } catch (error) {
      alert("Error occurred during calculation: " + error);
    } finally {
      setIsLoadingAdd(false);
    }
    reloadPage(true);
  };

  function reloadPage(forceReload: boolean = false): void {
    if (forceReload) {
      location.href = location.href;
    } else {
      location.reload();
    }
  }

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const messageResponse = await message({
          process: transactions,
          tags: [{ name: "Action", value: "view_transactions" }],
          signer: createDataItemSigner(window.arweaveWallet),
        });

        const getProposalsMessage = messageResponse;

        let { Messages, Error } = await result({
          message: getProposalsMessage,
          process: transactions,
        });

        if (Error) {
          alert("Error fetching transactions: " + Error);
          return;
        }

        if (!Messages || Messages.length === 0) {
          alert("No messages were returned from ao. Please try later.");
          return;
        }

        const data = JSON.parse(Messages[0].Data);
        const openTradesData = Object.entries(data).map(([name, details]) => {
          const typedDetails: Transaction = details as Transaction;
          return {
            user: typedDetails.user,
            intA: typedDetails.intA,
            intB: typedDetails.intB,
            result: typedDetails.result,
            timestamp: new Date(typedDetails.timestamp).toLocaleString(
              "en-US",
              {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }
            ),
          };
        });

        // Sort transactions from newest to oldest
        const sortedTransactions = openTradesData.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        setTransactionDetails(sortedTransactions);

        // Set the latest result from the first transaction (newest)
        if (sortedTransactions.length > 0) {
          setLatestResult(sortedTransactions[0].result);
        }
      } catch (error) {
        console.error("There was an error when loading transactions: ", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Input Section */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "300px",
          margin: "20px auto",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Calculator</h3>
        <input
          type="number"
          name="intA"
          placeholder="Enter first number"
          value={intA}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="intB"
          placeholder="Enter second number"
          value={intB}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={add}
          disabled={isLoadingAdd}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isLoadingAdd ? <FaSpinner className="spinner" /> : "Add"}
        </button>
        {/* Result span */}
        <div style={{ textAlign: "center", margin: "20px" }}>
          {latestResult && (
            <span style={{ color: "green", fontWeight: "bold" }}>
              Congrats for computing addition on ROS2 using AO computer. Your
              answer is {latestResult}.
            </span>
          )}
        </div>
      </div>

      {/* Transactions Table */}
      <div
        style={{
          margin: "20px auto",
          width: "80%",
          backgroundColor: "#000",
          padding: "20px",
          borderRadius: "10px",
          color: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Transactions</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#333", color: "#fff" }}>
              <th style={{ padding: "10px", border: "1px solid #444" }}>
                User
              </th>
              <th style={{ padding: "10px", border: "1px solid #444" }}>
                intA
              </th>
              <th style={{ padding: "10px", border: "1px solid #444" }}>
                intB
              </th>
              <th style={{ padding: "10px", border: "1px solid #444" }}>
                Result
              </th>
              <th style={{ padding: "10px", border: "1px solid #444" }}>
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionList.map((transaction, index) => (
              <tr key={index} style={{ color: "#fff" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {transaction.user}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {transaction.intA}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {transaction.intB}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {transaction.result}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  {new Date(transaction.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletPage;
