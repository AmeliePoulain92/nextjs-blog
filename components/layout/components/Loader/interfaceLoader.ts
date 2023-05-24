export interface ILoadingProps {
  size?: number,
  color?: 'light' | 'primary' | string,
  position?: 'relative' | 'absolute' | 'fixed',
  padding?: number,
  blur?:boolean
  className?:string,
  isShow?: boolean,
  newMode?: boolean,
}
