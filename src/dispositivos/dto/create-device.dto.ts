import { IsString } from "class-validator";

export class CreateDeviceDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly nome: string;
}
