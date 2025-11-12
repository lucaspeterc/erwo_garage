# ERWO Garage - Profesjonalny Serwis & Chip Tuning

Nowoczesna strona internetowa dla ERWO Garage - profesjonalnego warsztatu samochodowego w Radomsku.

## 🚗 O Projekcie

Strona internetowa stworzona dla ERWO Garage, oferująca:
- **Serwis Samochodowy** - kompleksowa obsługa z wpisem do elektronicznej książki serwisowej
- **Chip Tuning** - profesjonalny tuning silnika z gwarancją
- **Hamownia** - pomiar mocy i momentu obrotowego
- **Elektronika Warsztatowa** - sprzedaż profesjonalnego sprzętu

## 🛠️ Technologie

- **Next.js 14+** - React framework z App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Ikony
- **React Hook Form** - Obsługa formularzy (do zaimplementowania)
- **Embla Carousel** - Karuzele (do zaimplementowania)

## 🎨 Design

- **Kolory**: Red (#E31E24), Black (#1A1A1A), White
- **Typografia**: Montserrat, Bebas Neue, Roboto, Open Sans
- **Responsywność**: Mobile-first (320px - 3840px)

## 📦 Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Zbuduj wersję produkcyjną
npm run build

# Uruchom wersję produkcyjną
npm start
```

## 📁 Struktura Projektu

```
erwo_garage/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Główny layout
│   ├── page.tsx           # Strona główna
│   └── globals.css        # Globalne style
├── components/
│   ├── layout/            # Komponenty layoutu (Header, Footer)
│   ├── sections/          # Sekcje strony głównej
│   ├── ui/                # Komponenty UI (do rozbudowy)
│   └── forms/             # Formularze (do rozbudowy)
├── lib/
│   └── constants.ts       # Stałe i dane
├── types/
│   └── index.ts           # TypeScript types
└── public/
    └── images/            # Zdjęcia i logo
```

## ✨ Zaimplementowane Funkcje

### Strona Główna
- ✅ Hero section z automatycznym sliderem (3 slajdy)
- ✅ Sekcja usług (4 karty)
- ✅ O nas z licznikami statystyk
- ✅ Dlaczego ERWO? (4 korzyści)
- ✅ Galeria realizacji (6 projektów)
- ✅ Opinie klientów (karuzela)
- ✅ Blog preview (3 ostatnie wpisy)
- ✅ Sekcja CTA z kontaktem

### Layout
- ✅ Responsywna nawigacja z mega menu
- ✅ Footer z danymi kontaktowymi
- ✅ Mobile menu

## 🚧 Do Zaimplementowania

- [ ] Strony szczegółowe usług
  - [ ] Serwis Samochodowy
  - [ ] Chip Tuning + kalkulator mocy
  - [ ] Hamownia
  - [ ] Elektronika Warsztatowa
- [ ] Strona Realizacje (pełna galeria)
- [ ] Blog (lista + pojedyncze posty)
- [ ] O nas (pełna strona)
- [ ] Kontakt (formularz + mapa)
- [ ] Formularze:
  - [ ] Kontaktowy
  - [ ] Wycena
  - [ ] Rezerwacja online
- [ ] Newsletter
- [ ] Integracja z Google Reviews
- [ ] Strukturyzowane dane (Schema.org)

## 📞 Kontakt ERWO Garage

- **Adres**: Przedborska 45, 97-500 Radomsko
- **Telefon**: +48 XXX XXX XXX
- **Email**: kontakt@erwo-garage.pl
- **Godziny**: Pon-Pt 8:00-18:00, Sob 9:00-14:00

## 📄 Licencja

Projekt stworzony dla ERWO Garage © 2025
