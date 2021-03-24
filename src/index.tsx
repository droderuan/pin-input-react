import React, { useCallback, useRef, useState } from 'react'
/**
 *  See [here](https://github.com/droderuan/pin-input-react/blob/master/example/src/App.tsx) for a example
 */
export interface PinInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   *  **Required** \
   *  How many pin input will have.
   */
  length: number

  /**
   *  **Required** \
   *  Direction of the pins.
   */
  direction: 'column' | 'row'

  /**
   *  **Required** \
   *  Default component for each pin position.
   */
  pinComponent: React.FC

  /**
   *  **Optional** \
   *  Component for when the pin is focused.
   */
  pinComponentOnFocus?: React.FC

  /**
   * **Optional** \
   * Component to be used when the pin is filled. If `showValues` is True, this componet needs to render his children.
   */
  pinComponentOnFill?: React.FC

  /**
   *  **Optional** \
   *  Show the values of pin. \
   *  See [here](https://github.com/droderuan/pin-input-react/blob/master/example/src/App.tsx) for a example.
   */
  showValues?: boolean

  /**
   *  **Optional** \
   *  Component to be used when the `showValues` is True. This component needs to render his children. \
   *  See [here](https://github.com/droderuan/pin-input-react/blob/master/example/src/App.tsx) for a example.
   */
  pinText?: React.FC

  /**
   *  **Optional** \
   *  Callback to be used into the `onChange` of the input.
   */
  onChangePin?: (values: string) => void
}

export const PinInput: React.FC<PinInputProps> = ({
  length,
  direction,
  showValues,
  onChangePin,
  pinComponent: PinComponent,
  pinComponentOnFill: PinComponentOnFill,
  pinComponentOnFocus: PinComponentOnFocus,
  pinText: PinText,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [pinValues, setPinValues] = useState('')

  const [isFocused, setIsFocused] = useState(false)

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const whichToRender = useCallback(
    (index: number): React.ReactElement => {
      if (pinValues[index] && PinComponentOnFill) {
        return (
          <PinComponentOnFill>
            {showValues && PinText && <PinText>{pinValues[index]}</PinText>}
          </PinComponentOnFill>
        )
      }
      if (pinValues.length === index && PinComponentOnFocus && isFocused) {
        return <PinComponentOnFocus />
      }
      if (pinValues.length === length && PinComponentOnFocus && isFocused) {
        return <PinComponentOnFocus />
      }
      if (pinValues[index] && PinComponentOnFill) {
        return (
          <PinComponentOnFill>
            {showValues && PinText && <PinText>{pinValues[index]}</PinText>}
          </PinComponentOnFill>
        )
      }
      return <PinComponent />
    },
    [
      PinComponent,
      PinComponentOnFill,
      PinComponentOnFocus,
      pinValues,
      isFocused,
      showValues,
      PinText,
      length
    ]
  )

  const handleOnChange = useCallback(
    (value: string) => {
      if (onChangePin) {
        onChangePin(value)
      }

      setPinValues(value)
    },
    [onChangePin]
  )

  const onFocus = useCallback(() => {
    setIsFocused((oldProps) => !oldProps)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused((oldProps) => !oldProps)
  }, [])

  return (
    <div
      role='input'
      tabIndex={0}
      onClick={focusInput}
      onKeyDown={focusInput}
      style={{
        display: 'flex',
        flexDirection: direction,
        cursor: 'text',
        width: 'fit-content',
        outline: 'none'
      }}
    >
      <input
        ref={inputRef}
        {...props}
        onChange={(e) => handleOnChange(e.target.value)}
        maxLength={length}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0,
          outline: 'none',
          border: 0
        }}
        type='password'
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {Array(length)
        .fill('')
        .map((_, index) => whichToRender(index))}
    </div>
  )
}
