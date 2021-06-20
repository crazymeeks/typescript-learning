import Component from './base-components';
import {validator, ValidatableInterface} from '../util/validation';
import {Auto_bind} from '../decorators/autobind';
import {projectState} from '../state/project-state';
import {Project, ProjectStatus} from '../models/project';

// Tuple type
type UserInputFormType = [string, string, number] | void;

// Project Input Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.configure();

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    }

    private gatherUserInput(): UserInputFormType {

        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = +this.peopleInputElement.value;

        const titleValidatable: ValidatableInterface = {
            value: enteredTitle,
            required: true,
            minLength: 5
        };

        const descriptionValidatable: ValidatableInterface = {
            value: enteredDescription,
            required: true,
            minLength: 10
        };

        const peopleValidatable: ValidatableInterface = {
            value: enteredPeople,
            required: true,
            min: 1,
            max: 10
        };


        if (validator(titleValidatable) && validator(descriptionValidatable) && validator(peopleValidatable)) {
            return [enteredTitle, enteredDescription, enteredPeople];
        }

        alert('All fields of required!');
        return;
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }


    @Auto_bind
    private submitHandler(event: Event) {
        event.preventDefault();
        
        const userInputs: UserInputFormType = this.gatherUserInput();

        if (Array.isArray(userInputs)) {
            const [title, description, people] = [...userInputs];
            console.log(title, description, people);
            projectState.addProject<Project>(new Project(Math.random().toString(), title, description, people, ProjectStatus.Active));

            this.clearInputs();
        }

    }

    renderContent() {}
    
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
}