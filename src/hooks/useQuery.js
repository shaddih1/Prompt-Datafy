import { useSearchParams } from 'next/navigation'

const useQuery = ()=> {
  return new URLSearchParams(useSearchParams())
}

export default useQuery
