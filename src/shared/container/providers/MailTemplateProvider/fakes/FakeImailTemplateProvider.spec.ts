import ImailTemplateProvider from '../models/ImailTemplateProvider';

class FakeImailTemplateProvider implements ImailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}

export default FakeImailTemplateProvider;
