import { PATHS } from '../../utils/constants/paths';

type TPaths = keyof typeof PATHS;

interface ISidebarItem {
  title: string;
  link: TPaths;
};

export type {
  ISidebarItem,
};
