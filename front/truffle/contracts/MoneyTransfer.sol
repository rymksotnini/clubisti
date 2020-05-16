/*pragma solidity ^0.5.0;
contract MoneyTransfer {
  address payable from;
  address payable to;
  constructor() public {
    from = msg.sender;
  }
  event Pay(address _to, address _from, uint amt);
  function pay( address payable _to ) public payable returns
  (bool) {
    to = _to;
    to.transfer(msg.value);
    emit Pay(to, from, msg.value);
    return true;
  }
}*/
pragma solidity ^0.5.0;
import "./ConvertLib.sol";
contract MoneyTransfer {
  mapping (address => uint) balances;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor() public {
    balances[tx.origin] = 10000;
  }

  function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
    if (balances[msg.sender] < amount) return false;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Transfer(msg.sender, receiver, amount);
    return true;
  }

  function getBalanceInEth(address addr) public view returns(uint){
    return ConvertLib.convert(getBalance(addr),2);
  }

  function getBalance(address addr) public view returns(uint) {
    return balances[addr];
  }
}
