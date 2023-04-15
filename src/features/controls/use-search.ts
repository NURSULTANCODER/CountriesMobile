import { ChangeEventHandler } from 'react';
import {useSelector} from 'react-redux';
import { useAppDispatch } from '../../../store';
import { selectSearch } from './control-selector';
import { setSearch } from './controls-slice';

type onSearch = (text: string) => void;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (text: string) => {
    dispatch(setSearch(text))
  }

  return [search, handleSearch];
}
