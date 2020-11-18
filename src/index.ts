import { RecipeBook, Fridge } from './types'

const recipeBook: RecipeBook = {
  mayonaise: [
    {
      ingredient: 'oeufs',
      quantity: 1,
      mesure_unit: null,
    },

    {
      ingredient: 'moutarde',
      quantity: 1,
      mesure_unit: 'cas',
    },

    {
      ingredient: 'huile neutre',
      quantity: 100,
      mesure_unit: 'ml',
    },

    {
      ingredient: 'poivre',
      quantity: null,
      mesure_unit: null,
    },

    { ingredient: 'sel', quantity: null, mesure_unit: null },
  ],
}

const fridge: Fridge = [
  {
    ingredient: 'oeufs',
    peremption_date: new Date('12/12/2021'),
  },
  {
    ingredient: 'crème fraiche',
    peremption_date: new Date('09/08/2020'),
  },
]

function getStateOfFridge() {
  const numberOfIngredients = fridge.length
  for (const elem of fridge) {
    console.log(
      `Votre ${elem.ingredient} se périme dans ${daysBeforeDate(
        elem.peremption_date
      )} jours.`
    )
  }
  console.log(`Il y a aliment ${numberOfIngredients} dans le frigo.`)
}

function daysBeforeDate(date): number {
  return Math.round(
    (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )
}

function test(recipeBook) {
  return recipeBook
}

test(recipeBook)

getStateOfFridge()
