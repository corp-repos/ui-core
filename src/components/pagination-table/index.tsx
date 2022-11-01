import React, { useCallback } from 'react'
import { Paper, Table, TableBody, TableContainer, TableRow, TableCell, TableFooter, TablePagination } from '@mui/material'
import { defaultPagination } from '../../core'

type PaginationHeader<T> = {
    key: T,
    label: string
}

type PaginationTable<T extends { id: string }> = {
    data: T[],
    headers: PaginationHeader<keyof T>[],
    total?: number,
    page: number,
    rowsPerPage?: number
    handleChangePage: (page: number) => void
    handleChangeRowsPerPage: (perPage: number) => void
}

export const PaginationTable = <T extends { id: string },>({
    rowsPerPage = defaultPagination.perPage,
    page,
    total,
    data,
    headers,
    handleChangePage,
    handleChangeRowsPerPage
}: PaginationTable<T>) => {
    const memoHandleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => handleChangePage(page), [])
    const memoHandleChangeRowsPerPage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => handleChangeRowsPerPage(Number(e.target.value)), [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="pagination table">
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {headers.map(header => {
                                const key = header.key
                                return (
                                    <TableCell component="th" scope="row">
                                        <>{row[key]}</>
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            component="div"
                            count={total || 0}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onPageChange={memoHandleChangePage}
                            onRowsPerPageChange={memoHandleChangeRowsPerPage}
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}