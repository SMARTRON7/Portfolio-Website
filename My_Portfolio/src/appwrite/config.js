import conf from '../conf/conf.js';
import { Client, Databases } from "appwrite";

export class Service {
    client = new Client();
    databases;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);

    }

    async createPost({ Name, slug, Email, Feebdack, userId, Phone }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    Name,
                    Email,
                    Feebdack,
                    userId,
                    Phone
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

}