# Get recent block information
## [BEGINNER CHALLENGES] Back-End Javascript
Use Polkadot-JS to write a command line utility that displays information about the latest block on Kusama, Polkadot or any other Substrate-based chain. Bonus: include an option to search for a block by number (height) and/or hash.

### First step:

```bash
yarn
```
### Second step:

Run tool with params

```bash
yarn search 145 159 0xac180a5b2da3199c4b4a4eae10d8527989257d1a5ccc420e39a99ea58245ac04 0xf157c4870daf8ac0eaf632ac256d1653cd37ec805e4ad7866d7d7a046c2faba1
```
![Alt text](./with-params.png?raw=true)

You can run this tool without params then it will display currenct block.
```bash
yarn search
```
![Alt text](./current-block.png?raw=true)

