import { Client } from '@xmtp/xmtp-js';
import { Wallet } from 'ethers';

const main = async () => {
  const wallet = new Wallet(process.env.MY_PRIVATE_KEY)
  const client = await Client.create(wallet);
  const viaClient = await client.listConversationMessages(wallet.address, { pageSize: 10 });
  const conversations = await client.conversations.list();
  const withMyself = conversations.find(conversation => conversation.peerAddress === wallet.address);
  const viaConversation = await withMyself.messages({ pageSize: 10 });
  console.log('Number in viaConversation:', viaConversation.length)
  console.log('Number in viaClient:', viaClient.length)
}


main();

