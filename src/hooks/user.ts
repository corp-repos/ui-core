import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Pagination } from '../core'
import { getListUser, getUser } from '../services'
import { usePagination } from './pagination'

export const useUserList = (pagination: Pagination) => {
    const {page, perPage, setPage, setPerPage} = usePagination(pagination)
    const resp = useQuery(['users', page, perPage], () => getListUser({page, perPage}))

    return {
        ...resp,
        page,
        perPage,
        setPage,
        setPerPage
    }
}

export const useUserItem = (userId: string) => {
    return useQuery(['users', userId], () => getUser(userId))
}