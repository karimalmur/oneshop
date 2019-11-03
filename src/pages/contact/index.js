import React from 'react'
import { navigate } from 'gatsby-link'
import styled from '@emotion/styled'
import css from '@emotion/css'

import Layout from '../../components/Layout'
import { rhythm, scale } from '../../utils/typography'
import SEO from '../../components/seo'

const InputItem = styled.div`
  width: 80%;
  margin: ${`${rhythm(1)} auto`};
  overflow-x: hidden;
  box-sizing: border-box;
`

const InputWrapper = styled.div`
  position: relative;
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(.5)};
  box-sizing: border-box;
  text-align: center;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    height: 10px;
    content: '';
    transition: transform 0.3s ease;
    transform: translate3d(-101%, 0, 0);
    border-bottom: ${props => `2px solid ${props.theme.themeColor}`};
  }
`

const Input = styled.input`
  ${scale(.8)};
  padding: ${rhythm(.4)};
  display: block;
  width: 99%;
  transition: border 0.2s ease;
  border: 0;
  outline: none;
  overflow: hidden;
  line-height: normal;
  position: relative;
  border-radius: 3px;
  box-shadow: 3px 3px ${props => props.theme.themeColor};
`

const InputLabel = styled.label`
  ${scale(.8)};
  padding: 0 ${rhythm(.4)};
  top: 0;
  position: absolute;
  top: ${rhythm(1.4)};
  display: block;
  cursor: text;
  transition: top 0.2s ease;
  color: ${props => props.theme.gray};

  abbr[title] {
    border-bottom: 1px dotted;
  }
`

const Button = styled.button`
  ${scale(1)};
  width: 100%;
  border-radius: 3px;
  font-weight: 700;
  line-height: 26px;
  display: block;
  position: relative;
  padding: ${rhythm(1)} ${rhythm(2)};
  transition: background-color .2s ease;
  text-align: center;
  color: #FFFFFF;
  border: 0;
  background-color: ${props => props.theme.themeColor}dd;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.themeColor};
  }
`

const TechCheckerContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.wideScreen ? "row" : "column"};
`

const FormSectionTitle = styled.div`
  h5 {
    ${scale(.8)};
  }
`

const TechCheckerCBContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: ${rhythm(1)};

  div {
    padding: ${rhythm(.2)};
  }
`

const CheckboxWrapper = styled.div`
  position: relative;
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(.5)};
  margin-right: ${rhythm(1)};
  box-sizing: border-box;
  text-align: center;
`

const TechCBLabel = styled.label`
  padding-left: ${rhythm(.8)};
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: left center;
`

const TechCheckbox = styled.input``

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    const { name, value } = e.target
    if (name === "tech") {
      const currentTechList = this.state["tech"]
      if (currentTechList && currentTechList.indexOf(`${value},`) >= 0) {
        this.setState({ [name]: currentTechList.replace(`${value},`, "") })
      } else {
        this.setState({ [name]: `${value},${this.state[name] ? this.state[name] : ''}` })
      }
    } else {
      this.setState({ [name]: value })
    }
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/?no-cache=1', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const techOptions = ["UX/UI design", "Android app", "WebIoT project", "Other"]

    return (
      <Layout
        css={css`
          margin: 0 auto;
          text-align: center;
        `}
      >
        <SEO title="Hire Us"/>
        <section
          css={css`
            max-width: 960px;
            margin: 0 auto;
          `}
        >
          <div>
            <h1
              css={css`
                ${scale(2)};
              `}
            >
              Hire Us
            </h1>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>

              <InputItem>
                <InputWrapper>
                  <Input
                    type={'text'}
                    name={'name'}
                    onChange={this.handleChange}
                    id={'name'}
                    required={true} />
                  <InputLabel htmlFor={'name'} >{this.state["name"] ? '' : "Your Name"}</InputLabel>
                </InputWrapper>
              </InputItem>

              <InputItem>
                <InputWrapper>
                  <Input
                    type={'email'}
                    name={'email'}
                    onChange={this.handleChange}
                    id={'email'}
                    required={true} />
                  <InputLabel htmlFor={'email'} >{this.state["email"] ? '' : "Your Email"}</InputLabel>
                </InputWrapper>
              </InputItem>

              <InputItem>
                <InputWrapper>
                  <Input
                    as="textarea"
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={true} />
                  <InputLabel htmlFor={'message'} >{this.state["message"] ? '' : "Message"}</InputLabel>
                </InputWrapper>
              </InputItem>

              <InputItem>
                <InputWrapper>
                  <TechCheckerContainer>
                    <FormSectionTitle>
                      <h5>Project type: </h5>
                    </FormSectionTitle>
                    <TechCheckerCBContainer>
                    {techOptions.map((option, idx) =>
                      <CheckboxWrapper key={idx}>
                        <TechCheckbox
                          id={`tech_${option}`}
                          name={'tech'}
                          type="checkbox"
                          value={option}
                          checked={this.state["tech"] && this.state["tech"].indexOf(`${option},`) >= 0}
                          onChange={this.handleChange}
                        />
                        <TechCBLabel htmlFor={`tech_${option}`}>
                          {option}
                        </TechCBLabel>
                      </CheckboxWrapper>
                    )}
                    </TechCheckerCBContainer>
                  </TechCheckerContainer>
                </InputWrapper>
              </InputItem>

              <InputItem>
                <InputWrapper
                  css={css`
                    padding-top: 0;
                    padding-bottom: 0;
                    overflow-x: auto;
                  `}
                >
                  <FormSectionTitle>
                    <h5>Any documents you'd like to attach?</h5>
                  </FormSectionTitle>
                  <Input
                    id="attachment"
                    type="file"
                    name="attachment"
                    onChange={this.handleAttachment}
                    css={css`
                      width: 0.1px;
                      height: 0.1px;
                      opacity: 0;
                      overflow: hidden;
                      position: absolute;
                      z-index: -1;

                      &:focus + label {
                        outline: 1px dotted #000;
	                      outline: -webkit-focus-ring-color auto 5px;
                      }
                    `}/>
                  <InputLabel
                    htmlFor={'attachment'}
                    css={theme => css`
                      top: 0;
                      position: relative;
                      color: #f1e5e6;
                      background-color: ${theme.primaryHover};
                      font-size: ${rhythm(.8)};
                      font-weight: 700;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      cursor: pointer;
                      display: inline-block;
                      overflow: hidden;
                      padding: .75rem 1.25rem;
                    `}
                  >
                    <span>
                      Add Attachments
                    </span>
                  </InputLabel>
                </InputWrapper>
              </InputItem>

              <InputItem>
                <InputWrapper>
                  <Button type="submit">
                    Send
                  </Button>
                </InputWrapper>
              </InputItem>
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}
