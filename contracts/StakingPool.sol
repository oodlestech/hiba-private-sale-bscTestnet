// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract StakingPool {
    
    mapping(address => uint) public balances;
    address payable public owner;
    address payable public coOwner = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);
    
    constructor () public{
        owner = payable(msg.sender);
    }

     modifier min(uint _minAmount) {
        require(msg.value >= _minAmount, 'Not enough BNB provided');
        _;
    }

    modifier max(uint _maxAmount) {
        require(msg.value <= _maxAmount, 'You cannot buy more than 20 BNB worth of Hiba');
        _;
    }

    modifier checkBalance(uint _maxBal) {
        require(balances[msg.sender] < _maxBal, 'Max purchase amount reached');
        _;
    }
    
    function buyHiba() public payable min(0.12 ether) max(20 ether) checkBalance(20 ether){
        // assert(1 ether == 1e18);
        uint amountInvested = msg.value; // convert user value to BNB()
        uint nintyFivePcnt = msg.value * 95 /100;
        uint FivePcnt = msg.value * 5 / 100;
        owner.transfer(nintyFivePcnt);
        coOwner.transfer(FivePcnt);
        balances[msg.sender] += amountInvested;
    }
    
}