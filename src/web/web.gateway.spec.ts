import { Test, TestingModule } from '@nestjs/testing';
import { WebGateway } from './web.gateway';

describe('WebGateway', () => {
  let gateway: WebGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebGateway],
    }).compile();

    gateway = module.get<WebGateway>(WebGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
