export abstract class LocalStorageService {
  abstract getItem<T>(key: string): T;
  abstract setItem<T>(key: string, value: T): void;
}
