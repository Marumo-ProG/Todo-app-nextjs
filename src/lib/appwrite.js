import { Client, Databases } from "appwrite";

const client = new Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("666185c60001dd7bf864");

const databases = new Databases(client);

export { client, databases };
