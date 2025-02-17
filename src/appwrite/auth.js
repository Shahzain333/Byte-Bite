import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

class AuthUser {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        console.log("Creating account: ", email, password, name);
        try {
            return await this.account.create(ID.unique(), email, password, name);
            // const userAccount = await this.account.create(ID.unique(), email, password, { name: fullname });
            // if (userAccount) {
            //     return account.login(email, password );
            // }else {
            //     return userAccount;
            // }
        } catch (error) {
            console.log("Error creating account: ", error);
        }
    }

    /**
     * Logs in an existing user account.
     * 
     * This method logs in an existing user account with the provided email address and password.
     * 
     * @param {string} email - The email address for the user account.
     * @param {string} password - The password for the user account.
     * @returns {Promise} A promise that resolves to the user account object.
     */

    async login({email, password}) {
        try {
            // return login session
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error logging in: ", error);
        }
    }
}

const auth = new AuthUser();
export default auth;