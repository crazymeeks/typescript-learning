
import Component from './base-components';
import {DragTarget} from '../models/drag-drop';
import {Project, ProjectStatus} from '../models/project';
import {Auto_bind} from '../decorators/autobind';
import {projectState} from '../state/project-state';
import {ProjectItem} from './project-item';

type ProjectType = 'active' | 'finished';

// Project list Class
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {

    assignedProjects: Project[] = [];
    
    constructor(private type: ProjectType) {
        super('project-list', 'app', false, `${type}-projects`);
        console.log('s');
        this.configure();
        
    }

    @Auto_bind
    dragOverHandler(event: DragEvent): void {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
    }
    @Auto_bind
    dragLeaveHandler(_:DragEvent): void {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    @Auto_bind
    dropHandler(event:DragEvent): void {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    renderProjects<T extends Project>(projects: T[]): void {
        this.element.querySelector('ul')!.textContent = '';
        for(const projItem of projects) {
            new ProjectItem(this.element.querySelector('ul')!.id, projItem);
        }
    }

    renderContent() {
        const listId = `${this.type}-project-lists`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        projectState.addListener((projects: Project[]) => {
            const filteredProjects = projects.filter(proj => {
                if (this.type === 'active') {
                    return proj.status === ProjectStatus.Active;
                }
                return proj.status === ProjectStatus.Finished;
            });
            this.renderProjects(filteredProjects);
        });
        this.renderContent();
    }
}