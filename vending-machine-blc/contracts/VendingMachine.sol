//SPDX-License-Identifier: unlicensed

pragma solidity ^0.8.0;

contract VendingMachine {
    address public owner;
    uint public candyPrice = 2 ether;
    mapping(address => uint) public candyBalances;

    constructor() {
        owner = msg.sender;
        candyBalances[address(this)] = 100;
    }

    function getVendingBalance() public view returns (uint) {
        return candyBalances[address(this)];
    }

    function restock(uint _amount) public {
        require(
            owner == msg.sender,
            "Only owner can restock the vending machine"
        );
        candyBalances[address(this)] += _amount;
    }

    function purchase(uint _amount) public payable {
        require(msg.value >= _amount * candyPrice, "You haven't paid enough");
        require(_amount <= candyBalances[address(this)], " Not enough candies");
        candyBalances[address(this)] -= _amount;
        candyBalances[msg.sender] += _amount;
    }
}
