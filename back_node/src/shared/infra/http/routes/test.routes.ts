import { GetTestController } from "@modules/useCases/getTest/GetTest.controller";
import { Request, Response, Router } from "express";

const testRoutes = Router();
const getTestController = new GetTestController();

testRoutes.get('/', getTestController.handle);

testRoutes.post('/', async (req, res) => {
    return res.send({
        message: 'test',
    })
});

export { testRoutes };