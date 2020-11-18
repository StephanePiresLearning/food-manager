export interface RecipeBook {
  [recipeName: string]: Recipe
}

export type Recipe = Array<Ingredient>
export type Fridge = Array<Ingredient>

export interface Ingredient {
  ingredient: string
  quantity?: number | null
  mesure_unit?: UnitsMesure | null
  peremption_date?: Date
}

export interface FoodStock {
  fridge: Array<Ingredient>
  dryStock: Array<Ingredient>
}

const unitsMesure = ['cac', 'cas', 'cl', 'g', 'pincé', 'ml'] as const
type UnitsMesure = typeof unitsMesure[number]

function getUnitLabel(unit: UnitsMesure): string {
  switch (unit) {
    case 'cac':
      return 'Cuillière à café'
    case 'cas':
      return 'Cuillière à soupe'
    case 'cl':
      return 'Centilitres'
    case 'pincé':
      return 'Pincé'
    case 'g':
      return 'Gramme'
    case 'ml':
      return 'Mililitres'
  }
}
