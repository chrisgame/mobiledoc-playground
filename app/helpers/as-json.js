import { helper } from '@ember/component/helper';

export function asJson(params/*, hash*/) {
  return JSON.stringify(params, undefined, 2);
}

export default helper(asJson);
