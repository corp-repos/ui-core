import { useState } from 'react'
import { Pagination } from '../core'

export const usePagination = (pagination: Pagination) => {
    const [page, setPage] = useState(pagination.page)
    const [perPage, setPerPage] = useState(pagination.perPage)
    return {page, perPage, setPage, setPerPage}
}