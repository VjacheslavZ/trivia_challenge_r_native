import axios from "axios";

import { baseUrl } from "./setup";

export class TriviaApi {
  static getCategoryList() {
    return axios.get(`${baseUrl}/api_category.php`);
  }
}
