
import {Pageable} from '../shared/pageable';
import {Sort} from '../shared/sort';

export class ListReq<T> {
  content: T[];
  pageable: Pageable;
  totalElements: number;
  last: boolean;
  totalPages: number;
  number: number;
  size: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
