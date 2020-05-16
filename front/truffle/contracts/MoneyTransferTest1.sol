pragma solidity ^0.5.0;
import "./ConvertLib.sol";
contract MoneyTransferTest1 {
  mapping (address => uint) balances;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor(address origin) public {
    balances[origin] = 10000;
  }

  function sendCoin(address sender,address receiver, uint amount) public returns(bool sufficient) {
    if (balances[sender] < amount) return false;
    balances[sender] -= amount;
    balances[receiver] += amount;
    emit Transfer(sender, receiver, amount);
    return true;
  }

  function getBalanceInEth(address addr) public view returns(uint){
    return ConvertLib.convert(getBalance(addr),2);
  }

  function getBalance(address addr) public view returns(uint) {
    return balances[addr];
  }
}
