// frontend/src/App.js
import React, { useState } from "react";
import { ethers } from "ethers";
import HelloBaseNFT from "./artifacts/contracts/HelloBaseNFT.sol/HelloBaseNFT.json";
import "./styles.css";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";

function App() {
    const [message, setMessage] = useState("");
    const [minting, setMinting] = useState(false);

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" });
    }

    async function mintNFT() {
        if (!message) return;
        setMinting(true);
        try {
            await requestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, HelloBaseNFT.abi, signer);

            const transaction = await contract.mintHelloNFT(message);
            await transaction.wait();
            alert("NFT Minted Successfully!");
        } catch (error) {
            console.error("Error minting NFT:", error);
        }
        setMinting(false);
    }

    return (
        <div className="App">
            <h1>HelloBaseNFT</h1>
            <input
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your Hello message"
            />
            <button onClick={mintNFT} disabled={minting}>
                {minting ? "Minting..." : "Mint NFT"}
            </button>
        </div>
    );
}

export default App;
