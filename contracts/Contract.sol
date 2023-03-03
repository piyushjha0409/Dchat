// SPDX-License-Identifier: MIT

pragma solidity <0.9.0;

contract BlockchainChat {
    event NewMessage(address indexed from, uint timestamp, string message);

    //user struct 
    struct user {
        string name;
        friend[] friendList;
    }

   //friend struct 
    struct friend {
      address pubkey;
      string name;
    }

   //message struct 
    struct Message {
        address sender;
        string msg;
        uint timestamp;
    }

   mapping(address => user) userList;
   mapping(bytes32 => Message[]) allMessages;

   //CHECK THE USER EXISTS OR NOT 
   function checkUserExists(address pubkey) public view returns(bool){
      return bytes (userList[pubkey].name).length > 0;
   }   
   

   //IF THE USER IS NOT EXISTING THEN WE HAVE TO REGISTER ONE 
   //external means that anybody can call it 
   function createUser(string calldata name) external {
      //one who already created an account 
      require(checkUserExists(msg.sender) == false, "User Already Exists!");
      require(bytes(name).length > 0, "Username cannot be empty");

      userList[msg.sender].name = name;
   } 

   //GET USERNAME
   function getUsername(address pubkey) external view returns(string memory){
    require(checkUserExists(pubkey), "User is not registered!");
    return userList[pubkey].name;
   }

   //Adding a friend
   function addFriend(address friend_key, string calldata name) external{
    require(checkUserExists(msg.sender), "Create an account first!");
    require(checkUserExists(friend_key), "User already registred!");
    require(msg.sender != friend_key, "Users cannot add themselves as friends");
    require(checkAlreadyFriends(msg.sender, friend_key) == false, "These users are already friend!");

    _addFriend(msg.sender, friend_key, name);
    _addFriend(friend_key, msg.sender, userList[msg.sender].name);
   }

   //function for checking already friends or not 
   function checkAlreadyFriends(address pubkey1, address pubkey2) internal view returns(bool){
    
    if(userList[pubkey1].friendList.length > userList[pubkey2].friendList.length){
        address temp = pubkey1;
        pubkey1 = pubkey2;
        pubkey2 = temp;
    }

    for(uint i=0; i<userList[pubkey1].friendList.length; i++){
        if(userList[pubkey1].friendList[i].pubkey = pubkey2) return true;
    }
     return false;
   }

   function _addFriend(address me, address friend_key, string memory name) internal{
    friend memory newFriend = friend(friend_key, name);
    userList[me].friendList.push(newFriend);
   }

   //HET
}