// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, isActive, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickActiveLanguage = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickActiveLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
