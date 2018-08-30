import { PressModule } from './press.module';

describe('PressModule', () => {
  let pressModule: PressModule;

  beforeEach(() => {
    pressModule = new PressModule();
  });

  it('should create an instance', () => {
    expect(pressModule).toBeTruthy();
  });
});
