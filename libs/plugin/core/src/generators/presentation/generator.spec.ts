import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { PresentationGeneratorSchema } from '../../interfaces';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import domainGenerator from '../domain/generator';
import dataGenerator from '../data/generator';

import generator from './generator';

describe('presentation generator', () => {
  const domainOptions = {
    name: 'domain',
    directory: 'todo',
    entity: 'user',
  };

  const dataOptions = {
    name: 'data-access',
    domain: 'todo-domain',
    directory: 'todo',
    entity: 'user',
  };

  let appTree: Tree;
  const options: PresentationGeneratorSchema = {
    name: 'test',
    entity: 'seek',
    domain: 'todo-domain',
    data: 'todo-data-access',
  };

  beforeEach(async () => {
    appTree = createTreeWithEmptyWorkspace();
    await domainGenerator(appTree, domainOptions);
    await dataGenerator(appTree, dataOptions);
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
