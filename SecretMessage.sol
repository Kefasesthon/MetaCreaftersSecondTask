

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SecretMessage{
    string public message;

    function sendMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
