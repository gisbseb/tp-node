import { mongoose } from "./db.js";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token : {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

export { User };
