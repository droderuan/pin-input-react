declare module 'pin-input-react' {
  export interface PinInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /* 
      How many pin input will have.
    */
    length: number

    /* 
      Direction of the pins.
    */
    direction: 'column' | 'row'

    /* 
      Required default component for each pin position.
    */
    pinComponent: React.FC

    /* 
      Optional component for when the pin is focused.
    */
    pinComponentOnFocus?: React.FC

    /* 
      Optional component for when the pin is filled. If `showValues` is True, this componet needs to render his children.
    */
    pinComponentOnFill?: React.FC

    /* 
      Show the values of pin.
    */
    showValues?: boolean

    /* 
      Optional component for when the `showValues` is True. This component needs to render his children.
    */
    pinText?: React.FC

    /* 
      Callback to be used into the `onChange` of the input.
    */
    onChangePin?: (values: string) => void
  }

  const PinInput: React.FC<PinInputProps>

  export default PinInput
}
