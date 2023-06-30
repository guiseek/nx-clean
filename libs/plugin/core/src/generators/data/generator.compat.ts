import { convertNxGenerator } from '@nx/devkit';
import generator from './generator';

export const generatorSchematic = convertNxGenerator(generator);
