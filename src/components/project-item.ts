import {Draggable} from '../models/drag-drop.js';
import Component from './base-components.js';
import {Project} from '../models/project.js';
import {Auto_bind} from '../decorators/autobind.js';

// Project Item(for rendering projects)
export class ProjectItem extends Component<HTMLDivElement, HTMLElement> implements Draggable{

    project: Project;

    get persons() {
        return this.project.people === 1 ? '1 Person' : `${this.project.people} Persons`;
    }

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    @Auto_bind
    dragStartHandler(event: DragEvent): void {
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

    dragEndHandler(_: DragEvent): void {

    }


    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
    }
    renderContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
        this.element.querySelector('p')!.textContent = this.project.description;
    }
    
}