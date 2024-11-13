import { IStarship } from "./models/starship";
import { People } from './models/people';

export interface IAppState {
    // readonly starship: IStarship[];
    readonly people: People[];
}
