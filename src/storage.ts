export class StorageContainer<T> {
    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

