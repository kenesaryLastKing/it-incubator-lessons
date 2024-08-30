export type StreetType = {
  title: string
}

export type AddressType = {
  number?: number
  street: StreetType
}

export type HouseType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type GovernmentBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION'
  budget: number
  staffCount: number
  address: AddressType
}

export type CityType = {
  title: string
  houses: Array<HouseType>
  governmentBuildings: Array<GovernmentBuildingsType>
  citizensNumber: number
}

export const addMoneyToBudget = (
  building: GovernmentBuildingsType,
  budget: number
) => {
  building.budget += budget
}

export const repairHouse = (houses: HouseType) => {
  houses.repaired = true
}

export const toFireStaff = (city: GovernmentBuildingsType, staff: number) => {
  city.staffCount -= staff
}

export const toHireStaff = (
  city: GovernmentBuildingsType,
  staffCountHire: number
) => {
  city.staffCount += staffCountHire
}
