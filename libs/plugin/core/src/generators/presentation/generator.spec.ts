import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { PresentationGeneratorSchema } from './schema';

describe('presentation generator', () => {
  let appTree: Tree;
  const options: PresentationGeneratorSchema = {
    name: 'test',
    project: 'core',
    domain: 'todo-domain',
    data: 'todo-data-access',
    entity: 'seek',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
