// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 

contract HibaSale {
    
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
     
    modifier checkPossibleBuy(uint _maxBal) {
        require((balances[msg.sender] + msg.value) <= _maxBal, 'You cannot purchase with this amount, Total BNB purchase cannot be more than 20 BNB');
        _;
    }

   
    function calculatePercent (uint amount, uint percentage) public pure returns(uint) {
        require((amount / 10000) * 10000 == amount, "Amount too small");
        return amount * percentage / 10000;
    }
    
    function buyHiba() public payable min(0.025 ether) max(20 ether) checkPossibleBuy(20 ether){
        // assert(1 ether == 1e18);
        // 5% = 500 basis point
        // 95 + 9500 basis point
        // 100% = 10000 basis point
        // calculatePercent for 5% of 1bnb = calculatePercent (1000000000000000000 (amount in wei),  500) returns 50000000000000000 in wei (0.05bnb)
        uint amountInvested = msg.value; 
        uint nintyFivePcnt = calculatePercent (msg.value, 9500); // calulating msg.value * (95 /100);
        uint FivePcnt = calculatePercent (msg.value, 500); // calculating msg.value * (5 / 100);
        owner.transfer(nintyFivePcnt);
        coOwner.transfer(FivePcnt);
        balances[msg.sender] += amountInvested;
    }
    
}