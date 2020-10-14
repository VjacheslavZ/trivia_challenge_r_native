import axios from "axios";

import { baseUrl } from "./setup";

export class TriviaApi {
  static getCategoryList() {
    return axios.get(`${baseUrl}/api_category.php`);
  }

  static getQuizQuestions(query) {
    return axios.get(`${baseUrl}/api.php?amount=10&type=boolean&${query}`)
  }
}
