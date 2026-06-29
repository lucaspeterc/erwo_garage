// ─────────────────────────────────────────────────────────────────────────────
// ERWO GARAGE – REALIZACJE (galeria)
// Zdjęcia: public/images/realizacje/  – nazwa pliku = opis realizacji.
// Aby dodać realizację: wrzuć zdjęcie do folderu i dopisz wpis poniżej.
// ─────────────────────────────────────────────────────────────────────────────

export type Project = {
  id: number
  title: string
  category: string
  image: string
  specs: string
}

export const projects: Project[] = [
  { id: 1, title: "Audi A1 2.0TDI +35KM + 80NM", category: "Chip Tuning", image: "/images/realizacje/audi-a1-2-0tdi-35km-80nm.jpeg", specs: "+35 KM | +80 Nm" },
  { id: 2, title: "Audi A4 B9 3.0TDI podniesienie ciśnienia oleju", category: "Chip Tuning", image: "/images/realizacje/audi-a4-b9-3-0tdi-podniesienie-cisnienia-oleju.jpeg", specs: "Modyfikacja ciśnienia oleju" },
  { id: 3, title: "Audi Q7 3.0TDI - modyfikacja ciśnienia oleju", category: "Chip Tuning", image: "/images/realizacje/audi-q7-3-0tdi-modyfikacja-cisnienia-oleju.jpeg", specs: "Modyfikacja ciśnienia oleju" },
  { id: 4, title: "Audi Q7 3.0TDI CJGD Stage 1 + ciśnienie oleju", category: "Chip Tuning", image: "/images/realizacje/audi-q7-3-0tdi-cjgd-stage-1-cisnienie-oleju.jpeg", specs: "Modyfikacja ciśnienia oleju" },
  { id: 5, title: "Audi Q7 3.0TDI CJGD Stage 1 ECU + TCU + SSOFF", category: "Chip Tuning", image: "/images/realizacje/audi-q7-3-0tdi-cjgd-stage-1-ecu-tcu-ssoff.jpeg", specs: "Stage 1 + Start-Stop OFF" },
  { id: 6, title: "Audi RS7 2025 serwis układu hamulcowego", category: "Serwis", image: "/images/realizacje/audi-rs7-2025-serwis-ukladu-hamulcowego.jpeg", specs: "Serwis układu hamulcowego" },
  { id: 7, title: "BMW F10 2.0d N47 modyfikacja punktów zmiany biegów", category: "Chip Tuning", image: "/images/realizacje/bmw-f10-2-0d-n47-modyfikacja-punktow-zmiany-biegow.jpeg", specs: "Modyfikacja punktów zmiany biegów" },
  { id: 8, title: "BMW F20 2.0d + 35KM + 70NM", category: "Chip Tuning", image: "/images/realizacje/bmw-f20-2-0d-35km-70nm.jpeg", specs: "+35 KM | +70 Nm" },
  { id: 9, title: "BMW F30 2.0d + 40KM + 80NM", category: "Chip Tuning", image: "/images/realizacje/bmw-f30-2-0d-40km-80nm.jpeg", specs: "+40 KM | +80 Nm" },
  { id: 10, title: "BMW G12 740e serwis eksploatacyjny", category: "Serwis", image: "/images/realizacje/bmw-g12-740e-serwis-eksploatacyjny.jpeg", specs: "Serwis eksploatacyjny" },
  { id: 11, title: "BMW G30 530e Stage1 +120KM | 150NM", category: "Chip Tuning", image: "/images/realizacje/bmw-g30-530e-stage1-120km-150nm.jpeg", specs: "+120 KM | +150 Nm" },
  { id: 12, title: "Geometria zawieszenia", category: "Serwis", image: "/images/realizacje/geometria-zawieszenia.jpeg", specs: "Geometria 3D" },
  { id: 13, title: "Honda Civic X 1.5turbo Stage 1 +25KM | 40NM", category: "Chip Tuning", image: "/images/realizacje/honda-civic-x-1-5turbo-stage-1-25km-40nm.jpeg", specs: "+25 KM | +40 Nm" },
  { id: 14, title: "Mercedes S 3.0d Stage 1 +50KM +100NM", category: "Chip Tuning", image: "/images/realizacje/mercedes-s-3-0d-stage-1-50km-100nm.jpeg", specs: "+50 KM | +100 Nm" },
  { id: 15, title: "Naprawa elektroniki samochodowej", category: "Serwis", image: "/images/realizacje/naprawa-elektroniki-samochodowej.jpeg", specs: "Diagnostyka i naprawa elektroniki" },
  { id: 16, title: "Nissan 350z serwis mechaniczny", category: "Serwis", image: "/images/realizacje/nissan-350z-serwis-mechaniczny.jpeg", specs: "Serwis mechaniczny" },
  { id: 17, title: "Nissan Qashqai 1.2turbo +30KM +40NM", category: "Chip Tuning", image: "/images/realizacje/nissan-qashqai-1-2turbo-30km-40nm.jpeg", specs: "+30 KM | +40 Nm" },
  { id: 18, title: "Nissan Qashqai 1.5dci STAGE 1 +40KM +50NM", category: "Chip Tuning", image: "/images/realizacje/nissan-qashqai-1-5dci-stage-1-40km-50nm.jpeg", specs: "+40 KM | +50 Nm" },
  { id: 19, title: "Porsche Cayenne 2024 serwis układu hamulcowego", category: "Serwis", image: "/images/realizacje/porsche-cayenne-2024-serwis-ukladu-hamulcowego.jpeg", specs: "Serwis układu hamulcowego" },
  { id: 20, title: "Porsche Cayenne 3.0TDI serwis eksploatacyjny", category: "Serwis", image: "/images/realizacje/porsche-cayenne-3-0tdi-serwis-eksploatacujny.jpeg", specs: "Serwis eksploatacyjny" },
  { id: 21, title: "Skoda Octavia VRS 2.0TDI +30KM + 50NM", category: "Chip Tuning", image: "/images/realizacje/skoda-octavia-vrs-2-0tdi-30km-50nm.jpeg", specs: "+30 KM | +50 Nm" },
  { id: 22, title: "Skoda Superb 1.5TSI serwis mechaniczny + Stage 1 +40KM +60NM", category: "Kompleksowa obsługa", image: "/images/realizacje/skoda-superb-1-5tsi-serwis-mechaniczny-stage-1-40km-60nm.jpeg", specs: "+40 KM | +60 Nm" },
  { id: 23, title: "Skoda Superb 1.5TSI Stage 1 + zmiana punktów zmiany biegów DQ200G2", category: "Chip Tuning", image: "/images/realizacje/skoda-superb-1-5tsi-stage-1-zmiana-punktow-zmiany-biegow-dq200g2.jpeg", specs: "Modyfikacja punktów zmiany biegów" },
  { id: 24, title: "Volvo S60 2.0d +40KM +80NM", category: "Chip Tuning", image: "/images/realizacje/volvo-s60-2-0d-40km-80nm.jpeg", specs: "+40 KM | +80 Nm" },
  { id: 25, title: "VW Arteon 2.0BiTDI 240KM CUAA Stage 1 ECU+TCU + 40KM +60NM", category: "Chip Tuning", image: "/images/realizacje/vw-arteon-2-0bitdi-240km-cuaa-stage-1-ecu-tcu-40km-60nm.jpeg", specs: "+40 KM | +60 Nm" },
  { id: 26, title: "VW Arteon R 320KM modyfikacja skrzyni biegów", category: "Chip Tuning", image: "/images/realizacje/vw-arteon-r-320km-modyfikacja-skrzyni-biegow.jpeg", specs: "Modyfikacja skrzyni biegów" },
  { id: 27, title: "VW GOLF 8 R DNFG Stage 1 + 80KM | 110NM", category: "Chip Tuning", image: "/images/realizacje/vw-golf-8-r-dnfg-stage-1-80km-110nm.jpeg", specs: "+80 KM | +110 Nm" },
  { id: 28, title: "VW GOLF 8R GPF OFF", category: "Chip Tuning", image: "/images/realizacje/vw-golf-8r-gpf-off.jpeg", specs: "GPF OFF" },
  { id: 29, title: "VW GOLF VII 1.4TSI Stage 1 ECU + TCU +30KM +50NM", category: "Chip Tuning", image: "/images/realizacje/vw-golf-vii-1-4tsi-stage-1-ecu-tcu-30km-50nm.jpeg", specs: "+30 KM | +50 Nm" },
  { id: 30, title: "VW Tiguan 2.0 BiTDI Stage 1 ECU + TCU +50KM + 80NM", category: "Chip Tuning", image: "/images/realizacje/vw-tiguan-2-0-bitdi-stage-1-ecu-tcu-50km-80nm.jpeg", specs: "+50 KM | +80 Nm" },
]

export const categories = ['Wszystkie', 'Chip Tuning', 'Serwis', 'Kompleksowa obsługa']
