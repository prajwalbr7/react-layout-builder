// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <div className="container-body margin-bot">
    <ConfigurationContext.Consumer>
      {value => {
        const {showLeftNavbar} = value
        const ShowedLeft = showLeftNavbar ? (
          <div className="Left-Menu-Container">
            <h1 className="body-heading-style">Left Navbar Menu</h1>
            <ul>
              <li className="body-para">Item 1</li>
              <li className="body-para">Item 2</li>
              <li className="body-para">Item 3</li>
              <li className="body-para">Item 4</li>
            </ul>
          </div>
        ) : (
          ''
        )
        return ShowedLeft
      }}
    </ConfigurationContext.Consumer>
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent} = value
        const ShowedMiddle = showContent ? (
          <div className="Middle-Menu-Container">
            <h1 className="body-heading-style">Content</h1>
            <p className="body-para">
              Lorem ipsum Hi This is Prajwal Yadav B R from the student of NXT
              Wave ,Here by Finishing Out the React of 75% and eligible for al
              the placements Provides from NXT Wave .Thank You For Providing
              Such a great Knowledge.
            </p>
          </div>
        ) : (
          ''
        )
        return ShowedMiddle
      }}
    </ConfigurationContext.Consumer>
    <ConfigurationContext.Consumer>
      {value => {
        const {showRightNavbar} = value
        const ShowedRight = showRightNavbar ? (
          <div className="Right-Menu-Container">
            <h1 className="body-heading-style">Right Navbar Menu</h1>
            <div className="container-sub-right-sizing">
              <p className="body-para">Ad 1</p>
            </div>
            <div className="container-sub-right-sizing">
              <p className="body-para">Ad 2</p>
            </div>
          </div>
        ) : (
          ''
        )
        return ShowedRight
      }}
    </ConfigurationContext.Consumer>
  </div>
)
export default Body
