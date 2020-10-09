import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ITrack {
  title: string;
  artist: string;
  album: string;
  lenght: number;
  children?: any;
}


export interface ISearchFilterItem {
  key: string;
  label: string;
  icon: IconProp;
  color: string;
  active?: boolean;
  onClick?: any;
}

export interface ITrackControlButtonProps {
  onClick: (param: React.MouseEvent<HTMLDivElement, MouseEvent>) => Promise<void>;
  icon: any;
  title: string;
}