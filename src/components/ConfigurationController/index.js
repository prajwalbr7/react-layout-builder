// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          const onChangeContent = event => {
            onToggleShowContent(event.target.value)
          }
          const onChangeLeftContent = event => {
            onToggleShowLeftNavbar(event.target.value)
          }
          const onChangeRightContent = event => {
            onToggleShowRightNavbar(event.target.value)
          }
          return (
            <div className="Config-container">
              <h1 className="">Layout</h1>

              <input
                type="checkbox"
                checked={showContent}
                id="CONTENT"
                className="input-style"
                onChange={onChangeContent}
              />
              <label className="label-style" htmlFor="CONTENT">
                Content
              </label>
              <br />
              <input
                type="checkbox"
                checked={showLeftNavbar}
                id="LEFT NAVBAR"
                className="input-style"
                onChange={onChangeLeftContent}
              />
              <label className="label-style" htmlFor="LEFT NAVBAR">
                Left Navbar
              </label>
              <br />
              <input
                type="checkbox"
                id="RIGHT NAVBAR"
                checked={showRightNavbar}
                className="input-style"
                onChange={onChangeRightContent}
              />
              <label className="label-style" htmlFor="RIGHT NAVBAR">
                Right Navbar
              </label>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default ConfigurationController
