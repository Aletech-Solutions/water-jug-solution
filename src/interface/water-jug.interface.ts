export interface IWaterJugService {
    solve(x:number,y:number,z:number): {x:number,y:number,operation:string, steps:number}[];
}
  
  export interface IJug {
    a: number;
    b: number;
  }
  