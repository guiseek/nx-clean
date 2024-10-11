import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';
import { DataGeneratorSchema } from '../../interfaces';

import domainGenerator from '../domain/generator';

import { default as generator } from './generator';

describe('data generator', () => {
  const domainOptions = {
    name: 'domain-test',
    directory: 'todo/domain-test',
    entity: 'test',
  };

  let appTree: Tree;
  const options: DataGeneratorSchema = {
    name: 'data-test',
    domain: 'domain-test',
    entity: 'test',
    directory: 'todo/data-test',
  };

  beforeEach(async () => {
    appTree = createTreeWithEmptyWorkspace();
    await domainGenerator(appTree, domainOptions);
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'data-test');
    expect(config).toBeDefined();
  });
});
