import axios from "axios";

import { baseUrl } from "./setup";

class TriviaApi {
  static getCategoryList() {
    return axios.get(`${baseUrl}/api_category.php`);
  }
}
