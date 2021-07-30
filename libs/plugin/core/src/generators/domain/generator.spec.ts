import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import { default as generator, normalizeOptions } from './generator';
import { DomainGeneratorSchema } from './schema';

describe('domain generator', () => {
  let appTree: Tree;
  const options: DomainGeneratorSchema = { name: 'test', entity: 'todo', project: 'core-common' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should normalize core path', async () => {
    const normalized = normalizeOptions(appTree, options);
    expect(normalized.projectCore).toBe('core/common');
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');

    expect(config).toBeDefined();
  })
});
