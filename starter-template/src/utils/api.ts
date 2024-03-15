import { Student, Students } from 'types/interfaces/students'
import http from './http'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<Students>('/students', { params: { _page: page, _limit: limit } })

export const addStudent = (body: Omit<Student, 'id'>) => http.post<Student>('/students', body)
