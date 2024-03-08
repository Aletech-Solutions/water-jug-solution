import { BadRequestException } from "@nestjs/common";

export const validatePayload = ({ x, y, z }: { x: any; y: any; z: any; }) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
      throw new BadRequestException('All fields must be numbers');
    }
  
    if (x <= 0 || y <= 0 || z <= 0) {
      throw new BadRequestException('All fields must be positive integers');
    }
  };
  
 