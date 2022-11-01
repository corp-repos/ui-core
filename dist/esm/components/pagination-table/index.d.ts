/// <reference types="react" />
declare type PaginationHeader<T> = {
    key: T;
    label: string;
};
declare type PaginationTable<T extends {
    id: string;
}> = {
    data: T[];
    headers: PaginationHeader<keyof T>[];
    total?: number;
    page: number;
    rowsPerPage?: number;
    handleChangePage: (page: number) => void;
    handleChangeRowsPerPage: (perPage: number) => void;
};
export declare const PaginationTable: <T extends {
    id: string;
}>({ rowsPerPage, page, total, data, headers, handleChangePage, handleChangeRowsPerPage }: PaginationTable<T>) => JSX.Element;
export {};
