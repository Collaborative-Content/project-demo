// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract SampleContract {
    event Greet(string message);
    event Message(string greeting);

    function greet() public {
      //  emit Greet("Hello World!");
    }

    function getInput(string memory _content) public {
        emit Message(_content);
    }
}
