import { injectable } from "tsyringe";

@injectable()
class GetTestUseCase {
    async execute({ name, ...rest }: GetTestInputDto): Promise<GetTestOutputDto> {
        return {
            name,
        }
    }
}

export { GetTestUseCase };