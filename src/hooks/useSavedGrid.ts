import useLocalStorageState from 'use-local-storage-state';
import { defaultGrid } from '../components/GridDisplay/initialGrid';
import { SourceNode } from '../pages/monitor/types';

export function useSavedGrid() {
  return useLocalStorageState<SourceNode[]>('__CNJTV_grid__', {
    defaultValue: defaultGrid,
    ssr: true
  });
}
