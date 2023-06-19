import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
  }
  
