import * as React from 'react';
interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
export declare function TablePaginationActions(props: TablePaginationActionsProps): JSX.Element;
export {};
