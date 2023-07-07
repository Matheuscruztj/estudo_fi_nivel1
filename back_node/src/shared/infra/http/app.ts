import "dotenv/config";
import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import { testRoutes } from "./routes/test.routes";

const app = express();

app.use(express.json());

app.use("/test", testRoutes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        // if (err instanceof AppError) {
        //     return response.status(err.statusCode).json({
        //         message: err.message,
        //     });
        // }

        // return response.status(500).json({
        //     status: "error",
        //     message: `Internal server error - ${err.message}`,
        // });

        return response.status(500).json({
            status: "error",
            message: `Internal server error`,
        });
    },
);

export { app };