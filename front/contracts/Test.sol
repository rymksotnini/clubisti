pragma solidity ^0.5.0;



contract Test {

  struct Transaction {

    uint id_offer;
    uint id_user;
    uint amount;

  }

  mapping(uint256 => bytes) transactions;


  constructor() public {

  }
  function string_tobytes( string memory s) public view returns (bytes memory){
    bytes memory b3 = bytes(s);
    return b3;
  }

  function convertingToString(bytes memory b)public returns(string memory){

    string memory converted = string(b);
    return converted;
  }


  function addDonation( bytes  memory newTransactions, uint id ) public{

    // idT,idU,idO,amount;idT2...
    transactions[id] = newTransactions;

  }

  function getTransactions( uint id_transaction) public view returns (bytes  memory){
    return transactions[ id_transaction];
  }

  function reset() public{


  }

}



