import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    activeId: null,
  }

  setActiveId = id => {
    this.setState(prevState => ({
      activeId: prevState.activeId === id ? null : id,
    }))
  }

  render() {
    const {activeId} = this.state
    const {faqsList} = this.props

    return (
      <div className="background">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                FaqDetails={each}
                isActive={activeId === each.id}
                setActiveId={this.setActiveId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
