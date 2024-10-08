import express, { json, Request, Response } from "express";
import phonesRouter from "./routes/phones-router";
import errorHandler from "./middleware/errorHandler-middlewares";
import rechargeRouter from "./routes/recharge-router";
import summaryRouter from "./routes/summary-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.use(phonesRouter);
app.use(summaryRouter);
app.use(rechargeRouter);

app.use(errorHandler);

const port = process.env.PORT || 5550;
app.listen(port, () => console.log("Server is up."));