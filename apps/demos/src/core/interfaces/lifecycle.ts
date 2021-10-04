export interface Connected {
  connected(): void;
}

export interface Disconnected {
  disconnected(): void;
}

export interface AttributeChanged {
  attributeChanged(name: string, prev: string, next: string): void;
}
