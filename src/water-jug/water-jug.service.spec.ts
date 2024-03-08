import { Test, TestingModule } from '@nestjs/testing';
import { WaterJugService } from './water-jug.service';

describe('WaterJugService', () => {
  let service: WaterJugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterJugService],
    }).compile();

    service = module.get<WaterJugService>(WaterJugService);
  });

  it('should create a new WaterJugService instance', () => {
    expect(service).toBeDefined();
  });

  it('should return the correct sequence of steps to reach the target volume for 3 and 5 jugs with a target volume of 4', () => {
    const steps = service.solve(3, 5, 4);
    expect(steps).toEqual([
      {
        "x": 0, "y": 5, "operation": "Empty X", "steps": 1
      },
      {
        "x": 3, "y": 2, "operation": "Transfer X to Y", "steps": 2
      },
      {
        "x": 0, "y": 2, "operation": "Empty X", "steps": 3
      },
      {
        "x": 2, "y": 0, "operation": "Transfer X to Y", "steps": 4
      },
      {
        "x": 2, "y": 5, "operation": "Fill Y", "steps": 5
      },
      { "x": 3, "y": 4, "operation": "Transfer X to Y", "steps": 6 },
      { "x": 3, "y": 4, "operation": "Solved", "steps": 7 },

    ]);
  });

  it('should return the correct sequence of steps to reach the target volume for 4 and 7 jugs with a target volume of 9', () => {
    const steps = service.solve(4, 7, 9);
    expect(steps).toEqual([
      {
        "x": 4, "y": 0, "operation": "Empty Y", "steps": 1
      },
      {
        "x": 0, "y": 4, "operation": "Transfer X to Y", "steps": 2
      },
      {
        "x": 4, "y": 4, "operation": "Fill X", "steps": 3
      },
      {
        "x": 1, "y": 7, "operation": "Transfer X to Y", "steps": 4
      },
      {
        "x": 1, "y": 0, "operation": "Empty Y", "steps": 5
      },
      {
        "x": 0, "y": 1, "operation": "Transfer X to Y", "steps": 6
      },
      {
        "x": 4, "y": 1, "operation": "Fill X", "steps": 7
      },
      {
        "x": 0, "y": 5, "operation": "Transfer X to Y", "steps": 8
      },
      { "x": 4, "y": 5, "operation": "Fill X", "steps": 9 },
      { "x": 4, "y": 5, "operation": "Solved", "steps": 10 }

    ]);
  });
  it('should return no solution!', () => {
    const steps = service.solve(2, 6, 5);
    expect(steps).toEqual([{
      "x": 2, "y": 6, "operation": "No solution", "steps": -1
    }])
  })
})

