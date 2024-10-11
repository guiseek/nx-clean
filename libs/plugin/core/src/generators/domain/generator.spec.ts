import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { DomainGeneratorSchema } from '../../interfaces';
import { default as generator } from './generator';

describe('domain generator', () => {
  let appTree: Tree;
  const options: DomainGeneratorSchema = {
    name: 'domain-test',
    entity: 'test',
    directory: 'todo/domain-test',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'domain-test');
    expect(config).toBeDefined();
  });
});
