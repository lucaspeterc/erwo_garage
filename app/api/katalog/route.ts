import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// catalog.json must live at <project-root>/lib/catalog.json
// On Vercel set CATALOG_PATH env var to the absolute path if needed
const CATALOG_PATH =
  process.env.CATALOG_PATH ||
  path.join(process.cwd(), 'lib', 'catalog.json')

type Stage = {
  stage_label: string
  stage_name: string | null
  orig_hp: number | null
  orig_nm: number | null
  chip_hp: number | null
  chip_nm: number | null
  gain_hp: number | null
  gain_nm: number | null
}

type Record = {
  vehicle_type: string
  brand: string
  model: string
  generation: string
  engine: string
  url: string
  stages: Stage[]
}

let cachedData: Record[] | null = null

function loadCatalog(): Record[] {
  if (cachedData) return cachedData
  const raw = fs.readFileSync(CATALOG_PATH, 'utf-8')
  cachedData = JSON.parse(raw)
  return cachedData!
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const action       = searchParams.get('action') ?? ''
  const brand        = (searchParams.get('brand') ?? '').toLowerCase()
  const model        = searchParams.get('model') ?? ''
  const generation   = searchParams.get('generation') ?? ''
  const engine       = searchParams.get('engine') ?? ''
  const vehicle_type = searchParams.get('vehicle_type') ?? ''
  const q            = searchParams.get('q') ?? ''

  try {
    const catalog = loadCatalog()

    switch (action) {
      case 'vehicle_types': {
        const types = [...new Set(catalog.map((r) => r.vehicle_type))].sort()
        return NextResponse.json(types)
      }

      case 'brands': {
        let records = catalog
        if (vehicle_type) records = records.filter((r) => r.vehicle_type === vehicle_type)
        const brands = [...new Set(records.map((r) => r.brand))].sort()
        return NextResponse.json(brands)
      }

      case 'models': {
        if (!brand) return NextResponse.json({ error: 'brand required' }, { status: 400 })
        const models = [...new Set(catalog.filter((r) => r.brand === brand).map((r) => r.model))].sort()
        return NextResponse.json(models)
      }

      case 'generations': {
        if (!brand || !model) return NextResponse.json({ error: 'brand and model required' }, { status: 400 })
        const gens = [...new Set(catalog.filter((r) => r.brand === brand && r.model === model).map((r) => r.generation))].sort()
        return NextResponse.json(gens)
      }

      case 'engines': {
        if (!brand || !model || !generation) return NextResponse.json({ error: 'brand, model and generation required' }, { status: 400 })
        const engines = catalog
          .filter((r) => r.brand === brand && r.model === model && r.generation === generation)
          .map((r) => r.engine)
          .sort()
        return NextResponse.json(engines)
      }

      case 'result': {
        if (!brand || !model || !generation || !engine)
          return NextResponse.json({ error: 'all 4 fields required' }, { status: 400 })
        const record = catalog.find(
          (r) => r.brand === brand && r.model === model && r.generation === generation && r.engine === engine
        )
        if (!record) return NextResponse.json({ error: 'Nie znaleziono' }, { status: 404 })
        return NextResponse.json(record)
      }

      case 'search': {
        if (!q) return NextResponse.json({ error: 'q required' }, { status: 400 })
        const term = q.toLowerCase()
        const results = catalog
          .filter((r) =>
            r.brand.includes(term) ||
            r.model.toLowerCase().includes(term) ||
            r.engine.toLowerCase().includes(term)
          )
          .slice(0, 50)
        return NextResponse.json(results)
      }

      default:
        return NextResponse.json({ error: 'Nieznana akcja' }, { status: 400 })
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Błąd ładowania katalogu' }, { status: 500 })
  }
}
