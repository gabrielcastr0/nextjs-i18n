import { useTranslations } from 'next-intl'

const Page = () => {
  const translate = useTranslations('Translate')

  return (
    <div className="bg-gray-800 flex flex-1 flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">{translate('title')}</h1>
      <h2 className="text-3xl font-bold">{translate('subtitle')}</h2>
    </div>
  )
}

export default Page
