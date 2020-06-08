This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Steps`

Install the [Metamask extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) in your chrome browser.<br>
After logging in select **Ropsten Test Network** and don't forget to add some test Faucet by clicking on **Deposit**


Copy the text from **[smart_contract.txt](https://github.com/nitinskumavat/blockchain-certs/blob/master/smart_contract.txt)**

Paste this in **Remix ide** .<br>

You should select **Injected Web3** as an Environent inside the RemixIde.<br>

Then Compile and Deploy your smart contract.<br>

Copy the **Address** of deployed contract.<br> 
And replace the address value in **[src/config.js](https://github.com/nitinskumavat/blockchain-certs/blob/master/src/config.js)** with your contract address.<br>

(We have to do above steps so that you will be owner of the smart contract and now you can add colleges using add **addCollege** function in RemixIde after deploying the contract).<br>


In the project directory, you can run:

### `npm install`

This will install all the dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

