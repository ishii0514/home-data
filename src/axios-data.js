import axios from "axios";

const instance = axios.create({
  baseURL: `https://firestore.googleapis.com/v1/projects/${process.env.VUE_APP_PROJECT_ID}/databases/(default)/documents`,
});

export default instance;
