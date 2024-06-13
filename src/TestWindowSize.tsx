import { useWindowSize } from './hooks/useWindowSize'


const TestWindowSize = () => {
    const windowSize = useWindowSize()

  return (
    <div>
        {windowSize.width}
    </div>
  )
}

export default TestWindowSize