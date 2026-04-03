// ─────────────────────────────────────────────────────────────────────────────
// ERWO GARAGE – TREŚCI STRONY
// Edytuj ten plik, aby zmienić teksty na stronie.
// Nie zmieniaj nazw kluczy (np. "title", "subtitle") – tylko wartości w cudzysłowie.
// ─────────────────────────────────────────────────────────────────────────────

// ─── HERO ─────────────────────────────────────────────────────────────────────

export const heroSlides = [
  {
    label:    'Serwis & Diagnostyka',
    title:    'Twój Samochód w Najlepszych Rękach',
    subtitle: 'Profesjonalny serwis, chip tuning i diagnostyka komputerowa w Radomsku',
    cta1:     'Sprawdź ofertę',
    cta1Href: '/uslugi',
    cta2:     'Umów się online',
    cta2Href: '/kontakt',
  },
  {
    label:    'Chip Tuning',
    title:    'Chip Tuning & Hamownia',
    subtitle: 'Zwiększ moc swojego auta nawet o 35% z pełną gwarancją',
    cta1:     'Chip Tuning',
    cta1Href: '/uslugi/chip-tuning',
    cta2:     'Kalkulator mocy',
    cta2Href: '/katalog-mocy',
  },
  {
    label:    'BMW & MINI',
    title:    'Autoryzowany Serwis BMW & MINI',
    subtitle: '100 tys. km gwarancji na wybrane usługi. Twój spokój jest naszym priorytetem',
    cta1:     'Nasze usługi',
    cta1Href: '/uslugi',
    cta2:     'Kontakt',
    cta2Href: '/kontakt',
  },
]

// ─── SEKCJA O NAS (strona główna) ─────────────────────────────────────────────

export const aboutSection = {
  sectionLabel: 'O ERWO Garage',
  heading:      'ERWO Garage',
  body1:        'to profesjonalny warsztat samochodowy z wieloletnim doświadczeniem w branży automotive. Specjalizujemy się w kompleksowej obsłudze serwisowej, chip tuningu oraz diagnostyce komputerowej.',
  body2:        'Nasz zespół to certyfikowani mechanicy z pasją do motoryzacji. Dysponujemy najnowszym sprzętem diagnostycznym oraz nowoczesną hamownią, co pozwala nam świadczyć usługi na najwyższym poziomie.',
  body3prefix:  'Jesteśmy',
  body3link:    'autoryzowanym serwisem BMW i MINI',
  body3suffix:  ', co gwarantuje profesjonalną obsługę zgodną z wymogami producenta.',
  cta1:         'Poznaj nas lepiej',
  cta1Href:     '/o-nas',
  cta2:         'Skontaktuj się',
  cta2Href:     '/kontakt',
}

// ─── USŁUGI ───────────────────────────────────────────────────────────────────

export const servicesSection = {
  sectionLabel: 'Co robimy',
  heading:      'Nasze Usługi',
  subheading:   'Oferujemy kompleksową obsługę Twojego samochodu - od rutynowych przeglądów po zaawansowany chip tuning',
  cta:          'Dowiedz się więcej',
}

export const serviceFeatureLabels: Record<string, string[]> = {
  serwis:      ['Diagnostyka', 'Przeglądy', 'Naprawy'],
  chiptuning:  ['Do +35% mocy', 'Mniejsze spalanie', 'Gwarancja'],
  hamownia:    ['Pomiar mocy', 'Test wydajności', 'Protokół pomiaru'],
  elektronika: ['Testery', 'Programatory', 'Narzędzia'],
}

// ─── DLACZEGO ERWO ────────────────────────────────────────────────────────────

export const whyErwoSection = {
  sectionLabel: 'Nasz atut',
  heading:      'Dlaczego ERWO Garage?',
  subheading:   'Wybierz profesjonalizm, doświadczenie i najwyższą jakość obsługi',
}

// ─── OPINIE ───────────────────────────────────────────────────────────────────

export const reviewsSection = {
  sectionLabel: 'Opinie',
  heading:      'Opinie Klientów',
  subheading:   'Zobacz, co mówią o nas nasi zadowoleni klienci',
  googleCta:    'Zobacz więcej opinii w Google',
}

