/* eslint-disable @typescript-eslint/no-explicit-any */
export function cn(...cns: any[]) {
    return cns
      .filter((cn) => (typeof cn === 'string' || cn instanceof String) && cn !== '')
      .join(' ');
  }
  
  export type ScopeStr = string & {
    and<V = string>(str: V): ScopeStr;
  };
  
  export function CreateScopeCSS(str: string) {
    function and(subStr: string) {
      if (!subStr || subStr === '' || typeof subStr !== 'string') return '' as ScopeStr;
      return CreateScopeCSS(str + '-' + subStr);
    }
    return Object.assign(str as any, { and }) as ScopeStr;
  }
  