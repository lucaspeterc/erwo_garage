'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronDown, Zap, Leaf, Flame, CreditCard } from 'lucide-react'
import { katalogMocy as copy } from '@/lib/copy'

// ─── TYPES ────────────────────────────────────────────────────────────────────

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

type EngineRecord = {
  vehicle_type: string
  brand: string
  model: string
  generation: string
  engine: string
  url: string
  stages: Stage[]
}

type Index = {
  vehicle_types: string[]
  brands: string[]
  brands_by_type: Record<string, string[]>
}

// ─── DATA FETCHING ────────────────────────────────────────────────────────────

let indexCache: Index | null = null
const brandCache: Record<string, EngineRecord[]> = {}

async function fetchIndex(): Promise<Index> {
  if (indexCache) return indexCache
  const res = await fetch('/data/catalog/_index.json')
  indexCache = await res.json()
  return indexCache!
}

async function fetchBrand(brand: string): Promise<EngineRecord[]> {
  if (brandCache[brand]) return brandCache[brand]
  const res = await fetch(`/data/catalog/${brand}.json`)
  brandCache[brand] = await res.json()
  return brandCache[brand]
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// ─── SELECT ───────────────────────────────────────────────────────────────────

function Select({ label, value, onChange, options, disabled, placeholder }: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  disabled?: boolean
  placeholder: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-roboto-condensed">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled || options.length === 0}
          className="
            w-full bg-erwo-gray border border-gray-200 text-erwo-dark rounded-lg px-4 py-3 pr-10
            text-sm font-roboto focus:outline-none focus:border-erwo-red focus:ring-1 focus:ring-erwo-red
            disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer appearance-none
          "
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-erwo-red pointer-events-none" />
      </div>
    </div>
  )
}

// ─── STAGE CARD ───────────────────────────────────────────────────────────────

const STAGE_CONFIG: Record<string, { color: string; bg: string; border: string; Icon: typeof Zap; badge: string }> = {
  'Eko Tuning':     { color: '#16a34a', bg: 'bg-green-50',  border: 'border-green-200',  Icon: Leaf,       badge: 'bg-green-600'  },
  'Chip Tuning':    { color: '#E31E24', bg: 'bg-red-50',    border: 'border-red-200',    Icon: Zap,        badge: 'bg-erwo-red'   },
  'Extreme Tuning': { color: '#ea580c', bg: 'bg-orange-50', border: 'border-orange-200', Icon: Flame,      badge: 'bg-orange-600' },
  'Power Deck':     { color: '#7c3aed', bg: 'bg-purple-50', border: 'border-purple-200', Icon: CreditCard, badge: 'bg-purple-600' },
}

