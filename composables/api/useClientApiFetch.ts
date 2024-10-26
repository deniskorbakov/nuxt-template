export const useClientApiFetch = (request: any, opts?: any) => {
  const config = useRuntimeConfig()
  return $fetch(request, { baseURL: config.public.baseURL, ...opts })
}
