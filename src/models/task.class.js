import { levels } from "./level.class";

export class Task {
    name = '';
    description = '';
    completed = false;
    level = levels.common

    constructor (name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}