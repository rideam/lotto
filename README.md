# Lotto App

Smart contract `contracts/Lotto.sol` allows one to play a lottery to choose a lucky number and potentially win accumulated ether.  


## Functionality

- user pays to guess a randomly generated secret number ( essentially buying the ticket )
- the prize accumulates from the payments
- upon entering the correct number the winner gets a reward of the available ether

## Requirements 

- truffle 

## Testing

Tests are defined in `test/lotto_test.js`

testing with truffle 

```
npm install truffle -g 
```

deploying contract and testing on truffle console 

- start console

```
truffle develop
```

- in truffle console migrate and deploy contract

```
truffle(develop)> migrate --reset
```

run unit test

```
truffle(develop)> test
```





