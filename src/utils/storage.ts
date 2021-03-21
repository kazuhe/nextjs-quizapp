// Web Storageを一元管理する為のクラス
export class Storage {
  private _storage = localStorage
  private _data = JSON.parse(this._storage.getItem(this._name) || '{}')
  constructor(private _name: string) {}

  getItem(key: string): string {
    return this._data[key]
  }

  getAllItem(): string {
    return this._data
  }

  setItem(key: string, value: string): void {
    this._data[key] = value
  }

  save(): void {
    this._storage.setItem(this._name, JSON.stringify(this._data))
  }
}
