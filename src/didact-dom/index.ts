import * as Didact from "../didact";
import Worker from "./worker";

const worker = new Worker();
export function render(element: Didact.Element, container: Node) {
  worker.setRootFiber({
    dom: container,
    type: null,
    parent: null,
    child: null,
    sibling: null,
    props: {
      children: [element],
    },
  });
}

export function useState<T>(initial: T) {
  return worker.useState(initial);
}

export function useMemo<T>(compute: () => T, deps: any[]): T {
  return worker.useMemo(compute, deps);
}

export function useCallback<T>(callback: T, deps: any[]): T {
  return worker.useCallback(callback, deps);
}

export function useEffect(callback: () => void | (() => void), deps: any[]) {
  return worker.useEffect(callback, deps);
}

export function useRef<T>(initial: T): { current: T } {
  return worker.useRef(initial);
}

export default {
  render,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
};
