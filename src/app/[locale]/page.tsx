import { useTranslations } from 'next-intl'

const Page = () => {
  const translate = useTranslations('Translate')

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gray-800">
      <h1 className="text-3xl font-bold">{translate('title')}</h1>
      <h2 className="text-3xl font-bold">{translate('subtitle')}</h2>
    </div>
  )
}

export default Page
