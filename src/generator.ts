import { filter, merge, random, sample, times } from 'lodash-es';
import nouns from './nouns';
import adjectives from './adjectives';

interface Options {
  alliterative: boolean;
  number: boolean;
  words: number;
}

function safeSampler<T>(items: T[]): T {
  return sample(items) as T;
}

function generate(options?: Partial<Options>) {
  const defaults: Options = {
    number: false,
    words: 2,
    alliterative: false,
  };
  const fullOpts = merge(defaults, options || {});

  var raw = getRawProjName(fullOpts);

  return {
    raw: raw,
    dashed: raw.join('-'),
    spaced: raw.join(' '),
  };
}

function getRawProjName(options: Options) {
  const raw: any[] = [];
  times(options.words - 1, function() {
    if (options.alliterative && raw.length)
      raw.push(
        safeSampler(getAlliterativeMatches(adjectives, raw[0].substring(0, 1)))
      );
    else raw.push(safeSampler(adjectives).toLowerCase());
  });

  if (options.alliterative)
    raw.push(
      safeSampler(getAlliterativeMatches(nouns, raw[0].substring(0, 1)))
    );
  else raw.push(safeSampler(nouns).toLowerCase());

  if (options.number) {
    raw.push(random(1, 9999));
  }
  return raw;
}

function getAlliterativeMatches(arr: string[], letter: string) {
  var check = letter.toLowerCase();
  return filter(arr, function(elm) {
    return elm.substring(0, 1).toLowerCase() === check;
  });
}

export default generate;
