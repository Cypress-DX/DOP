export type ButtonType = {
    buttonName: string
    callback: () => void
}

export const Button = (props: ButtonType) => {
   const onclickHandler = () => {
       props.callback()
   }

    return (
      <button onClick={onclickHandler}>{props.buttonName}</button>
   )
}