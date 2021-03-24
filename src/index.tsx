import React, { useCallback, useRef, useState } from 'react'

interface PinInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  length: number
  direction: 'column' | 'row'
  pinComponent: React.FC
  pinComponentOnFocus?: React.FC
  pinComponentOnFill?: React.FC
  pinText?: React.FC
  onChangePin?: (values: string) => void
  showValues?: boolean
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
