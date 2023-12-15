import USFlag from '../../../public/images/usa-flag.png'
import BRFlag from '../../../public/images/brazil-flag.png'
import LanguageButton from '../languageButton'

const Header = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center bg-gray-600">
      <div className="flex gap-2 items-center justify-center w-full">
        <LanguageButton flag={USFlag} alt="United States flag" locale="en" />
        <LanguageButton flag={BRFlag} alt="Brazil Flag" locale="pt" />
      </div>
    </div>
  )
}

export default Header
