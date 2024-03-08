import { Injectable } from '@nestjs/common';
import { IWaterJugService } from 'src/interface/water-jug.interface';

@Injectable()
export class WaterJugService implements IWaterJugService {
    solve(x: number, y: number, z: number): {x:number,y:number,operation:string, steps:number}[] {
        const queue: any[] = [[x, y, []]];
        const visited = new Set<string>();
        const jugChanges: {x:number,y:number,operation:string, steps:number}[] = [];
    
        while (queue.length > 0) {
          const [jugX, jugY, path] = queue.shift();
          const currentState = `${jugX},${jugY}`;
    
          if (jugX === z || jugY === z || jugX + jugY === z) {
            jugChanges.push(...path, {x:jugX,y:jugY, operation:"Solved", steps: path.length+1 });
            return jugChanges;
          }
    
          if (visited.has(currentState)) {
            continue;
          }
    
          visited.add(currentState);
    
          const fillX = [x, jugY, [...path, {x:x,y:jugY, operation:"Fill X", steps: path.length + 1 }]];
          queue.push(fillX);
    
          const fillY = [jugX, y, [...path,  {x:jugX,y:y, operation:"Fill Y", steps: path.length + 1 }]];
          queue.push(fillY);
    
          // Empty jugX
          const emptyX = [0, jugY, [...path, {x:0,y:jugY, operation: `Empty X`, steps: path.length + 1 }]];
          queue.push(emptyX);
    
          // Empty jugY
          const emptyY = [jugX, 0, [...path, {x:jugX,y:0, operation: `Empty Y`, steps: path.length + 1 }]];
          queue.push(emptyY);
    
          // Transfer from jugX to jugY
          const transferXY = Math.min(jugX, y - jugY);
          const transferFromXToY = [jugX - transferXY, jugY + transferXY, [...path, {x:jugX - transferXY,y:jugY + transferXY, operation: `Transfer X to Y`, steps: path.length + 1 }]];
          queue.push(transferFromXToY);
    
          // Transfer from jugY to jugX
          const transferYX = Math.min(x - jugX, jugY);
          const transferFromYToX = [jugX + transferYX, jugY - transferYX, [...path, {x:jugX+transferYX, y:jugY-transferYX, operation: `Transfer X to Y`, steps: path.length + 1 }]];
          queue.push(transferFromYToX);
        }
    
        return [{x:x,y:y,operation:"No solution", steps:-1}];
      }
}
