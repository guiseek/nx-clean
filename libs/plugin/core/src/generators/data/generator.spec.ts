import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';
import { DataGeneratorSchema } from '../../interfaces';

import domainGenerator from '../domain/generator';

import { default as generator } from './generator';

describe('data generator', () => {
  const domainOptions = {
    name: 'domain',
    directory: 'todo',
    entity: 'user'
  }

  let appTree: Tree;
  const options: DataGeneratorSchema = {
    name: 'test',
    domain: 'todo-domain',
    entity: 'user'
  };

  beforeEach(async () => {
    appTree = createTreeWithEmptyWorkspace();
    await domainGenerator(appTree, domainOptions);
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
