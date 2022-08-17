import { Client } from '@xmtp/xmtp-js';
import { Wallet } from 'ethers';
const wallet = new Wallet(process.env.MY_PRIVATE_KEY)
const client = await Client.create(wallet);
const messages = await client.listConversationMessages(wallet.address, { pageSize: 10 });
console.log(messages.length); // More than 10



