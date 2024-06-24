import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // create Post
  async createPost({ title, slug, content, featuredimage, status, userId }) {
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
        title,
        content,
        featuredimage,
        status,
        userId,
      });
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  // update Post
  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
        title,
        content,
        featuredimage,
        status,
      });
      return true;
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
      return false;
    }
  }

  // delete Post
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
    } catch (error) {
      console.log("Appwrite service :: updatepost :: error", error);
    }
  }

  // get Post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
    } catch (error) {
      console.log("Appwrite service :: getpost :: error");
    }
  }

  // get Posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
        // or
        // [write query]
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error ", error);
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  // delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  // getFile preview
  // respose is very fast and do not return any promise so no need to use async or await
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
