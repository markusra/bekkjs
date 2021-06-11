import { Props } from "../didact";

export function isProperty(key: string): boolean {
  return key !== "children" && !isEventListener(key);
}

export function isGone(
  prevProps: Props,
  nextProps: Props
): (key: string) => boolean {
  return (key: string) => {
    return !(key in nextProps);
  };
}

export function isNew(
  prevProps: Props,
  nextProps: Props
): (key: string) => boolean {
  return (key: string) => {
    return prevProps[key] !== nextProps[key];
  };
}

export function isEventListener(key: string): boolean {
  return key.startsWith("on");
}

export function isRef(key: string): boolean {
  return key === "ref";
}

export function isEqual(dep1: any[], dep2: any[]): boolean {
  return JSON.stringify(dep1) === JSON.stringify(dep2);
}
