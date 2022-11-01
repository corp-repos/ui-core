import Axios from 'axios';
import { defaultPagination, Pagination } from '../core';

const APIProfile = Axios.create({
    baseURL: 'https://reqres.in/api'
});

const _pagination = ({page, perPage}: Pagination) => {
    return `page=${page + 1}&per_page=${perPage}`
}

export const getListUser = (pagination: Pagination = defaultPagination) => {
    return APIProfile.get(`/users?${_pagination(pagination)}`)
}

export const getUser = (userId: string) => {
    return APIProfile.get(`/users/${userId}`)
}