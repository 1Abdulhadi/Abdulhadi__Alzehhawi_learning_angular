import { CarModelPipe } from './car.model.pipe';

describe('CarModelPipe', () => {
  it('create an instance', () => {
    const pipe = new CarModelPipe();
    expect(pipe).toBeTruthy();
  });
});
