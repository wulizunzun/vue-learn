import { ComponentInternalInstance, getCurrentInstance } from "vue";
export function useCurrentInstance(): Object {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return {
    proxy,
  };
}
