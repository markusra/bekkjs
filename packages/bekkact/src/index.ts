import BekkactDom, {
  TextElement,
  TEXT_ELEMENT,
  Element,
} from "../../bekkact-dom/src";

function createTextElement(text: string): TextElement {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export function createElement(
  type: string,
  props: any,
  ...children: any[]
): Element {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        if (typeof child === "string" || typeof child === "number") {
          return createTextElement("" + child);
        } else {
          return child;
        }
      }),
    },
  };
}

type Updater<T> = (newValue: T | ((current: T) => T)) => void;

export function useState<T>(initial: T): [T, Updater<T>] {
  return BekkactDom.useState(initial);
}

export function useMemo<T>(compute: () => T, deps: any[]): T {
  return BekkactDom.useMemo(compute, deps);
}

export function useCallback<T>(callback: T, deps: any[]): T {
  return BekkactDom.useCallback(callback, deps);
}

export function useEffect(callback: () => void | (() => void), deps: any[]) {
  return BekkactDom.useEffect(callback, deps);
}

export function useRef<T>(initial: T): { current: T } {
  return BekkactDom.useRef(initial);
}

export default {
  createElement,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
};
