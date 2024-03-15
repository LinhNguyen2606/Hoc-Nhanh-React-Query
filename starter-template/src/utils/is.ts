import axios, { AxiosError } from 'axios'

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => axios.isAxiosError(error)
