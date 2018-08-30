import { WebMenuModule } from './web-menu.module';

describe('WebMenuModule', () => {
  let webMenuModule: WebMenuModule;

  beforeEach(() => {
    webMenuModule = new WebMenuModule();
  });

  it('should create an instance', () => {
    expect(webMenuModule).toBeTruthy();
  });
});
