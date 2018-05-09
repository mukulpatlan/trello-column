import { Widget } from "./widget.model";

export class Container {
    public id: number;
    public name: string;
    public widgets: Array<Widget>;
    constructor(id: number, name: string, widgets: Array<Widget>) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
    }
}
