import {useSelector, useDispatch} from 'react-redux'
import { Region } from '../../types';
import { selectRegion } from './control-selector';

import { setRegion } from './controls-slice';
import { CountryOption } from './CustomSelect';

type onSelect = (reg: Region | '' | 'All regions') => void;

export const useRegion = (): [Region | '' | 'All regions', onSelect] => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if(reg === 'All regions') {
      dispatch(setRegion(''))
    }else if(reg) {
      dispatch(setRegion(reg || ''))
    }else {
      dispatch(setRegion(''))
    }
  }

  return [region, handleSelect];
}
