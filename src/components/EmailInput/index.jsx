import { Component } from 'react'
import styled from 'styled-component'
import colors from '../../utils/style/colors'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  updateInputValue = (value) => {
    this.setState({ inputValue: value })
  }

  render() {
    const { theme } = this.props
    return (
      <div>
        {this.state.inputValue}
        <input
          onChange={(event) => this.updateInputValue(event.target.value)}
        />
      </div>
    )
  }
}

export default EmailInput
