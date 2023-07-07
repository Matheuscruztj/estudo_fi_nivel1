import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTestUseCase } from "./GetTest.usecase";

class GetTestController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.query;

        const getTestUseCase = container.resolve(GetTestUseCase);

        const output = await getTestUseCase.execute({
            name: name as string,
        });

        return response.send({
            output
        });
    }
}

export { GetTestController };