export const reviews = [
  {
    author: 'Marcin K.',
    rating: 5,
    text:   'Rewelacyjne miejsce! Chip tuning BMW E90 zrobiony perfekcyjnie. Przyrost mocy jest odczuwalny, auto jeździ zupełnie inaczej. Pełen profesjonalizm i uczciwe ceny. Gorąco polecam!',
  },
  {
    author: 'Tomasz W.',
    rating: 5,
    text:   'Najlepszy warsztat w okolicy. Diagnostyka precyzyjna, naprawa szybka i solidna. Pan Wojtek zawsze wyjaśnia co i dlaczego. Zaufanie od pierwszej wizyty.',
  },
  {
    author: 'Piotr S.',
    rating: 5,
    text:   'Hamownia i chip tuning – wyniki przeszły moje oczekiwania. Protokół z pomiaru bardzo szczegółowy. Widać że to pasjonaci motoryzacji, a nie tylko biznes.',
  },
  {
    author: 'Anna M.',
    rating: 5,
    text:   'Polecam z całego serca. Serwis klimatyzacji i wymiana oleju wykonane tego samego dnia. Ceny uczciwe, obsługa miła i profesjonalna. Już nie szukam innego mechanika.',
  },
  {
    author: 'Krzysztof B.',
    rating: 5,
    text:   'Znakomity serwis BMW. Wymiana rozrządu wykonana wzorowo, z wpisem do elektronicznej książki serwisowej. Warsztat laureat Orłów Motoryzacji – i widać to w każdym szczególe.',
  },
]

// ─── BLOG ─────────────────────────────────────────────────────────────────────

export const blogSection = {
  sectionLabel: 'Wiedza',
  heading:      'Blog Motoryzacyjny',
  subheading:   'Porady, nowości i ciekawostki ze świata automotive',
  readMore:     'Czytaj więcej',
  allArticles:  'Zobacz wszystkie artykuły',
}

export const blogPosts = [
  {
    slug:     'chip-tuning-co-musisz-wiedziec',
    category: 'Chip Tuning',
    title:    'Chip Tuning - Co musisz wiedzieć przed modyfikacją?',
    excerpt:  'Kompleksowy przewodnik po chip tuningu. Dowiedz się, jak zwiększyć moc swojego auta bezpiecznie i z gwarancją.',
    date:     '20 października 2025',
    readTime: '5 min czytania',
  },
  {
    slug:     'wymiana-rozrzadu-bmw',
    category: 'Serwis',
    title:    'Wymiana rozrządu BMW - Kiedy i dlaczego?',
    excerpt:  'Poznaj objawy zużycia rozrządu i dowiedz się, kiedy należy wykonać wymianę, aby uniknąć poważnej awarii.',
    date:     '15 października 2025',
    readTime: '7 min czytania',
  },
  {
    slug:     'diagnostyka-komputerowa',
    category: 'Diagnostyka',
    title:    'Diagnostyka komputerowa - Klucz do sprawnego auta',
    excerpt:  'Jak nowoczesna diagnostyka pomaga w szybkim wykryciu usterek i oszczędza Twoje pieniądze.',
    date:     '10 października 2025',
    readTime: '4 min czytania',
  },
]

// ─── REALIZACJE ───────────────────────────────────────────────────────────────

export const projectsSection = {
  sectionLabel:  'Portfolio',
  heading:       'Nasze Realizacje',
  subheading:    'Zobacz efekty naszej pracy - setki zadowolonych klientów i udanych projektów',
  viewDetails:   'Zobacz szczegóły',
  allProjects:   'Zobacz wszystkie realizacje',
}

export const projects = [
  { title: 'BMW M3 - Chip Tuning Stage 2',    spec: '+65 KM | +85 Nm',         category: 'Chip Tuning'         },
  { title: 'Audi A4 - Diagnostyka i Naprawa', spec: 'Wymiana rozrządu',         category: 'Serwis'              },
  { title: 'VW Golf GTI - Test Mocy',          spec: '285 KM | 380 Nm',          category: 'Hamownia'            },
  { title: 'BMW 320d - Chip Tuning',           spec: '+40 KM | +80 Nm',          category: 'Chip Tuning'         },
  { title: 'Skoda Octavia - Stage 1',          spec: '+35 KM | +50 Nm',          category: 'Chip Tuning'         },
  { title: 'Audi S3 - Serwis i Tuning',        spec: '+55 KM | +90 Nm',          category: 'Kompleksowa obsługa' },
]

