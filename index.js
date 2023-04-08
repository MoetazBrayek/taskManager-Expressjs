import express from 'express';
import {connect} from './config/db.js';
import router from './routers/task.routes.js';

const app = express();
const port = 3001;
connect();


// accept json data in the body
app.use(express.json());

app.use("/api", router);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

