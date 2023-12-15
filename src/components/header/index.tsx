import USFlag from '../../../public/images/usa-flag.png'
import BRFlag from '../../../public/images/brazil-flag.png'
import LanguageButton from '../languageButton'

const Header = () => {
  return (
    <div className="flex h-20 w-full items-center justify-center bg-gray-600">
      <div className="flex w-full items-center justify-center gap-2">
        <LanguageButton flag={USFlag} alt="United States flag" locale="en" />
        <LanguageButton flag={BRFlag} alt="Brazil Flag" locale="pt" />
      </div>
    </div>
  )
}

export default Header
