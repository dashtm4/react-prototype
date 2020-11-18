import { PATHS } from '../../utils/constants';

type TPaths = keyof typeof PATHS;

interface ISidebarItem {
  title: string;
  link: TPaths;
};

export type {
  ISidebarItem,
};
