export function useI18n() {
  return {
    t: (key: string) => {
      if (key === 'ui.common.dismiss') return 'Dismiss';
      return key;
    },
  };
}
