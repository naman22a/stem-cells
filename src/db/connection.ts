import {connect} from 'mongoose';

connect(process.env.MONGODB_URI ?? "mongodb://localhost:27017/healthcare", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("connection sucessful");
}).catch((error) => {
  console.log('no connection');
});