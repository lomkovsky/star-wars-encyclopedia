import { People } from "./people";
import { IStarship } from "./starship";

export class HttpResponseBody {
    count!: number;
	next!: string;
	previous!: string;
	results!: People[] | IStarship[];
}