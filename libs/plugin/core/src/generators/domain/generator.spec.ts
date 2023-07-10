import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { DomainGeneratorSchema } from '../../interfaces';
import { default as generator } from './generator';

describe('domain generator', () => {
  let appTree: Tree;
  const options: DomainGeneratorSchema = { name: 'test', entity: 'todo' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
