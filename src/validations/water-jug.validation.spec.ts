import { BadRequestException } from '@nestjs/common';
import { validatePayload } from './water-jug.validation';

describe('validatePayload', () => {
  it('throws a BadRequestException if any of the fields are not numbers', () => {
    const invalidPayload = { x: '5', y: 3, z: 4 };

    expect(() => validatePayload(invalidPayload)).toThrow(BadRequestException);
  });

  it('throws a BadRequestException if any of the fields are not positive integers', () => {
    const invalidPayload = { x: 0, y: 3, z: 4 };

    expect(() => validatePayload(invalidPayload)).toThrow(BadRequestException);
  });

  it('does not throw an exception if all fields are positive integers', () => {
    const validPayload = { x: 5, y: 3, z: 4 };

    expect(() => validatePayload(validPayload)).not.toThrow(BadRequestException);
  });
});