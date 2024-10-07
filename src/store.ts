import { atom } from 'nanostores';

export interface ContentInterface {
  name: string;
  url: string;
  description: string;
  image: string;
}

export const toolsType = atom<string>('Home');
export const toolsContent = atom<ContentInterface[]>([]);
