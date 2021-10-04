import { convertNxGenerator } from '@nrwl/devkit';
import generator from './generator';

export const generatorSchematic = convertNxGenerator(generator);