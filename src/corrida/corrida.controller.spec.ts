import { Test, TestingModule } from '@nestjs/testing';
import { CorridaController } from './corrida.controller';

describe('CorridaController', () => {
  let controller: CorridaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorridaController],
    }).compile();

    controller = module.get<CorridaController>(CorridaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
