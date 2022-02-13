import { useEffect, useState } from 'react'

export const useHandleLoading = () => {
  const [loading, setLoading] = useState(true)
  const sesstionVal = sessionStorage.getItem('load')
  useEffect(() => {
    if (sesstionVal === '1') {
      setLoading(false)
    } else {
      setTimeout(() => {
        setLoading(false)
        sessionStorage.setItem('load', '1')
      }, 2000)
    }
  }, [sesstionVal])

  return { loading, setLoading, sesstionVal }
}
