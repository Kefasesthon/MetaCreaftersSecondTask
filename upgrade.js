// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import contractABI from "./abi.json";
// const { ethers } = require("ethers");

// function App() {
//   const { msg, setMsg } = useState(" ");
//   function handleSubmit(e) {
//     e.preventDefault();

//     setMsg((message) => message);
//   }
//   const contractAddress = "0x6C747Ed0405c44f789DabA22db9a33645637F103";

//   async function requestAccount() {
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//   }

//   async function setMessage() {
//     if (typeof window.ethereum !== "undefined") {
//       await requestAccount();
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const contract = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         signer
//       );

//       try {
//         const transaction = await contract.setMessage();
//         await transaction.wait();
//         console.log("Money withdrawn");
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     }
//   }
//   async function getMessage() {
//     if (typeof window.ethereum !== "undefined") {
//       await requestAccount();
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const contract = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         signer
//       );

//       try {
//         const transaction = await contract.getMessage();
//         await transaction.wait();
//         console.log("Money withdrawn");
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     }
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Item..."
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//           />
//           <button onClick={setMessage}>SetMessage</button>
//           <h1 onClick={getMessage}>Get Message</h1>
//         </form>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
