import type { Metadata } from 'next'
import KatalogMocy from '@/components/sections/KatalogMocy'

export const metadata: Metadata = {
  title: 'Katalog Mocy — Chip Tuning | ERWO Garage',
  description:
    'Sprawdź potencjał swojego silnika. Przeglądaj wyniki chip tuningu dla ponad 10 000 silników — osobowe, dostawcze, ciężarowe, rolnicze i quady.',
  keywords: [
    'katalog mocy',
    'chip tuning wyniki',
    'przyrost mocy chip tuning',
    'chip tuning KM Nm',
    'ERWO Garage chip tuning',
  ],
  openGraph: {
    title: 'Katalog Mocy — Chip Tuning | ERWO Garage',
    description: 'Sprawdź przyrost mocy i momentu obrotowego dla swojego silnika.',
    url: 'https://erwo-garage.pl/katalog-mocy',
  },
}

export default function KatalogMocyPage() {
  return <KatalogMocy />
}
