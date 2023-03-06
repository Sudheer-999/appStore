import './index.css'

const TabItem = props => {
  const {onTabClick, tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails

  const onTab = () => {
    onTabClick(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tab">
      <button
        type="button"
        onClick={onTab}
        className={`btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
