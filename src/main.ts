import express, { Express } from 'express';
import { defaultConfig } from './config/default.config';
import router from './routes/index';
var cors = require('cors')

const PORT = defaultConfig.PORT || 3000;
const app: Express = express();


//middleware
app.use(express.json());
app.use(cors())

//routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/api/`);
});

