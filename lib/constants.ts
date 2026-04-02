// Constants for ERWO Garage website

export const CONTACT_INFO = {
  phone: '+48 794 961 118',
  email: 'kontakt@erwo-garage.pl',
  address: 'Przedborska 45',
  city: 'Radomsko',
  postalCode: '97-500',
  fullAddress: 'Przedborska 45, 97-500 Radomsko',
  hours: {
    weekday: 'Pon - Pt: 8:00 - 18:00',
    saturday: 'Sob: 9:00 - 14:00',
    sunday: 'Niedz: Zamknięte'
  },
  coordinates: {
    lat: 51.0656,
    lng: 19.4533
  }
}

export const SOCIAL_MEDIA = {
  facebook: 'https://www.facebook.com/ERWOGarage/',
  instagram: 'https://www.instagram.com/erwo_garage/',
  youtube: 'https://youtube.com/@erwogarage',
}

export const NAV_LINKS = [
  {
    label: 'Usługi',
    href: '/uslugi',
    submenu: [
      { label: 'Serwis Samochodowy', href: '/uslugi/serwis-samochodowy' },
      { label: 'Chip Tuning', href: '/uslugi/chip-tuning' },
      { label: 'Hamownia', href: '/uslugi/hamownia' },
      { label: 'Elektronika Warsztatowa', href: '/uslugi/elektronika-warsztatowa' },
    ]
  },
  {
    label: 'Katalog Mocy',
    href: '/katalog-mocy',
  },
  {
    label: 'Realizacje',
    href: '/realizacje',
  },
  {
    label: 'O nas',
    href: '/o-nas',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
]

export const SERVICES = [
  {
    id: 'serwis',
    title: 'Serwis Samochodowy',
    description: 'Kompleksowa obsługa serwisowa z wpisem do elektronicznej książki serwisowej',
    icon: 'wrench',
    link: '/uslugi/serwis-samochodowy',
    features: [
      'Diagnostyka komputerowa',
      'Przeglądy prewencyjne',
      'Serwis klimatyzacji',
      'Wymiana rozrządów',
      'Wymiana oleju i filtrów',
      'Wymiana klocków hamulcowych',
      'Wymiana sprzęgła',
    ]
  },
  {
    id: 'chiptuning',
    title: 'Chip Tuning',
    description: 'Profesjonalny tuning silnika z gwarancją i możliwością pomiaru mocy',
    icon: 'zap',
    link: '/uslugi/chip-tuning',
    features: [
      'Zwiększenie mocy do 35%',
      'Poprawa momentu obrotowego',
      'Zmniejszenie spalania',
      'Gwarancja na modyfikację',
    ]
  },
  {
    id: 'hamownia',
    title: 'Hamownia',
    description: 'Profesjonalny pomiar mocy i momentu obrotowego na nowoczesnej hamowni',
    icon: 'gauge',
    link: '/uslugi/hamownia',
    features: [
      'Pomiar mocy rzeczywistej',
      'Pomiar momentu obrotowego',
      'Test przed i po tuningu',
      'Wydruk protokołu pomiarowego',
    ]
  },
  {
    id: 'elektronika',
    title: 'Elektronika Warsztatowa',
    description: 'Sprzedaż profesjonalnego sprzętu diagnostycznego i narzędzi warsztatowych',
    icon: 'laptop',
    link: '/uslugi/elektronika-warsztatowa',
    features: [
      'Testery diagnostyczne',
      'Programatory',
      'Narzędzia specjalistyczne',
      'Doradztwo techniczne',
    ]
  }
]

export const WHY_ERWO = [
  {
    title: 'Kompleksowa Obsługa',
    description: 'Od rutynowych przeglądów po zaawansowany tuning - wszystko w jednym miejscu',
    icon: 'check-circle',
  },
  {
    title: 'Najnowsza Technologia',
    description: 'Serwis aut BMW, MINI, VW, Audi, Skoda, Seat, z wpisem do elektronicznej książki serwisowej',
    icon: 'cpu',
  },
  {
    title: 'Doświadczony Zespół',
    description: 'Certyfikowani mechanicy z pasją do motoryzacji',
    icon: 'users',
  },
  {
    title: 'Gwarancja Jakości',
    description: '100 tys. km gwarancji na wybrane usługi. Twój spokój jest naszym priorytetem',
    icon: 'shield-check',
  }
]

export const STATS = [
  {
    value: '15+',
    label: 'Lat doświadczenia'
  },
  {
    value: '5000+',
    label: 'Zadowolonych klientów'
  },
  {
    value: '100%',
    label: 'Satysfakcji'
  }
]
