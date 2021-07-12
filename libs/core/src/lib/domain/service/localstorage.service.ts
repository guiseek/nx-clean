export abstract class LocalStorageService {
  abstract getItem(key: string): any;
  abstract setItem(key: string, value: any): void;
}
