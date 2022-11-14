// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

contract Lotto {

    uint256 secretNumber;
    uint256 ticketPrice = 0.0001 ether;

    event LottoEvent(bool isWinner);

    constructor() payable {
        secretNumber = 45;
    }

    // Play lottery
    function play(uint256 _number) public payable {
        require(msg.value >= ticketPrice, "You need to send 0.001 ETH!");
        if (_number != secretNumber) {
            emit LottoEvent(false);
        }
        if (_number == secretNumber) {
            emit LottoEvent(true);
            (bool success, ) = (msg.sender).call{
                value: (address(this).balance * 80) / 100
            }("");
            require(success, "Failed to send the prize to the winner");
            secretNumber = random();
        }
    }

    // Get accumulated price amount
    function prizeAmount() public view returns (uint256) {
        return (address(this).balance * 80) / 100;
    }


    // generates a semi random number between 0 and 100
    function random() private view returns (uint256) {
        uint256 rt = uint256(keccak256(abi.encodePacked(block.timestamp)));
        uint256 rd = uint256(keccak256(abi.encodePacked(block.difficulty)));
        return ((rt % 100) * (rd % 100)) % 100;
    }

}