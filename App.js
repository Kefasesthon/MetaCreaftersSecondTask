import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import "./App.css";

function App() {
  const contractAddress = "0x944Fd5e4543f9720fb051809E4420B3b024a7b7c";

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const [inputMessage, setInputMessage] = useState("");
  const [getmsg, setGetmsg] = useState("");

  async function sendMessageToContract() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const tx = await contract.sendMessage(inputMessage, {
          gasLimit: 500000, // Adjust gas limit as needed
          gasPrice: ethers.utils.parseUnits("20", "gwei"), // Adjust gas price as needed
        });
        await tx.wait();
        alert("Message sent successfully");
        setInputMessage(""); // Clear input after successful transaction
      } catch (err) {
        console.error("Error setting message:", err);
        alert("Error setting message. Please check the console for details.");
      }
    }
  }

  async function getMessageFromContract() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider
        );

        const message = await contract.getMessage();
        setGetmsg(message);
        alert("message retrieval successful");
      } catch (err) {
        console.error("Error getting message:", err);
        alert("Error getting message. Please check the console for details.");
      }
    }
  }

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const clearMessage = () => {
    setGetmsg("");
  };

  return (
    <div className="App">
      <div>
        <h1>Secret DApp</h1>
        <h2>Smart Contract and DApp Integration</h2>
        <h3>
          <i>Secret Message Getter and Setter Function call</i>
        </h3>
        <br />
        <input
          type="text"
          placeholder="Type your message"
          value={inputMessage}
          onChange={handleMessageChange}
        />
        <br /> <br />
        <button onClick={sendMessageToContract}>Send Message</button>
        <br /> <br />
        <button onClick={getMessageFromContract}>Get Message</button>
      </div>
      <div>
        <p>{getmsg}</p>
        <button onClick={clearMessage}>Clear message</button>
      </div>
    </div>
  );
}

export default App;