import { Button } from './styles'

export const ButtonComponent = ({ children, onClick, secondary = false }) => {
  return (
    <Button onClick={ onClick } secondary={ secondary }>
      { children }
    </Button>
  )
}
