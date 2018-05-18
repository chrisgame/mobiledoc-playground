import { helper } from '@ember/component/helper';

export function asJson(params/*, hash*/) {
  return JSON.stringify(params);
}

export default helper(asJson);