function StageCard({ stage }: { stage: Stage }) {
  const cfg = STAGE_CONFIG[stage.stage_label] ?? STAGE_CONFIG['Chip Tuning']
  const { Icon } = cfg

  return (
    <div className={`rounded-xl border ${cfg.border} overflow-hidden card-hover`}>
      <div className={`${cfg.bg} px-5 py-4 flex items-center justify-between border-b ${cfg.border}`}>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5" style={{ color: cfg.color }} />
          <div>
            <div className="font-bebas text-lg tracking-wide text-erwo-dark leading-none">{stage.stage_label}</div>
            {stage.stage_name && (
              <div className="text-xs text-gray-500 font-roboto mt-0.5">{stage.stage_name.replace(' | ', ' · ')}</div>
            )}
          </div>
        </div>
        <span className={`${cfg.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full font-roboto-condensed uppercase tracking-wide`}>
          {copy.stageBadge}
        </span>
      </div>

      <div className="bg-white px-5 py-4 space-y-3">
        {stage.chip_hp === null ? (
          <p className="text-gray-400 text-sm font-roboto italic text-center py-3">{copy.labelCustom}</p>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-roboto-condensed">{copy.labelOriginal}</span>
              <span className="text-gray-500 font-roboto text-sm">
                {stage.orig_hp ?? '—'} KM{stage.orig_nm !== null && <span className="text-gray-400"> / {stage.orig_nm} Nm</span>}
              </span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-roboto-condensed">{copy.labelAfter}</span>
              <span className="font-roboto font-bold text-erwo-dark text-sm">
                {stage.chip_hp} KM{stage.chip_nm !== null && <span className="font-normal text-gray-500"> / {stage.chip_nm} Nm</span>}
              </span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-roboto-condensed">{copy.labelGain}</span>
              <div className="flex items-baseline gap-1.5">
                {stage.gain_hp !== null && (
                  <span className="font-bebas text-2xl leading-none" style={{ color: cfg.color }}>+{stage.gain_hp} KM</span>
                )}
                {stage.gain_nm !== null && stage.gain_nm > 0 && (
                  <span className="font-bebas text-xl leading-none text-gray-400">/ +{stage.gain_nm} Nm</span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── RESULT ───────────────────────────────────────────────────────────────────

function ResultPanel({ result }: { result: EngineRecord }) {
  return (
    <div className="mt-10 animate-fade-in">
      <div className="mb-6 pb-5 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-50 text-erwo-red font-roboto-condensed border border-red-200">
            {result.vehicle_type}
          </span>
          <span className="text-gray-400 text-xs font-roboto-condensed uppercase tracking-widest">{result.brand}</span>
        </div>
        <h2 className="font-bebas text-4xl md:text-5xl text-erwo-dark tracking-wide leading-none">
          {result.model} {result.generation}
        </h2>
        <p className="text-gray-500 font-roboto text-sm mt-2">{result.engine}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {result.stages
          .filter((s) => s.stage_label === 'Chip Tuning')
          .map((stage, i) => <StageCard key={i} stage={stage} />)}
      </div>
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function KatalogMocy() {
  const [index,        setIndex]        = useState<Index | null>(null)
  const [brandData,    setBrandData]    = useState<EngineRecord[]>([])

  const [selType,       setSelType]       = useState('')
  const [selBrand,      setSelBrand]      = useState('')
  const [selModel,      setSelModel]      = useState('')
  const [selGeneration, setSelGeneration] = useState('')
  const [selEngine,     setSelEngine]     = useState('')

  const [result,  setResult]  = useState<EngineRecord | null>(null)
  const [loading, setLoading] = useState(false)

  // Load index once
  useEffect(() => { fetchIndex().then(setIndex).catch(console.error) }, [])

  // Load brand data when brand selected
  useEffect(() => {
    setSelModel(''); setSelGeneration(''); setSelEngine(''); setResult(null); setBrandData([])
    if (!selBrand) return
    setLoading(true)
    fetchBrand(selBrand.toLowerCase())
      .then((data) => { setBrandData(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [selBrand])

  // Reset downstream when type changes
  useEffect(() => {
    setSelBrand(''); setSelModel(''); setSelGeneration(''); setSelEngine(''); setResult(null); setBrandData([])
  }, [selType])

  useEffect(() => { setSelGeneration(''); setSelEngine(''); setResult(null) }, [selModel])
  useEffect(() => { setSelEngine(''); setResult(null) }, [selGeneration])

  // Derive cascading options from brandData
  const models = [...new Set(brandData.map((r) => r.model))].sort()
  const generations = [...new Set(brandData.filter((r) => r.model === selModel).map((r) => r.generation))].sort()
  const engines = [...new Set(
    brandData.filter((r) => r.model === selModel && r.generation === selGeneration).map((r) => r.engine)
  )].sort()

  // Find result
  useEffect(() => {
    if (!selEngine) return
    const found = brandData.find(
      (r) => r.model === selModel && r.generation === selGeneration && r.engine === selEngine
    ) ?? null
    setResult(found)
  }, [selEngine, brandData, selModel, selGeneration])

  const handleReset = useCallback(() => {
    setSelType(''); setSelBrand(''); setSelModel(''); setSelGeneration(''); setSelEngine('')
    setResult(null); setBrandData([])
  }, [])

  // Brands list based on selected type
  const brands = index
    ? (selType ? index.brands_by_type[selType] ?? [] : index.brands).map(capitalize).sort()
    : []

  return (
    <section className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-erwo-black py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #E31E24 0%, transparent 70%)' }} />
        <div className="relative">
          <p className="text-erwo-red font-roboto-condensed text-sm uppercase tracking-[0.3em] mb-3">{copy.sectionLabel}</p>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wide text-white leading-none">{copy.heading}</h1>
          <p className="text-gray-400 font-roboto text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            {copy.subheading}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container-custom px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <Select
              label={copy.filterType}
              value={selType}
              onChange={setSelType}
              options={index?.vehicle_types ?? []}
              placeholder={copy.placeholderType}
            />
            <Select
              label={copy.filterBrand}
              value={selBrand}
              onChange={setSelBrand}
              options={brands}
              disabled={!index}
              placeholder={copy.placeholderBrand}
            />
            <Select
              label={copy.filterModel}
              value={selModel}
              onChange={setSelModel}
              options={models}
              disabled={!selBrand || loading}
              placeholder={copy.placeholderModel}
            />
            <Select
              label={copy.filterGen}
              value={selGeneration}
              onChange={setSelGeneration}
              options={generations}
              disabled={!selModel}
              placeholder={copy.placeholderGen}
            />
            <Select
              label={copy.filterEngine}
              value={selEngine}
              onChange={setSelEngine}
              options={engines}
              disabled={!selGeneration}
              placeholder={copy.placeholderEng}
            />
          </div>
          {(selBrand || selType) && (
            <div className="mt-4 flex justify-end">
              <button onClick={handleReset} className="text-xs text-gray-400 hover:text-erwo-red font-roboto transition-colors duration-200 underline underline-offset-2">
                {copy.clearButton}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container-custom px-4 py-12">
        {loading && (
          <div className="flex flex-col items-center gap-3 text-gray-400 py-16">
            <div className="w-8 h-8 rounded-full border-2 border-erwo-red border-t-transparent animate-spin" />
            <span className="font-roboto text-sm">{copy.loading}</span>
          </div>
        )}
        {!loading && !result && (
          <div className="text-center py-20">
            <Zap className="w-16 h-16 mx-auto mb-4 text-gray-200" />
            <p className="font-roboto-condensed text-sm uppercase tracking-widest text-gray-400">
              {copy.emptyState}
            </p>
          </div>
        )}
        {!loading && result && <ResultPanel result={result} />}
      </div>
    </section>
  )
}
