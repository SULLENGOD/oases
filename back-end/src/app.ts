import express, {Application} from 'express';
import cors from "cors";
import morgan from 'morgan';
import oasisRoutes from './routes/oasis.routes';
import desertsRoutes from "./routes/desert.routes";

const app: Application = express();

app.set('port', 5000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/v1/oases', oasisRoutes);
app.use('/v1/deserts', desertsRoutes);


export default app;