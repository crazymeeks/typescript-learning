import {Project, ProjectStatus} from '../models/project.js';

type Listener<T> = (items: T[]) => void;

abstract class BaseState<T> {

    private listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }

    get eventListeners(){
        return this.listeners;
    }

}

class ProjectState extends BaseState<Project>{
    private projects: Project[] = [];

    private static instance: ProjectState;

    private constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject<T extends Project>(newProject: T) {
        this.projects.push(newProject);
        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find(prj => {
            return prj.id === projectId;
        });

        if (project) {
            project.status = newStatus;
            this.updateListeners();
        }
    }

    updateListeners() {
        for(const listenerFn of this.eventListeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export const projectState = ProjectState.getInstance();