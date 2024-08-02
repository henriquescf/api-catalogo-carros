export interface ICars{
    id: number,
    name: string,
    description?: string,
    brand: string,
    year: number,
    km: number
}

export type TCreateCarBody = Omit<ICars, 'id'>
export type TUpdateCarBody = Partial<TCreateCarBody>