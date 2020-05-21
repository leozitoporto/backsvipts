import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import ImailTemplateProvider from '../models/ImailTemplateProvider';

class FakeImailTemplateProvider implements ImailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeImailTemplateProvider;
