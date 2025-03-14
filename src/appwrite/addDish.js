
import { Client, Account, ID, Databases, Storage, Query } from 'appwrite';
import conf from '../conf/conf';

class Dish {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async addDish({name, price, description, image, category}, imageId) {
        const imageName = image[0].name;
        return await this.databases.createDocument(
            conf.appWriteDatabaseId,
            conf.appWriteDishesCollectionId,
            imageId,
            {name, description, image : imageName, category, price : parseInt(price)}
        );
    }

    async getDishes() {
        return await this.databases.listDocuments(
            conf.appWriteDatabaseId,
            conf.appWriteDishesCollectionId,
            [
                Query.orderDesc("$createdAt"),

            ]
        );
    }

    async updateDish({name, price,category,image ,description, ID}) {

        console.log(image.length === 0);
        if (image.length === 0) {
            console.log(`legnth 0`);
        }
        if (!image) {
            return `Image is not provided`;
        }
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteDishesCollectionId,
                ID,
                {name, description, image : image[0].name, category, price : parseInt(price)}
            );
        } catch (error) {
            return 'Failed to update dish';
        }
    }

    async deleteDish({ID}) {
        try {
            return await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteDishesCollectionId,
                ID
            );
        } catch (error) {
            return null;
        }
    }

    async uploadImage(image, id = null) {
        if (!image) {
            return null;
        }
        try {
            return await this.bucket.createFile(
                conf.appWriteDishesBucketId,
                id ? id : ID.unique(),
                image,
            )
        } catch (error) {
            return null;
        }
    }

    async deleteImage(id) {
        console.log(`appwrite got`,id);
        
        try {
            if (id === null) {
                return null;
            }else {
                return await this.bucket.deleteFile(
                    conf.appWriteDishesBucketId,
                    id
                );
            }
        } catch (error) {
            return null;
        }
    }

    getDishImagePreview(imageId) {

        try {
            return this.bucket.getFilePreview(
                conf.appWriteDishesBucketId,
                imageId
            );
        } catch (error) {
            console.log(error);
            
            return null;
        }
    };
}

const dish = new Dish();
export default dish;
