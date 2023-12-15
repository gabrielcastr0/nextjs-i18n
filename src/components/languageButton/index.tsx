import { Link } from '@/navigation'
import Image, { StaticImageData } from 'next/image'

type LanguageButtonProps = {
  flag: StaticImageData
  alt: string
  locale: string
}

const LanguageButton = ({ flag, alt, locale }: LanguageButtonProps) => {
  return (
    <Link href="/" locale={locale as 'en' | 'pt'}>
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-md bg-transparent px-3 py-1 hover:bg-gray-800"
      >
        <Image width={48} height={48} alt={alt} src={flag} />
      </button>
    </Link>
  )
}

export default LanguageButton
