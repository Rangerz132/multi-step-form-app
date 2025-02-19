import axios from "axios";
import { User } from "../types";

const BASE_URL = "http://localhost:3200/users";

export class UserAPI {
  static async getUsers() {
    try {
      return (await axios.get(BASE_URL)).data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserById(userId: string) {
    try {
      return (await axios.get(`${BASE_URL}/${userId}`)).data;
    } catch (error) {
      console.log(error);
    }
  }

  static async addUser(user: User) {
    try {
      return (await axios.post(BASE_URL, user)).data;
    } catch (error) {
      console.log(error);
    }
  }

  static async removeUserById(userId: string) {
    try {
      return (await axios.delete(`${BASE_URL}/${userId}`)).data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUserById(user: User) {
    try {
      return (await axios.patch(`${BASE_URL}/${user.id}`, user)).data;
    } catch (error) {
      console.log(error);
    }
  }
}
