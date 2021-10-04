import { DataGeneratorSchema, DataPluginCoreNormalizedSchema } from '../../interfaces';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import { default as generator } from './generator';
import { normalizeOptions } from '../../utils';

describe('data generator', () => {
  let appTree: Tree;
  const options: DataGeneratorSchema = {
    name: 'test',
    domain: 'account-domain',
    entity: 'user'
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });

  it('should normalize domain path', async () => {
    const normalized = normalizeOptions(appTree, options) as DataPluginCoreNormalizedSchema;
    expect(normalized.projectDomain).toBe('account/domain');
  });
});
