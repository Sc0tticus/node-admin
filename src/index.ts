import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors(options: {
	origin: ["http://localhost:3000"]
}));


app.get('/', (req: Request, res: Response) => {
	res.send(body: 'Hello World');
});

app.listen(port: 8000, callback: () => {
	console.log('listening to port 8000')
});
