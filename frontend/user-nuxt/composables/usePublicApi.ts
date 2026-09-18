export function usePublicApi<T = any>(path: string, params?: Record<string, any>) {
  return useFetch<T>(`/api/v1${path}`, {
    query: params,
    transform: (value: any) => {
      if (value && typeof value === 'object' && 'data' in value && !Array.isArray(value.data) && typeof value.data === 'object') {
        return value.data
      }
      return value
    },
    getCachedData: () => undefined,
  })
}
