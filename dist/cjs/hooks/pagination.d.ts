/// <reference types="react" />
import { Pagination } from '../core';
export declare const usePagination: (pagination: Pagination) => {
    page: number;
    perPage: number;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPerPage: import("react").Dispatch<import("react").SetStateAction<number>>;
};