export const projectsPage = {
  heading:    'Nasze Realizacje',
  subheading: 'Zobacz efekty naszej pracy – setki zadowolonych klientów i udanych projektów.',
  ctaText:    'Chcesz dołączyć do grona naszych zadowolonych klientów?',
  ctaButton:  'Umów wizytę',
  filterAll:  'Wszystkie',
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

export const ctaSection = {
  heading:       'Potrzebujesz Profesjonalnej Obsługi Swojego Auta?',
  subheading:    'Umów się na wizytę już dziś i przekonaj się o najwyższej jakości naszych usług',
  bookButton:    'Umów wizytę online',
  callButton:    'Zadzwoń teraz',
  hoursLabel:    'Godziny otwarcia:',
}

// ─── KATALOG MOCY ─────────────────────────────────────────────────────────────

export const katalogMocy = {
  sectionLabel:    'Chip Tuning',
  heading:         'Katalog Mocy',
  subheading:      'Sprawdź potencjał swojego silnika. Wybierz markę, model i wersję silnikową, aby zobaczyć efekty chip tuningu.',
  filterType:      'Typ pojazdu',
  filterBrand:     'Marka',
  filterModel:     'Model',
  filterGen:       'Generacja',
  filterEngine:    'Silnik',
  placeholderType: 'Wszystkie typy',
  placeholderBrand:'Wybierz markę',
  placeholderModel:'Wybierz model',
  placeholderGen:  'Wybierz generację',
  placeholderEng:  'Wybierz silnik',
  clearButton:     'Wyczyść wybór',
  loading:         'Ładowanie danych…',
  emptyState:      'Wybierz pojazd, aby zobaczyć wyniki tuningu',
  labelOriginal:   'Oryginał',
  labelAfter:      'Po tuningu',
  labelGain:       'Przyrost',
  labelCustom:     'Wycena indywidualna',
  stageBadge:      'Stage',
}

// ─── STRONA O NAS ─────────────────────────────────────────────────────────────

export const aboutPage = {
  heroSubtitle:  'Pasja do motoryzacji, precyzja w działaniu i zaufanie klientów od ponad 15 lat.',
  whoWeAreLabel: 'Kim jesteśmy?',
  intro1prefix:  'ERWO Garage',
  intro1:        'to rodzinny warsztat samochodowy zlokalizowany przy ul. Przedborskiej 45 w Radomsku, prowadzony przez',
  ownerName:     'Wojciecha Piwowarczyka',
  intro1suffix:  '. Działamy z pasją do motoryzacji od ponad 15 lat.',
  intro2:        'Specjalizujemy się w kompleksowym serwisie samochodowym – ze szczególnym uwzględnieniem marek BMW i MINI – oraz w profesjonalnym chip tuningu z pomiarem mocy na własnej hamowni.',
  intro3prefix:  'Jesteśmy wielokrotnym laureatem prestiżowego wyróżnienia',
  awardName:     'Orły Motoryzacji',
  intro3suffix:  ', przyznawanego najlepszym warsztatom w Polsce przez niezależne jury. To dla nas powód do dumy i codzienna motywacja do jeszcze lepszej pracy.',
  intro4:        'Nasi klienci cenią nas za uczciwość, fachowość i transparentną komunikację. Nie wciskamy zbędnych usług – wyjaśniamy co, dlaczego i za ile.',
  ctaBook:       'Umów wizytę',
  valuesLabel:   'Nasze wartości',
  awardLabel:    'Orły Motoryzacji',
  awardDesc:     'Prestiżowe wyróżnienie przyznawane najlepszym warsztatom w Polsce przez niezależne jury. Jesteśmy z niego dumni.',
  awards:        ['2025 Orzeł Motoryzacji', '2024 Orzeł Motoryzacji', '2023 Orzeł Motoryzacji', '2022 Orzeł Motoryzacji', '2021 Orzeł Motoryzacji', '2019 Orzeł Motoryzacji'],
}

export const aboutValues = [
  {
    title:       'Uczciwość',
    description: 'Zawsze transparentna wycena i wyjaśnienie każdej naprawy przed przystąpieniem do pracy.',
    icon:        'heart',
  },
  {
    title:       'Fachowość',
    description: 'Certyfikowani mechanicy z wieloletnim doświadczeniem przy markach premium i nie tylko.',
    icon:        'award',
  },
  {
    title:       'Podejście do klienta',
    description: 'Traktujemy każde auto jak własne. Indywidualne podejście i doradztwo bez wciskania zbędnych usług.',
    icon:        'users',
  },
  {
    title:       'Jakość potwierdzona nagrodami',
    description: 'Wielokrotny laureat prestiżowego wyróżnienia Orły Motoryzacji – przyznawanego najlepszym warsztatom w Polsce.',
    icon:        'trophy',
  },
]

// ─── KONTAKT ──────────────────────────────────────────────────────────────────

export const kontaktPage = {
  heroSubtitle:    'Masz pytania? Chcesz umówić wizytę? Skontaktuj się z nami – odpowiemy najszybciej jak to możliwe.',
  addressLabel:    'Adres',
  phoneLabel:      'Telefon',
  emailLabel:      'E-mail',
  hoursLabel:      'Godziny otwarcia',
  formHeading:     'Wyślij wiadomość',
  fieldName:       'Imię i nazwisko *',
  fieldPhone:      'Telefon',
  fieldEmail:      'E-mail *',
  fieldSubject:    'Temat',
  fieldMessage:    'Wiadomość *',
  subjectOptions:  ['Serwis samochodowy', 'Chip Tuning', 'Hamownia', 'Elektronika warsztatowa', 'Inne'],
  subjectDefault:  'Wybierz temat',
  submitLabel:     'Wyślij wiadomość',
  submittingLabel: 'Wysyłanie...',
  successHeading:  'Wiadomość wysłana!',
  successBody:     'Odezwiemy się najszybciej jak to możliwe.',
}

// ─── USŁUGI – SERWIS ──────────────────────────────────────────────────────────

export const serwisPage = {
  heroSubtitle:   'Kompleksowa obsługa serwisowa z wpisem do elektronicznej książki serwisowej. BMW, MINI, VW, Audi, Skoda, Seat i inne marki.',
  offerLabel:     'Co oferujemy?',
  offerItems:     [
    'Diagnostyka komputerowa',
    'Przeglądy prewencyjne i rejestracyjne',
    'Serwis klimatyzacji',
    'Wymiana rozrządów',
    'Wymiana oleju i filtrów',
    'Wymiana klocków i tarcz hamulcowych',
    'Wymiana sprzęgła',
    'Naprawa układu chłodzenia',
    'Naprawa zawieszenia',
    'Serwis skrzyni biegów',
    'Wymiana oleju w skrzyni DSG/automatycznej',
    'Wpis do elektronicznej książki serwisowej',
  ],
  whyLabel:       'Dlaczego ERWO Garage?',
  whyBody1:       'Specjalizujemy się w serwisie marek premium – szczególnie BMW i MINI – ale obsługujemy wszystkie marki osobowe i dostawcze. Każda naprawa jest poprzedzona szczegółową diagnostyką komputerową, a klient jest informowany o zakresie prac i kosztach przed ich rozpoczęciem.',
  whyBody2:       'Używamy wyłącznie oryginalnych lub równoważnych części od certyfikowanych dostawców. Po serwisie dokonujemy wpisu do elektronicznej książki serwisowej, co chroni Twoją gwarancję producenta.',
  warrantyBadge:  'Gwarancja na wykonane usługi do 100 000 km',
  phoneLabel:     'Zadzwoń:',
  bookButton:     'Umów wizytę online',
}

// ─── USŁUGI – CHIP TUNING ─────────────────────────────────────────────────────

export const chipTuningPage = {
  heroSubtitle:     'Profesjonalny tuning silnika z gwarancją i możliwością pomiaru mocy na własnej hamowni.',
  benefitsLabel:    'Korzyści chip tuningu',
  benefits:         [
    'Zwiększenie mocy silnika nawet do 35%',
    'Poprawa momentu obrotowego',
    'Zmniejszenie zużycia paliwa',
    'Lepsza odpowiedź na gaz',
    'Gwarancja na wykonaną modyfikację',
    'Możliwość pomiaru mocy przed i po na hamowni',
    'Bezpieczne parametry – w granicach wytrzymałości silnika',
    'Możliwość przywrócenia ustawień fabrycznych',
  ],
  examplesLabel:    'Przykładowe wyniki',
  examples:         [
    { car: 'BMW 320d (F30)',       before: '184 KM / 380 Nm', after: '220 KM / 450 Nm' },
    { car: 'VW Golf VII 2.0 TDI', before: '150 KM / 340 Nm', after: '185 KM / 400 Nm' },
    { car: 'Audi A4 2.0 TFSI',    before: '190 KM / 320 Nm', after: '240 KM / 380 Nm' },
    { car: 'BMW 530d (G30)',       before: '265 KM / 620 Nm', after: '320 KM / 700 Nm' },
  ],
  processLabel:     'Jak przebiega tuning?',
  processSteps:     [
    'Diagnostyka stanu technicznego pojazdu',
    'Odczyt oryginalnego oprogramowania ze sterownika',
    'Optymalizacja map w oprogramowaniu silnika',
    'Wgranie zmodyfikowanego oprogramowania',
    'Pomiar mocy na hamowni (opcjonalnie)',
    'Jazda próbna i weryfikacja parametrów',
  ],
  warrantyLabel:    'Gwarancja na modyfikację',
  warrantyBody:     'Każdy tuning wykonany w ERWO Garage objęty jest gwarancją. Możliwość powrotu do ustawień fabrycznych.',
  ctaButton:        'Zapytaj o wycenę',
}

// ─── USŁUGI – HAMOWNIA ────────────────────────────────────────────────────────

export const hamowniaPage = {
  heroSubtitle:  'Profesjonalny pomiar mocy i momentu obrotowego na nowoczesnej hamowni. Twarde dane zamiast obietnic.',
  measuresLabel: 'Co mierzymy?',
  measures:      [
    'Pomiar mocy rzeczywistej (KM / kW)',
    'Pomiar momentu obrotowego (Nm)',
    'Test przed i po chip tuningu',
    'Wydruk protokołu pomiarowego',
    'Porównanie krzywych mocy',
    'Diagnoza problemów silnika pod obciążeniem',
    'Możliwość nagrania przebiegu pomiaru',
  ],
  body:          'Pomiar na hamowni to jedyna miarodajna metoda weryfikacji rzeczywistej mocy silnika. Dane z komputera pokładowego mogą być niedokładne – hamownia pokazuje prawdę. Dlatego każdy chip tuning w ERWO Garage możemy potwierdzić twardymi danymi z wydruku.',
  whenLabel:     'Kiedy warto przyjechać na hamownię?',
  whenItems:     [
    'Przed i po chip tuningu – weryfikacja efektów',
    'Przy zakupie używanego auta – sprawdź czy moc zgadza się z dokumentami',
    'Przy problemach z silnikiem – diagnoza pod obciążeniem',
    'Przy przygotowaniu auta do zawodów',
    'Z ciekawości – ile naprawdę ma Twoje auto?',
  ],
  ctaButton:     'Umów termin',
}

// ─── USŁUGI – ELEKTRONIKA ─────────────────────────────────────────────────────

export const elektronikaPage = {
  heroSubtitle:  'Sprzedaż profesjonalnego sprzętu diagnostycznego i narzędzi warsztatowych. Doradztwo dla mechaników i hobbystów.',
  offerLabel:    'Co oferujemy?',
  offerItems:    [
    'Testery diagnostyczne OBD2',
    'Programatory sterowników ECU',
    'Interfejsy do pojazdów BMW, VW, Mercedes i inne',
    'Narzędzia specjalistyczne do demontażu',
    'Sprzęt do serwisu klimatyzacji',
    'Mierniki i oscyloskopy samochodowe',
    'Doradztwo w doborze sprzętu',
  ],
  body:          'Jako warsztat korzystający na co dzień z profesjonalnego sprzętu diagnostycznego, wiemy dokładnie co działa, a co nie. Pomagamy innym warsztatom i pasjonatom motoryzacji dobrać odpowiedni sprzęt do ich potrzeb.',
  forWhoLabel:   'Dla kogo?',
  forWhoItems:   [
    'Warsztaty samochodowe szukające niezawodnego sprzętu',
    'Mechanicy chcący rozszerzyć swoje możliwości diagnostyczne',
    'Pasjonaci motoryzacji i tunerzy',
    'Właściciele flot pojazdów',
  ],
  footerNote:    'Skontaktuj się z nami aby dowiedzieć się więcej o dostępnym asortymencie i aktualnych cenach.',
  ctaButton:     'Zapytaj o sprzęt',
}

// ─── BLOG – ARTYKUŁY ──────────────────────────────────────────────────────────

export const blogPageCopy = {
  heroSubtitle: 'Praktyczne porady i wiedza o motoryzacji z warsztatu ERWO Garage.',
  backToBlog:   'Wróć do bloga',
}

export const blogArticles = {
  chipTuning: {
    slug:     'chip-tuning-co-musisz-wiedziec',
    category: 'Chip Tuning',
    date:     '20 października 2025',
    readTime: '5 min czytania',
    intro:    'Chip tuning to jedna z najpopularniejszych metod na zwiększenie osiągów samochodu bez ingerencji w mechanikę silnika. Polega na modyfikacji oprogramowania sterownika ECU (Electronic Control Unit) – komputera zarządzającego pracą silnika. Ale zanim zdecydujesz się na ten krok, warto wiedzieć, czego się spodziewać.',
    howLabel: 'Jak działa chip tuning?',
    how:      'Producenci samochodów celowo zostawiają w sterownikach pewien zapas parametrów – ze względu na różne rynki, jakość paliwa czy wymagania emisyjne. Chip tuning optymalizuje te parametry: ciśnienie doładowania, dawkowanie paliwa, wyprzedzenie zapłonu i inne mapy silnika. Efektem jest więcej mocy, lepszy moment obrotowy i często niższe zużycie paliwa.',
    gainLabel:'Ile można zyskać?',
    gain:     'Przyrosty zależą od silnika i jego potencjału. Przy silnikach turbodoładowanych (diesel i benzynowych) efekty są najlepsze – typowe przyrosty to 20-35% mocy i 25-40% momentu obrotowego. Silniki wolnossące dają mniejsze efekty (5-10%).',
    safeLabel:'Czy chip tuning jest bezpieczny?',
    safe:     'Wykonany profesjonalnie – tak. Kluczowe jest, aby modyfikacja uwzględniała wytrzymałość silnika, skrzyni biegów i pozostałych podzespołów. W ERWO Garage każdy tuning poprzedzamy diagnostyką stanu technicznego pojazdu. Parametry dobieramy indywidualnie, nigdy nie przekraczając bezpiecznych granic dla danego układu.',
    warrantyLabel: 'Gwarancja i możliwość cofnięcia',
    warranty: 'W ERWO Garage każda modyfikacja objęta jest gwarancją. Co więcej, zawsze możesz wrócić do ustawień fabrycznych – przechowujemy oryginalny plik ze sterownika. Oferujemy również pomiar mocy przed i po tuningu na naszej hamowni, co potwierdza rzeczywiste efekty.',
    ctaHeading: 'Zainteresowany chip tuningiem?',
    ctaBody:    'Zadzwoń lub napisz – doradzimy najlepsze rozwiązanie dla Twojego auta.',
  },
  rozrzad: {
    slug:     'wymiana-rozrzadu-bmw',
    category: 'Serwis',
    date:     '15 października 2025',
    readTime: '7 min czytania',
    intro:    'Układ rozrządu to jeden z kluczowych elementów silnika. Odpowiada za synchronizację pracy zaworów z ruchem tłoków. Jego awaria – szczególnie w silnikach BMW – może oznaczać poważne i kosztowne uszkodzenie silnika. Dlatego regularna wymiana rozrządu to jeden z najważniejszych przeglądów, o którym nie wolno zapominać.',
    whenLabel:'Kiedy wymieniać rozrząd w BMW?',
    when:     'BMW zaleca wymianę łańcucha lub paska rozrządu zazwyczaj co 60 000–100 000 km, w zależności od modelu i roku produkcji. Jednak w praktyce wiele silników BMW (szczególnie N47, N57, N20, N26) jest znanych z problemów z łańcuchem rozrządu znacznie wcześniej. Nie warto czekać na objawy – zapobiegawcza wymiana jest wielokrotnie tańsza od naprawy poawaryjnej.',
    symptomsLabel: 'Objawy zużytego rozrządu',
    symptoms: [
      'Charakterystyczny metaliczny stukot przy zimnym rozruchu',
      'Błędy sterownika silnika (kontrolka Check Engine)',
      'Zwiększone zużycie oleju',
      'Problemy z rozruchem silnika',
      'Utrata mocy i nierówna praca silnika',
    ],
    scopeLabel: 'Co wymieniamy podczas serwisu rozrządu?',
    scope:    'Profesjonalna wymiana rozrządu w ERWO Garage obejmuje nie tylko łańcuch lub pasek, ale również napinaczy, prowadnic, pompy wody (jeśli napędzana jest przez rozrząd) oraz wszystkich uszczelek. Używamy wyłącznie oryginalnych lub certyfikowanych części. Po wymianie dokonujemy wpisu do elektronicznej książki serwisowej.',
    ctaHeading: 'Masz BMW i niepewny stan rozrządu?',
    ctaBody:    'Zapraszamy na diagnostykę. Lepiej sprawdzić zawczasu niż naprawiać po awarii.',
    ctaButton:  'Umów przegląd',
  },
  diagnostyka: {
    slug:     'diagnostyka-komputerowa',
    category: 'Diagnostyka',
    date:     '10 października 2025',
    readTime: '4 min czytania',
    intro:    'Nowoczesne samochody to zaawansowane systemy elektroniczne. Silnik, skrzynia biegów, ABS, ESP, poduszki powietrzne – każdy z tych układów sterowany jest przez osobny sterownik. Gdy pojawia się problem, diagnostyka komputerowa pozwala w ciągu kilku minut zlokalizować usterkę z dużą precyzją.',
    obd2Label: 'Czym jest diagnostyka OBD2?',
    obd2:     'OBD2 (On-Board Diagnostics) to standardowy interfejs diagnostyczny obecny we wszystkich autach osobowych od 2001 roku (benzynowe) i 2004 roku (diesle). Poprzez złącze OBD2 nasz specjalistyczny tester odczytuje kody błędów zapisane przez sterowniki pojazdu, wartości na żywo z czujników oraz przeprowadza testy aktuatorów.',
    checksLabel: 'Co możemy sprawdzić?',
    checks:   [
      'Kody błędów z wszystkich sterowników pojazdu',
      'Wartości na żywo: temperatura, ciśnienia, lambda, kąt wyprzedzenia zapłonu',
      'Stan czujników (MAF, MAP, O2, temperatury)',
      'Działanie wtryskiwaczy i cewek zapłonowych',
      'Układ ABS, ESP, poduszki powietrzne',
      'Skrzynia biegów – adaptacje, błędy, temperatury',
      'Kasowanie inspekcji i zerowanie adaptacji (Reset Service)',
    ],
    whyLabel: 'Dlaczego warto zrobić diagnostykę przed naprawą?',
    why:      'Diagnostyka pozwala uniknąć kosztownego strzelania na ślepo – wymiany części, które mogą być sprawne. Precyzyjne zlokalizowanie usterki skraca czas naprawy i obniża jej koszt. W ERWO Garage diagnostykę wykonujemy specjalistycznym sprzętem dedykowanym dla marek BMW, MINI, Audi, VW, Skoda, Seat i innych.',
    ctaHeading: 'Pali się kontrolka? Coś nie gra?',
    ctaBody:    'Zapraszamy na diagnostykę. Szybko i precyzyjnie znajdziemy przyczynę problemu.',
    ctaButton:  'Umów wizytę',
  },
}
