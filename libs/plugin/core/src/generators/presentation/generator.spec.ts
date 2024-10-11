import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { PresentationGeneratorSchema } from '../../interfaces';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import domainGenerator from '../domain/generator';
import dataGenerator from '../data/generator';

import generator from './generator';

describe('presentation generator', () => {
  const domainOptions = {
    name: 'domain-test',
    directory: 'todo/domain-test',
    entity: 'test',
  };

  const dataOptions = {
    name: 'data-test',
    domain: 'domain-test',
    directory: 'todo/data-test',
    entity: 'test',
  };

  let appTree: Tree;
  const options: PresentationGeneratorSchema = {
    name: 'presentation-test',
    entity: 'test',
    domain: 'domain-test',
    data: 'data-test',
    directory: 'todo/presentation-test',
  };

  beforeEach(async () => {
    appTree = createTreeWithEmptyWorkspace();
    await domainGenerator(appTree, domainOptions);
    await dataGenerator(appTree, dataOptions);
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'presentation-test');
    expect(config).toBeDefined();
  });
});
