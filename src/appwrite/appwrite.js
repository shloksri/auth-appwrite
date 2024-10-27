// import { Client, Account } from 'appwrite';
// const client = new Client();
// client.setProject("671b3e3f00399d4761c8");

// const account = new Account(client);

// export { client, account };


import { Client, Account, OAuthProvider } from 'appwrite'

const client = new Client()
client.setProject(import.meta.env.VITE_PROJECT_ID)// Your Appwrite project IDexport const account = new Account(client)
const account = new Account(client);

export { client, account, OAuthProvider }

